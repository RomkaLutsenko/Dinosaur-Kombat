import React from 'react'
import { SocialIcon } from 'react-social-icons'
import RulesIcon from '../../../shared/assets/icons/RulesIcon'
import { starCoin } from '../../../shared/assets/images'

interface IncomeInfoProps {
	timeBoost: number
}

const IncomeInfo: React.FC<IncomeInfoProps> = props => {
	const { timeBoost: profitPerHour } = props

	const formatProfitPerHour = (profit: number) => {
		if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`
		if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`
		if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`
		return `+${profit}`
	}

	return (
		<div className='flex items-center w-2/3 border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-64'>
			<SocialIcon
				style={{ height: 30, width: 30 }}
				url='https://vk.com/osd_nebo_severa'
				className='icon'
			/>
			<div className='h-[32px] w-[2px] bg-[#43433b] mx-2'></div>
			<div className='flex-1 text-center'>
				<p className='text-xs text-[#85827d] font-medium'>Доход в час</p>
				<div className='flex items-center justify-center space-x-1'>
					<img src={starCoin} alt='Dollar Coin' className='w-[18px] h-[18px]' />
					<p className='text-sm'>{formatProfitPerHour(profitPerHour)}</p>
					{/* <Info size={20} className='text-[#43433b]' /> */}
				</div>
			</div>
			<div className='h-[32px] w-[2px] bg-[#43433b] mx-2'></div>
			<RulesIcon className='text-white' />
		</div>
	)
}

export default IncomeInfo
