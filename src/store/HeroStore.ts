import { create } from "zustand"

import { HeroData, HeroProps } from "../data"

interface State {
	data: HeroProps[]
	activeHero: HeroProps
}

interface Actions {
	setActiveHero: (data: HeroProps) => void
}

export const useHeroStore = create<State & Actions>((set) => ({
	data: HeroData,
	activeHero: HeroData[0],
	setActiveHero: (activeHero) => set(() => ({ activeHero })),
}))
