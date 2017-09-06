// export interface State {
//     scenes: Scene[]
// }

export interface Position {
    left: number;
    right: number;
    top: number;
    bottom: number;
}

export interface Molecule {
    position: Position;
    animation: string;
    text: string
}

export interface Frame {
    molecules: Molecule[]
}

export interface Scene {
    id: number
    background: string;
    frames: Frame[]
}

export interface SceneAction {
    type: string,
    scene: Scene 
}