import { Scene } from '../types';
import * as types from '../types/ActionTypes';

export const addScenes = (scenes: Scene[]) => {
    return {
        type: types.ADD_SCENE,
        scenes
    }
}

export const nextScene = (scene: Scene) => {
    return {
        type: types.NEXT_SCENE,
        scene
    }
}

export const nextFrame = () => {
    return {
        type: types.NEXT_FRAME
    }
}