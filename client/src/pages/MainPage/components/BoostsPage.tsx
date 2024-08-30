/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import HeroModal, { Hero } from '../../../features/HeroModal/HeroModal'
import data from '../../../shared/utils/heroes.json'
import HeroGrid from '../../../widgets/BoostsGrid'

interface BoostsPageProps {
	clickBoost: number
	timeBoost: number
	updateBoost: (clickBoost: number, timeBoost: number, cost: number) => void
}

const BoostsPage: React.FC<BoostsPageProps> = ({ updateBoost }) => {
	const [visible, setVisible] = useState<boolean>(false)
	const [hero, setHero] = useState<Hero | null>(null)
	const [heroes, setHeroes] = useState<Hero[]>(data) // Предполагается, что heroesData уже определено

	console.log(heroes)

	const showHero = (selectedHero: Hero) => {
		setHero(selectedHero)
		setVisible(true)
	}

	return (
		<div>
			<div>
				<HeroGrid heroes={heroes} onHeroSelect={showHero} />{' '}
				{/* Используем HeroGrid */}
				{hero && (
					<HeroModal
						onBuy={() =>
							updateBoost(hero.clickBoost, hero.timeBoost, hero.cost)
						}
						hero={hero}
						visible={visible}
						onHide={() => setVisible(false)}
					/>
				)}
			</div>
		</div>
	)
}

export default BoostsPage
