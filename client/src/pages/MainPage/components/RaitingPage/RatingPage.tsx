import axios from 'axios'
import { Card } from 'primereact/card'
import { ScrollPanel } from 'primereact/scrollpanel'
import { useEffect, useState } from 'react'
import { UserData } from '../../../../app/App'
import './RaitingPage.css'

interface RaitingPageProps {
	userData: UserData
}

const RaitingPage: React.FC<RaitingPageProps> = ({ userData }) => {
	const [users, setUsers] = useState<UserData[]>([])
	const [currentId, setCurrentId] = useState<number>(-1)

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get('/api/users')
				if (Array.isArray(response.data)) {
					setUsers(response.data)
				} else {
					console.error('Ответ не является массивом:', response.data)
				}
			} catch (error) {
				console.error('Ошибка при загрузке данных:', error)
			}
		}

		fetchUsers()
	}, [])

	useEffect(() => {
		if (users.length > 0) {
			const curId = users.findIndex(
				user => user.telegramId === userData.telegramId
			)
			setCurrentId(curId !== -1 ? curId + 1 : -1)
		}
	}, [users, userData.telegramId])

	const renderUserCard = (user: UserData, index: number) => {
		const isCurrentUser = currentId === index + 1

		return (
			<Card
				key={user.telegramId}
				className={`user-card ${isCurrentUser ? 'current-user' : ''}`}
			>
				<div className='user-info-row'>
					<p>{index + 1}</p>
					<p>{user.telegramId}</p>
					<p>{user.totalScore}</p>
				</div>
			</Card>
		)
	}

	return users.length > 0 ? (
		<div className='rating-page'>
			<h2 className='rating'>Рейтинг игроков</h2>
			<div className='table-header'>
				<p>
					<strong>Место</strong>
				</p>
				<p>
					<strong>ID</strong>
				</p>
				<p>
					<strong>Очки</strong>
				</p>
			</div>
			<ScrollPanel className='user-list'>
				{users.map((user, index) => renderUserCard(user, index))}
			</ScrollPanel>
			{currentId !== -1 && renderUserCard(userData, currentId - 1)}
		</div>
	) : (
		<p>Загрузка...</p>
	)
}

export default RaitingPage
