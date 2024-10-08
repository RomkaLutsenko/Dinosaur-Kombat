import React from 'react'
import { IconProps } from '../../utils/types'

const UserIcon: React.FC<IconProps> = ({
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
			viewBox='0 0 512 512'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<g id='Layer_2'>
				<g>
					<g>
						<path d='M256,224.9c-47.7,0-84.7-53.77-84.7-100.02c0-22.61,8.94-43.42,25.18-58.59 C212.21,51.6,233.35,43.5,256,43.5s43.79,8.1,59.53,22.79c16.23,15.17,25.18,35.97,25.18,58.59 C340.7,171.14,303.7,224.9,256,224.9z' />
					</g>
					<g>
						<path
							fill={color}
							d='M402.95,385c-3.25,27.82-7.86,56.27-15.15,83.5H124.21c-7.3-27.23-11.91-55.68-15.17-83.5 c-2.61-22.3-1.88-45.45,8.58-66.14c9.48-18.77,26.75-34.62,47.6-45.57c4.9-2.57,9.98-4.88,15.2-6.92 c23.18,13.99,49.07,21.53,75.58,21.53s52.4-7.54,75.58-21.53c5.22,2.04,10.3,4.35,15.2,6.92c20.86,10.95,38.12,26.8,47.6,45.57 C404.84,339.55,405.57,362.7,402.95,385z'
						/>
					</g>
				</g>
			</g>
		</svg>
	)
}

export default UserIcon
