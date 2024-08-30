import React from 'react'

interface PointCounterProps {
	score: number
}

const PointCounter: React.FC<PointCounterProps> = ({ score }) => {
	return (
		<div>
			<h1 className='counter'>{score}</h1>
		</div>
	)
}

export default PointCounter
