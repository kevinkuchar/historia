export interface RootState {
    scenes: Scene[]
}

export interface SceneAction {
    type: string,
    scenes: Scene[]
}

export interface Scene {
    id: number
    background: string;
    frames: Frame[],
    isActive: boolean
}

export interface Frame { }