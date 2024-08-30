import React from 'react'
import IncomeInfo from './components/IncomeInfo'
import LevelProgress from './components/LevelProgress/LevelProgress'
import ProfileInfo from './components/ProfileInfo'

interface HeaderProps {
	totalScore: number
	timeBoost: number
}

const Header: React.FC<HeaderProps> = props => {
	const { totalScore, timeBoost } = props

	return (
		<div className='px-4 z-10'>
			<ProfileInfo />
			<div className='flex items-center justify-between space-x-4 mt-1'>
				<LevelProgress totalScore={totalScore} />
				<IncomeInfo timeBoost={timeBoost} />
			</div>
		</div>
	)
}

export default Header
