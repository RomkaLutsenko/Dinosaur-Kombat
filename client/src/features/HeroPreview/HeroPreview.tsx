import React from 'react'
import BoosterStatus from '../../widgets/Boosts'
import { Hero } from '../HeroModal/HeroModal'
import styles from './HeroPreview.module.css'

interface HeroPreviewProps {
	hero: Hero
	onHeroSelect: (hero: Hero) => void
}

const HeroPreview: React.FC<HeroPreviewProps> = ({ hero, onHeroSelect }) => {
	return (
		<div className={styles.card} onClick={() => onHeroSelect(hero)}>
			<div className={styles.cardTitle}>{hero.name}</div>
			<img src={hero.image} alt={hero.name} className={styles.cardImage} />
			<BoosterStatus
				mode='boostsPage'
				clickBoost={hero.clickBoost}
				timeBoost={hero.timeBoost}
			/>
		</div>
	)
}

export default HeroPreview
