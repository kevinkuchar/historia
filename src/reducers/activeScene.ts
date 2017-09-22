import { SceneAction, Scene } from '../types'
import { NEXT_SCENE, NEXT_FRAME } from '../types/ActionTypes';

const INITIAL_STATE: Scene = {
    id: 0,
    isActive: true,
    frames: [
        {
            id: 0,
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
            return action.nextScene;
        case NEXT_FRAME:
            let isLastFrame: Boolean = state.frames.every(frame => {
                return frame.isActive
            });
            
            if (isLastFrame) return action.nextScene;

            return {
                ...state,
                frames: state.frames.map((frame, index, array) => {
                    return {
                        ...frame,
                        isActive: (array[index - 1] && array[index - 1].isActive || frame.isActive) ? true : false }
                })
            }
        default:
            return state;
    }
}
  
export default activeSceneReducer