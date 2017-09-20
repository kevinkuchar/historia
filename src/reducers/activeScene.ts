import { SceneAction, Scene } from '../types'
import { NEXT_SCENE } from '../types/ActionTypes';

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
            return action.scene
        default:
            return state
    }
}
  
export default activeSceneReducer