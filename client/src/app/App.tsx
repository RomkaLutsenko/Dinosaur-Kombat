/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React, { useEffect, useState } from 'react'
import Boosts from '../pages/MainPage/components/Boosts'
import BoostsPage from '../pages/MainPage/components/BoostsPage'
import DinoPage from '../pages/MainPage/components/DinoPage'
import ProfilePage from '../pages/MainPage/components/ProfilePage'
import RatingPage from '../pages/MainPage/components/RaitingPage/RatingPage'
import Footer from '../widgets/Footer/Footer'
import Header from '../widgets/Header/Header'
import Loader from '../widgets/Loader/Loader'
import './App.css'

export interface UserData {
	telegramId: number
	nowScore: number
	totalScore: number
	clickBoost: number
	timeBoost: number
	lastActivity: string
}

const App: React.FC = () => {
	const [userData, setUserData] = useState<UserData | null>(null)
	const [activeIndex, setActiveIndex] = useState<number>(1)
	const [displayRuleModal, setDisplayRuleModal] = useState<boolean>(false)
	const [displayErrModal, setDisplayErrModal] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(true)
	const [loadMessage, setLoadMessage] = useState<string>('Загрузка...')
	const [modalMessage, setModalMessage] = useState<string>('')
	const [isTimeBoost, setIsTimeBoost] = useState<boolean>(false)
	const [nowDate, setNowDate] = useState<Date>(new Date())
	const [lastActivityDate, setLastActivityDate] = useState<Date>(new Date())

	const handleClick = async (): Promise<void> => {
		if (userData) {
			// Создаем новый объект userData на основе текущего состояния
			const updatedUserData: UserData = {
				...userData,
				totalScore: Number(userData.totalScore) + userData.clickBoost,
				nowScore: Number(userData.nowScore) + userData.clickBoost,
			}

			// Обновляем состояние с новым объектом
			setUserData(updatedUserData)
		}
	}

	const updateBoost = async (
		clickBoost: number,
		timeBoost: number,
		cost: number
	): Promise<void> => {
		if (userData && userData.nowScore >= cost) {
			try {
				const response = await axios.post<UserData>('/api/boost', {
					telegramId: userData.telegramId,
					clickBoost: userData.clickBoost + clickBoost,
					timeBoost: userData.timeBoost + timeBoost,
					nowScore: userData.nowScore - cost,
				})

				setUserData(response.data)
				setModalMessage('Успешно!')
				setDisplayErrModal(true)
			} catch (error) {
				console.error('Error updating clicks:', error)
			}
		} else {
			setModalMessage('У вас недостаточно DP для покупки!')
			setDisplayErrModal(true)
		}
	}

	const onTabChange = (event: { index: number }): void => {
		if (event.index === 0) {
			setDisplayRuleModal(true) // Показываем модальное окно для первого элемента
		} else {
			setActiveIndex(event.index) // Меняем активный индекс для остальных элементов
		}
	}

	const closeRuleModal = (): void => {
		setDisplayRuleModal(false) // Закрываем модальное окно
		if (activeIndex === 0) {
			setActiveIndex(1)
		}
	}

	useEffect(() => {
		try {
			const queryParams = new URLSearchParams(window.location.search)
			const telegramId = Number(queryParams.get('telegramId'))
			if (telegramId) {
				const fetchUserData = async () => {
					try {
						const response = await axios.post<UserData>('/api/user', {
							telegramId,
						})
						setUserData(response.data)
					} catch (error) {
						console.error('Error fetching user data:', error)
					}
				}

				fetchUserData()
			}
		} catch (e) {
			console.log('Ошибка', e)
			setLoadMessage('Не удалось получить ваш Telegram Id')
		}
	}, [])

	useEffect(() => {
		if (userData) {
			if (!isTimeBoost) {
				if (userData.timeBoost > 0) {
					setLastActivityDate(new Date(userData.lastActivity))
					setIsTimeBoost(true)
				}
			}
			if (loading) {
				//Сработает, если человек первый раз открыл приложение
				if (userData.totalScore === 0) {
					setDisplayRuleModal(true)
				}
				setTimeout(() => {
					setLoading(false) // Завершаем состояние загрузки после 1 секунд (для примера, потом уберу)
				}, 1000)
			}
		}
	}, [userData, loading])

	useEffect(() => {
		if (!loading) {
			const fetchCurrentDate = async () => {
				try {
					const response = await axios.get<{ currentDate: string }>(
						'/api/current-date'
					)
					setNowDate(new Date(response.data.currentDate))
				} catch (error) {
					console.error('Ошибка при получении текущей даты:', error)
				}
			}
			fetchCurrentDate()
		}

		const query = async (
			prevUserData: UserData | null
		): Promise<UserData | null> => {
			if (!prevUserData) return null // Проверяем, есть ли данные

			try {
				// Отправляем запрос на сервер
				const response = await axios.post<UserData>('/api/updateScore', {
					telegramId: prevUserData.telegramId,
					nowScore: prevUserData.nowScore,
					totalScore: prevUserData.totalScore,
				})

				return response.data // Возвращаем обновленные данные от сервера
			} catch (error) {
				console.error('Error updating:', error)
				return prevUserData // Если произошла ошибка, возвращаем предыдущее состояние
			}
		}

		const interval = setInterval(async () => {
			setUserData(prevUserData => {
				if (prevUserData) {
					query(prevUserData).then(updatedUserData => {
						setUserData(updatedUserData) // Обновляем состояние с новыми данными
					})
				}
				return prevUserData // Возвращаем предыдущее состояние, если userData еще нет
			})
		}, 5000)

		return () => clearInterval(interval) // Очищаем интервал при размонтировании компонента
	}, [loading])

	useEffect(() => {
		const calcPoints = async (): Promise<void> => {
			if (lastActivityDate < nowDate) {
				const differenceInSeconds = Math.floor(
					(nowDate.getTime() - lastActivityDate.getTime()) / 1000
				)
				const pointsToAdd = differenceInSeconds * (userData?.timeBoost ?? 0)
				try {
					const response = await axios.post<UserData>('/api/add', {
						telegramId: userData?.telegramId,
						pointsToAdd: pointsToAdd,
					})

					setUserData(response.data)
					setModalMessage(
						`За время вашего отсутствия вы накопили: ${pointsToAdd} DP!`
					)
					setDisplayErrModal(true)
				} catch (error) {
					console.error('Error updating clicks:', error)
				}
			}
		}

		if (userData) {
			calcPoints()
		}
	}, [lastActivityDate]) // Подсчет очков

	useEffect(() => {
		if (isTimeBoost) {
			const interval = setInterval(() => {
				if (userData) {
					// Создаем новый объект userData на основе текущего состояния
					setUserData(prevData => {
						// Дополнительная проверка состояния
						if (!prevData) return prevData
						// Обновляем данные на основе текущего состояния
						return {
							...prevData!,
							totalScore: Number(prevData.totalScore) + prevData.timeBoost,
							nowScore: Number(prevData.nowScore) + prevData.timeBoost,
						}
					})
				}
			}, 1000) // Каждую секунду

			return () => clearInterval(interval) // Очищаем интервал при размонтировании компонента
		}
	}, [isTimeBoost]) // При изменении бустера на время перезапускаем интервал

	return (
		<div className='bg-black flex justify-center'>
			<div className='w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl'>
				<Header
					totalScore={userData?.totalScore ?? 0}
					timeBoost={userData?.timeBoost ?? 0}
				/>
				<div className='flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0'>
					<div className='absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]'>
						<Dialog
							style={{ zIndex: '10' }}
							className='z-10'
							header='Правила игры'
							visible={displayRuleModal}
							onHide={closeRuleModal}
							closable={false}
						>
							<p>Это правила игры</p>
							<Button onClick={closeRuleModal}>Понял!</Button>
						</Dialog>
						<Dialog
							style={{ zIndex: '10' }}
							className='z-10'
							visible={displayErrModal}
							onHide={() => setDisplayErrModal(false)}
						>
							<p style={{ color: 'black' }}>{modalMessage}</p>
						</Dialog>
						{userData ? (
							<>
								{activeIndex === 1 && (
									<>
										<DinoPage
											score={Number(userData?.nowScore) ?? 0}
											clickBoost={userData?.clickBoost ?? 0}
											timeBoost={userData?.timeBoost ?? 0}
											onButtonClick={handleClick}
										/>
										<Boosts />
									</>
								)}
								{activeIndex === 2 && (
									<BoostsPage
										clickBoost={userData?.clickBoost ?? 0}
										timeBoost={userData?.timeBoost ?? 0}
										updateBoost={updateBoost}
									/>
								)}
								{activeIndex === 3 &&
									(userData ? <RatingPage userData={userData} /> : <Loader />)}
								{activeIndex === 4 &&
									(userData ? <ProfilePage userData={userData} /> : <Loader />)}
							</>
						) : (
							<>
								<Loader />
								<div>{loadMessage}</div>
							</>
						)}
					</div>
				</div>
				<Footer setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
			</div>
		</div>
	)
}

export default App
