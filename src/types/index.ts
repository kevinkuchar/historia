export interface RootState {
    scenes: Scene[]
}

export interface SceneAction {
    type: string
    scenes: Scene[]
}

export interface Scene {
    id: number
    isActive: boolean
    background?: string
    frames: Frame[]
}

export interface Frame {
    id: number
    isActive: boolean
    type: string,
    config: any
}