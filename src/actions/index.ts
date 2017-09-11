import { Scene } from '../types'
import * as types from '../constants/ActionTypes'

export const addToScenes = (scenes: Scene[]) => {
    return {
        type: types.ADD_SCENE,
        scenes
    }
}

export const skipToNextScene = (scenes: Scene[]) => {
    return {
        type: types.NEXT_SCENE,
        scenes
    }
}