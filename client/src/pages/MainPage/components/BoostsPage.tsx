/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import HeroModal, { Hero } from '../../../features/HeroModal/HeroModal'
import HeroGrid from '../../../widgets/BoostsGrid'

interface BoostsPageProps {
	clickBoost: number
	timeBoost: number
	updateBoost: (clickBoost: number, timeBoost: number, cost: number) => void
}

const BoostsPage: React.FC<BoostsPageProps> = ({ updateBoost }) => {
	const [visible, setVisible] = useState<boolean>(false)
	const [hero, setHero] = useState<Hero | null>(null)
	const [heroes, setHeroes] = useState<Hero[]>(/*heroesData*/ []) // Предполагается, что heroesData уже определено

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
