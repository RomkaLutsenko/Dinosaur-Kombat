import { ProgressBar } from 'primereact/progressbar' // Импортируем компонент ProgressBar
import './LevelProgress.css'

interface LevelProgressProps {
	totalScore: number
}

const LevelProgress: React.FC<LevelProgressProps> = ({ totalScore }) => {
	const basePoints = 100 // Базовое количество очков для первого уровня
	const level = Math.floor(Math.log2(totalScore / basePoints + 1)) // Определяем уровень
	const pointsForNextLevel = basePoints * Math.pow(2, level) // Очки для достижения следующего уровня
	const requiredPoints = basePoints * (Math.pow(2, level) - 1) // Необходимые очки для достижения текущего уровня
	const progress = totalScore - requiredPoints // Оставшиеся очки для достижения следующего уровня
	const percentage = (progress / pointsForNextLevel) * 100 // Процент прогресса

	return (
		<div className='level-progress'>
			<h3 style={{ color: '#f3ba2f' }}>Ур. {level}</h3>
			<ProgressBar
				value={percentage}
				showValue={false}
				style={{
					height: '10px',
					width: '100px',
					backgroundColor: 'white',
				}}
				className='custom-progressbar'
			/>
		</div>
	)
}

export default LevelProgress
