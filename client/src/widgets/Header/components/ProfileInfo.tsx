import React from 'react'
import Compass from '../../../shared/assets/icons/Compass'

const ProfileInfo: React.FC = () => {
	return (
		<div className='flex items-center space-x-2 pt-4'>
			<div className='p-1 rounded-lg bg-[#1d2025]'>
				<a
					href='https://m.vk.com/osd_nebo_severa'
					target='_blank' // Открытие ссылки в новой вкладке
					rel='noopener noreferrer' // Безопасность при открытии новой вкладки
				>
					<Compass size={24} className='text-[#d4d4d4]' />
				</a>
			</div>
			<a
				href='https://m.vk.com/osd_nebo_severa'
				target='_blank' // Открытие ссылки в новой вкладке
				rel='noopener noreferrer' // Безопасность при открытии новой вкладки
			>
				<div>
					<p className='text-base'>Dinosaur Kombat</p>
				</div>
			</a>

			<div
				style={{
					marginLeft: 'auto',
				}}
			>
				<a
					href='https://m.vk.com/osd_nebo_severa'
					target='_blank' // Открытие ссылки в новой вкладке
					rel='noopener noreferrer' // Безопасность при открытии новой вкладки
				>
					<p className='text-base'>ОСД Небо Севера💙</p>
				</a>
			</div>
		</div>
	)
}

export default ProfileInfo
