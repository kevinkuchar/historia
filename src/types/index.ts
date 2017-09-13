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
    frames: Frame[]
}

export interface Frame {
    id: number
    isActive: boolean
    sceneId: number
    type: string,
    config: any
}