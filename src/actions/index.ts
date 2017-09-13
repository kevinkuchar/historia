import { Scene } from '../types'
import * as types from '../constants/ActionTypes'

export const addScenes = (scenes: Scene[]) => {
    return {
        type: types.ADD_SCENE,
        scenes
    }
}

export const nextScene = (Scene: Scene) => {
    return {
        type: types.NEXT_SCENE
    }
}

export const nextFrame = (scenes: Scene[]) => {
    return {
        type: types.NEXT_FRAME,
        scenes
    }
}