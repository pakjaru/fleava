import { shaderMaterial } from "@react-three/drei"
import { extend } from "@react-three/fiber"

import Vertex from "./Vertex"
import Fragment from "./Fragment"

export const HeroMaterial = shaderMaterial(
	{
		uProgress: 0,
		uTexture1: null,
		uTexture2: null,
		uDisp: null,
	},
	Vertex,
	Fragment,
)

extend({ HeroMaterial })
