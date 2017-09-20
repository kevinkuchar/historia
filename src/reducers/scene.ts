import { ADD_SCENE } from '../types/ActionTypes';
import { Scene, SceneAction } from '../types/index';

const INITIAL_STATE: Scene[] = [];

const sceneReducer = (state: Scene[] = INITIAL_STATE, action: SceneAction) => {
    switch (action.type) {
        case ADD_SCENE:
            return state.concat(action.scenes)
        default:
            return state
    }
}
  
export default sceneReducer