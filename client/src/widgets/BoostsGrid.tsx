import React from 'react'
import { Hero } from '../features/HeroModal/HeroModal'
import HeroPreview from '../features/HeroPreview/HeroPreview'

interface HeroGridProps {
	heroes: Hero[]
	onHeroSelect: (hero: Hero) => void
}

const HeroGrid: React.FC<HeroGridProps> = ({ heroes, onHeroSelect }) => {
	return (
		<div className='grid-container'>
			{heroes.map((hero, index) => (
				<div className='grid-item' key={index}>
					<HeroPreview hero={hero} onHeroSelect={onHeroSelect} />
				</div>
			))}
		</div>
	)
}

export default HeroGrid
