import React from 'react'
import BoosterStatus from '../../widgets/Boosts'
import styles from './HeroModal.module.css'

export interface Hero {
	name: string
	image: string
	description: string
	clickBoost: number
	timeBoost: number
	cost: number
}

interface HeroModalProps {
	hero: Hero
	visible: boolean
	onHide: () => void
	onBuy: (hero: Hero) => void
}

const HeroModal: React.FC<HeroModalProps> = ({
	hero,
	visible,
	onHide,
	onBuy,
}) => {
	if (!visible) return null

	return (
		<div className={styles.modalOverlay} onClick={onHide}>
			<div className={styles.modalContent} onClick={e => e.stopPropagation()}>
				<div className={styles.modalHeader}>{hero.name}</div>
				<img src={hero.image} alt={hero.name} className={styles.modalImage} />
				<div className={styles.modalDescription}>{hero.description}</div>
				<div className={styles.modalFooter}>
					<BoosterStatus
						mode='boostsPage'
						clickBoost={hero.clickBoost}
						timeBoost={hero.timeBoost}
					/>
					<button className={styles.button} onClick={() => onBuy(hero)}>
						Купить за {hero.cost} DP
					</button>
				</div>
			</div>
		</div>
	)
}

export default HeroModal
