import { FC, useEffect, useRef } from "react"
import gsap from "gsap"
import { useTexture } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

import { HeroMaterial } from "./Material"
import { useHeroStore } from "../../../store"
import { imageFive, imageFour, imageOne, imageThree, imageTwo, displacement } from "../../../assets"

declare global {
	namespace JSX {
		interface IntrinsicElements {
			heroMaterial: any
		}
	}
}

export const Component: FC = () => {
	const { viewport } = useThree()
	const { data, activeHero } = useHeroStore()

	const textures = useTexture([imageOne, imageTwo, imageThree, imageFour, imageFive])
	const disp = useTexture(displacement)

	const shaderRef = useRef<any>(null)

	const dataIndex = data.findIndex((item) => item === activeHero)

	const getUtexture = (is2nd = false) => {
		if (is2nd) return textures[dataIndex]

		if (dataIndex === 0) return textures[textures.length - 1]

		return textures[dataIndex - 1]
	}

	useEffect(() => {
		if (!shaderRef.current) return

		gsap.fromTo(shaderRef.current.uniforms.uProgress, { value: 0 }, { value: 1, duration: 0.6, ease: "circ.out" })
	}, [dataIndex])

	return (
		<mesh scale={[viewport.width, viewport.height, 1]}>
			<planeGeometry />
			<heroMaterial
				ref={shaderRef}
				key={HeroMaterial.key}
				uTexture1={getUtexture()}
				uTexture2={getUtexture(true)}
				uDisp={disp}
			/>
		</mesh>
	)
}
