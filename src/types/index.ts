export interface RootState {
    scenes: Scene[]
}

export interface SceneAction {
    type: string
    scenes: Scene[]
}

export interface SceneOrFrame {
    id: number
    isActive: boolean
}

export interface Scene extends SceneOrFrame {
    background?: string
    frames: Frame[]
}

export interface Frame extends SceneOrFrame {
    type: string,
    config: any
}