export interface RootState {
    scenes: Scene[]
}

export interface Scene {
    id: number
    background: string;
    frames: Frame[],
    isActive: boolean
}

export interface Frame { }

export interface SceneAction {
    type: string,
    scene: Scene 
}