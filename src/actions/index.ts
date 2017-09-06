import { Scene } from '../types'
import * as types from '../constants/ActionTypes'

export const addToScenes = (scene: Scene) => {
    return {
        type: types.ADD_SCENE,
        scene
    }
}