import React from 'react'
import { IconProps } from '../../utils/types'

const BoostsIcon: React.FC<IconProps> = ({
	size = 24,
	className = '',
	color = '#85827d',
}) => {
	const svgSize = `${size}px`

	return (
		<svg
			className={className}
			width={svgSize}
			height={svgSize}
			viewBox='0 0 512 512'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill={color}
				d='M96.37 32l-48 64h32v64h32.03V96h32L96.37 32zm160.03 0l-48 64h32v64h32V96h32l-48-64zm160 0l-48 64h32v64h32V96h32l-48-64zM96.37 192c-17.2 0-32.5 18.4-32.5 42.5 0 12.4 4.1 23.4 10.3 31l6.2 7.8-9.9 1.5c-9.4 1.5-15.8 6-21.1 13.1-5.3 7.1-9.2 16.9-11.6 28.4-4.7 20.9-4.8 46.6-4.8 69h25.9l6.3 98h59.73l7.2-98h27.3c-.1-22.1-1.2-47.5-6.3-68.3-2.8-11.3-6.7-21.2-12-28.4-5.1-7.1-11.4-11.6-19.9-13.2l-9.7-1.8 6.4-7.5c6.4-7.8 10.8-18.9 10.8-31.6 0-22.7-13.7-40.4-29.13-42.5h-3.2zm160.03 0c-17.2 0-32.5 18.4-32.5 42.5 0 12.4 4.1 23.4 10.3 31l6.2 7.8-9.9 1.5c-9.4 1.5-15.8 6-21.1 13.1-5.3 7.1-9.2 16.9-11.6 28.4-4.7 20.9-4.8 46.6-4.8 69h25.9l6.3 98h59.7l7.2-98h27.3c-.1-22.1-1.2-47.5-6.3-68.3-2.8-11.3-6.7-21.2-12-28.4-5.1-7.1-11.4-11.6-19.9-13.2l-9.7-1.8 6.4-7.5c6.4-7.8 10.8-18.9 10.8-31.6 0-22.7-13.7-40.4-29.1-42.5h-3.2zm160 0c-17.1 0-32.4 18.4-32.4 42.5 0 12.4 4.1 23.4 10.3 31l6.2 7.8-9.9 1.5c-9.4 1.5-15.9 6-21.2 13.1-5.3 7.1-9.2 16.9-11.6 28.4-4.7 20.9-4.8 46.6-4.8 69h25.9l6.4 98h59.6l7.3-98h27.2c-.1-22.1-1.2-47.5-6.2-68.3-2.8-11.3-6.8-21.2-12.1-28.4-5.1-7.1-11.4-11.6-19.8-13.2l-9.7-1.8 6.3-7.5c6.4-7.8 10.8-18.9 10.8-31.6 0-22.7-13.7-40.4-29.1-42.5h-3.2z'
			/>
		</svg>
	)
}

export default BoostsIcon
