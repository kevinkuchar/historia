export interface Scene {
    id: number
    background: string;
    frames: Frame[]
}

export interface Frame {
    molecules: Molecule[]
}

export interface Molecule {
    position: Position;
    animation: string;
    text: string
}

export interface SceneAction {
    type: string,
    scene: Scene 
}