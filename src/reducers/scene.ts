import { Scene } from '../types/types'

const ADD_SCENE: string = 'ADD_SCENE'

const sceneReducer = (state: Scene[] = [], action: any) => {
    switch (action.type) {
        case ADD_SCENE:
            return state.concat([action.payload])
        default:
            return state
    }
}
  
export default sceneReducer