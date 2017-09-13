import { Scene, SceneAction, Frame } from '../types'
import * as types from '../constants/ActionTypes'

const deactivateScene = (scene: Scene): Scene => {
    return { ...scene, isActive: false }
}

const updateActiveById = (scene: Scene, id: number): Scene => {
    return { ...scene, isActive: scene.id === id }
}

const getNextActiveId = (array: Scene[]): number => {
    let nextActive = array.find((member: Scene) => {
        return member.isActive
    })

    return nextActive ? nextActive.id + 1 : 1;
}

const activateNextScene = (scenes: Scene[]) => {
    let nextSceneId = getNextActiveId(scenes)
    
    nextSceneId = nextSceneId > scenes.length ? 1 : nextSceneId

    return scenes.map(deactivateScene)
                 .map(scene => updateActiveById(scene, nextSceneId))
}

const SceneReducer = (state: Scene[] = [], action: SceneAction) => {
    switch (action.type) {
        case types.ADD_SCENE:
            return state.concat(action.scenes)

        case types.NEXT_SCENE:
            return activateNextScene(state)

        case types.NEXT_FRAME:
            // return activateNextFrame(state)

        default:
            return state
    }
}
  
export default SceneReducer