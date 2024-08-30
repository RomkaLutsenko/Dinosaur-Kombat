import React, { useState } from 'react'
import { mainCharacter, starCoin } from '../../../shared/assets/images'

interface DinoPageProps {
	score: number
	clickBoost: number
	timeBoost: number
	onButtonClick: () => void
}

const DinoPage: React.FC<DinoPageProps> = ({
	score,
	clickBoost,
	onButtonClick,
}) => {
	const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
		[]
	)

	const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget
		const rect = card.getBoundingClientRect()
		const x = e.clientX - rect.left - rect.width / 2
		const y = e.clientY - rect.top - rect.height / 2
		card.style.transform = `perspective(1000px) rotateX(${
			-y / 10
		}deg) rotateY(${x / 10}deg)`
		setTimeout(() => {
			card.style.transform = ''
		}, 100)

		onButtonClick()
	}

	const handleAnimationEnd = (id: number) => {
		setClicks(prevClicks => prevClicks.filter(click => click.id !== id))
	}

	return (
		<>
			<div className='px-4 mt-4 flex justify-center'>
				<div className='px-4 py-2 flex items-center space-x-2'>
					<img src={starCoin} alt='Star Coin' className='w-10 h-10' />
					<p className='text-4xl text-white'>{score.toLocaleString()}</p>
				</div>
			</div>
			<div className='px-4 mt-4 flex justify-center'>
				<div
					className='w-80 h-80 p-4 rounded-full circle-outer'
					onClick={handleCardClick}
				>
					<div className='w-full h-full rounded-full circle-inner'>
						<img
							src={mainCharacter}
							alt='Main Character'
							className='w-60 h-60'
						/>
					</div>
				</div>
			</div>

			{clicks.map(click => (
				<div
					key={click.id}
					className='absolute text-5xl font-bold opacity-0 text-white pointer-events-none'
					style={{
						top: `${click.y - 172}px`,
						left: `${click.x - 28}px`,
						animation: `float 1s ease-out`,
					}}
					onAnimationEnd={() => handleAnimationEnd(click.id)}
				>
					{clickBoost}
				</div>
			))}
		</>
	)
}

export default DinoPage
