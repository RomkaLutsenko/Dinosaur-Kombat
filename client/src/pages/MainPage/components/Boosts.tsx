import React, { useEffect, useState } from 'react'
import {
	dailyCipher,
	dailyCombo,
	dailyReward,
} from '../../../shared/assets/images'
import { calculateTimeLeft } from '../../../shared/helpers/calculateTimeLeft'

const Boosts: React.FC = () => {
	const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState('')
	const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState('')
	const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState('')

	useEffect(() => {
		const updateCountdowns = () => {
			setDailyRewardTimeLeft(calculateTimeLeft(0))
			setDailyCipherTimeLeft(calculateTimeLeft(19))
			setDailyComboTimeLeft(calculateTimeLeft(12))
		}

		updateCountdowns()
		const interval = setInterval(updateCountdowns, 60000) // Update every minute

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='px-4 mt-6 flex justify-between gap-2'>
			<div className='bg-[#272a2f] rounded-lg px-4 py-2 w-full relative'>
				<div className='dot'></div>
				<img
					src={dailyReward}
					alt='Daily Reward'
					className='mx-auto w-12 h-12'
				/>
				<p className='text-[10px] text-center text-white mt-1'>Daily reward</p>
				<p className='text-[10px] font-medium text-center text-gray-400 mt-2'>
					{dailyRewardTimeLeft}
				</p>
			</div>
			<div className='bg-[#272a2f] rounded-lg px-4 py-2 w-full relative'>
				<div className='dot'></div>
				<img
					src={dailyCipher}
					alt='Daily Cipher'
					className='mx-auto w-12 h-12'
				/>
				<p className='text-[10px] text-center text-white mt-1'>Daily cipher</p>
				<p className='text-[10px] font-medium text-center text-gray-400 mt-2'>
					{dailyCipherTimeLeft}
				</p>
			</div>
			<div className='bg-[#272a2f] rounded-lg px-4 py-2 w-full relative'>
				<div className='dot'></div>
				<img src={dailyCombo} alt='Daily Combo' className='mx-auto w-12 h-12' />
				<p className='text-[10px] text-center text-white mt-1'>Daily combo</p>
				<p className='text-[10px] font-medium text-center text-gray-400 mt-2'>
					{dailyComboTimeLeft}
				</p>
			</div>
		</div>
	)
}

export default Boosts
