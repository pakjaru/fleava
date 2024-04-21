import { FC } from "react"
import { Canvas } from "@react-three/fiber"

import { useHeroStore } from "../store"
import { Component } from "../canvas/shaders/hero-transition/Component"

export const Hero: FC = () => {
	const { data, activeHero, setActiveHero } = useHeroStore()

	const dataLength = data.length
	const dataIndex = data.findIndex((item) => item === activeHero)

	const prevButtonClick = () => {
		if (dataIndex === 0) return setActiveHero(data[dataLength - 1])

		setActiveHero(data[dataIndex - 1])
	}

	const nextButtonClick = () => {
		if (dataIndex === dataLength - 1) return setActiveHero(data[0])

		setActiveHero(data[dataIndex + 1])
	}

	return (
		<section className='relative h-screen'>
			<Canvas>
				<Component />
			</Canvas>

			<div className='absolute bottom-0 left-32 top-1/2'>
				<div className='flex h-full gap-24'>
					<div className='text-grey'>{`/ 0${dataIndex + 1}`}</div>

					<div className='relative flex flex-col gap-8'>
						<span className='text-grey'>{`/ ${activeHero.title}`}</span>

						<h2 className='flex flex-col text-[64px] font-light text-grey'>
							{activeHero.description.map((text, index) => (
								<span key={index} className='leading-[75px]'>
									{text}
								</span>
							))}
						</h2>

						<div className='absolute bottom-4 flex items-center gap-8 text-lg text-white'>
							<button onClick={prevButtonClick}>Prev</button>
							<span>/</span>
							<button onClick={nextButtonClick}>Next</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
