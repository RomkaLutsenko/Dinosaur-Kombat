import React from 'react'

interface UserData {
	telegramId: number
	totalScore: number
	nowScore: number
	clickBoost: number
	timeBoost: number
	lastActivity: string
}

interface ProfilePageProps {
	userData: UserData
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userData }) => {
	return (
		<div>
			<p>Данные о пользователе</p>
			<span style={{ display: 'flex' }}>
				<label>telegramId: </label>
				<p style={{ margin: '0 10px' }}>{userData.telegramId}</p>
			</span>
			<span style={{ display: 'flex' }}>
				<label>totalScore: </label>
				<p style={{ margin: '0 10px' }}>{userData.totalScore}</p>
			</span>
			<span style={{ display: 'flex' }}>
				<label>nowScore: </label>
				<p style={{ margin: '0 10px' }}>{userData.nowScore}</p>
			</span>
			<span style={{ display: 'flex' }}>
				<label>clickBoost: </label>
				<p style={{ margin: '0 10px' }}>{userData.clickBoost}</p>
			</span>
			<span style={{ display: 'flex' }}>
				<label>timeBoost: </label>
				<p style={{ margin: '0 10px' }}>{userData.timeBoost}</p>
			</span>
			<span style={{ display: 'flex' }}>
				<label>lastActivity: </label>
				<p style={{ margin: '0 10px' }}>{userData.lastActivity}</p>
			</span>
		</div>
	)
}

export default ProfilePage
