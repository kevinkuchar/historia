import { SceneAction, Scene } from '../types'
import { NEXT_SCENE, NEXT_FRAME } from '../types/ActionTypes';

const INITIAL_STATE: Scene = {
    id: 0,
    isActive: true,
    frames: [
        {
            id: 0,
            sceneId: 0,
            isActive: true,
            type: 'TEXT',
            config: {
                copy: 'PRESS DOWN TO BEGIN DOOD'
            }
        }
    ]
}

const activeSceneReducer = (state: Scene = INITIAL_STATE, action: SceneAction) => {
    switch (action.type) {
        case NEXT_SCENE:
            return action.scene;
        case NEXT_FRAME:
            console.log(state);
            return state;
        default:
            return state;
    }
}
  
export default activeSceneReducer