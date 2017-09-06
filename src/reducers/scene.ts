import { Scene, SceneAction } from '../types'
import * as types from '../constants/ActionTypes'

const scenes = (state: Scene[] = [], action: SceneAction) => {
    switch (action.type) {
        case types.ADD_SCENE:
            return state.concat([action.scene])
        default:
            return state
    }
}
  
export default scenes
