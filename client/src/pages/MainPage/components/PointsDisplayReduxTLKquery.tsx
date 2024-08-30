import React, { useEffect } from 'react'
import {
	useAddPointsMutation,
	useGetPointsQuery,
} from '../../../app/store/apiSlice'
import { mainCharacter, starCoin } from '../../../shared/assets/images'

const PointsDisplay: React.FC = () => {
	const { data, refetch } = useGetPointsQuery()
	const [addPoints] = useAddPointsMutation()
	const points = data?.points ?? 0
	const pointsToAdd = 11

	const handleCardClick = async (e: React.MouseEvent<HTMLDivElement>) => {
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

		await addPoints(pointsToAdd)
		refetch()
	}

	useEffect(() => {
		refetch()
	}, [refetch])

	return (
		<div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
			<div className='px-4 py-2 flex items-center space-x-2'>
				<img src={starCoin} alt='Star Coin' className='w-10 h-10' />
				<p className='text-4xl text-white'>{points.toLocaleString()}</p>
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
							className='w-full h-full'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PointsDisplay
