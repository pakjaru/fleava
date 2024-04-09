import React, { useEffect } from "react"

import { useHeroStore } from "../store"

export const Hero: React.FC = () => {
	const { data, activeHero, setActiveHero } = useHeroStore()

	useEffect(() => {
		setActiveHero(data[0])
	}, [])

	return (
		<section className='relative h-[90vh]'>
			<div className='size-full bg-slate-400'></div>

			<div className='absolute bottom-0 left-32 top-1/2'>
				<div className='flex h-full gap-24'>
					<div className='text-grey'>/ 01</div>

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
							<button>Prev</button>
							<span>/</span>
							<button>Next</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
