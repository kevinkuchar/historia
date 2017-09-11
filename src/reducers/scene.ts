import { Scene, SceneAction } from '../types'
import * as types from '../constants/ActionTypes'

function activateNextScene(scenes: Scene[]) {
    let nextScene = scenes.find(scene => { return scene.isActive }).id + 1
    
    if (nextScene > scenes.length) nextScene = 1;

    return scenes.map((scene: Scene) => {
        return { ...scene, isActive: false }
    }).map((scene: Scene) => {
        if (scene.id === nextScene) {
            return { ...scene, isActive: true }
        }
        return scene
    })
}

const scenes = (state: Scene[] = [], action: SceneAction) => {
    switch (action.type) {

        case types.ADD_SCENE:
            return state.concat(action.scenes)

        case types.NEXT_SCENE:
            return activateNextScene(state)

        default:
            return state
    }
}
  
export default scenes
