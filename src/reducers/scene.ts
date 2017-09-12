import { Scene, SceneAction, Frame, SceneOrFrame } from '../types'
import * as types from '../constants/ActionTypes'

function deactivateScene(scene: Scene): Scene {
    return { ...scene, isActive: false }
}

function setActiveById(array: any, id: number): any {
    return { ...array, isActive: array.id === id }
}

function setActiveOnId(array: any, id: number): any {
    let isActive = array.isActive ? array.isActive : array.id === id
    return { ...array, isActive: isActive }
}

function getActiveScene(scenes: Scene[]): Scene {
    return scenes.find((scene: Scene) => scene.isActive)
}

function getNextActive(array: SceneOrFrame[]): number {
    let nextActive = array.find((member: SceneOrFrame) => {
        return member.isActive
    })

    return nextActive ? nextActive.id + 1 : 1;
}

function activateNextScene(scenes: Scene[]) {
    let nextSceneId = getNextActive(scenes)
    
    nextSceneId = nextSceneId > scenes.length ? 1 : nextSceneId

    return scenes.map(deactivateScene)
                 .map(scene => setActiveById(scene, nextSceneId))
}

function activateNextFrame(scenes: Scene[]) {
    // let scene: Scene = getActiveScene(scenes)
    // let nextFrameId: number = getNextActive(scene.frames);

    // nextFrameId = nextFrameId > scene.frames.length ? 0 : nextFrameId

    // var frames: Frame[] = scene.frames.map(frame => setActiveOnId(frame, nextFrameId))
    var frames: Frame[] = []
    return scenes.map(scene => {
        return {
            ...scene,
            frames: frames
        }
    })
}

const scenes = (state: Scene[] = [], action: SceneAction) => {
    switch (action.type) {
        case types.ADD_SCENE:
            return state.concat(action.scenes)

        case types.NEXT_SCENE:
            return activateNextScene(state)

        case types.NEXT_FRAME:
            return activateNextFrame(state)

        default:
            return state
    }
}
  
export default scenes
