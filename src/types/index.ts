import * as ACTIONS from './ActionTypes'

export type RootState = {
    scenes: Scene[],
    activeScene: Scene
}

export type Scene = {
    id: number
    isActive: boolean
    frames: Frame[]
}

export type Frame = {
    id: number
    isActive: boolean
    type: string,
    config: any
}

export type AddSceneAction = {
    type: ACTIONS.ADD_SCENE
    scenes: Scene[]
}

export type NextSceneAction = {
    type: ACTIONS.NEXT_SCENE,
    nextScene: Scene
}

export type NextFrameAction = {
    type: ACTIONS.NEXT_FRAME,
    nextScene: Scene
}

export type SceneAction =
    AddSceneAction |
    NextSceneAction |
    NextFrameAction |
    ACTIONS.OTHER_ACTION