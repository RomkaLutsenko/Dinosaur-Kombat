import React from 'react'
import { IconProps } from '../../utils/types'

const RulesIcon: React.FC<IconProps> = ({
	size = 24,
	className = '',
	color = '#85827d',
}) => {
	const svgSize = `${size}px`

	return (
		<svg
			fill={color}
			className={className}
			width={svgSize}
			height={svgSize}
			viewBox='0 0 32 32'
			xmlns='http://www.w3.org/2000/svg'
		>
			<defs>
				<style>{`.cls-1 { fill: none; }`}</style>
			</defs>
			<rect
				id='inner-path'
				className='cls-1'
				x='9'
				y='16'
				width='14'
				height='2'
			/>
			<rect
				id='inner-path-2'
				data-name='inner-path'
				className='cls-1'
				x='9'
				y='10'
				width='14'
				height='2'
			/>
			<path d='M26,2H6A2.0023,2.0023,0,0,0,4,4V17a10.9814,10.9814,0,0,0,5.8242,9.707L16,30l6.1758-3.293A10.9814,10.9814,0,0,0,28,17V4A2.0023,2.0023,0,0,0,26,2ZM23,18H9V16H23Zm0-6H9V10H23Z' />
			<rect
				id='_Transparent_Rectangle_'
				data-name='&lt;Transparent Rectangle&gt;'
				className='cls-1'
				width='32'
				height='32'
			/>
		</svg>
	)
}

export default RulesIcon
