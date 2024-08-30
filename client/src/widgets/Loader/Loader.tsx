import React from 'react'
import './Loader.css'

const Loader: React.FC = () => {
	return (
		<div className='compass-wrapper'>
			<div className='compass'>
				<div className='compass-center'></div>
				<div className='compass-needle'></div>
				<div className='compass-north'>N</div>
				<div className='compass-east'>E</div>
				<div className='compass-south'>S</div>
				<div className='compass-west'>W</div>
			</div>
		</div>
	)
}

export default Loader
