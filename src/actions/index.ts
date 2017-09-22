import { Scene } from '../types';
import * as types from '../types/ActionTypes';

export const addScenes = (scenes: Scene[]) => {
    return {
        type: types.ADD_SCENE,
        scenes
    }
}

export const nextScene = (nextScene: Scene) => {
    return {
        type: types.NEXT_SCENE,
        nextScene
    }
}

export const nextFrame = (nextScene: Scene) => {
    return {
        type: types.NEXT_FRAME,
        nextScene
    }
}