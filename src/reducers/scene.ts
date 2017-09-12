import { Scene, SceneAction, Frame, SceneOrFrame } from '../types'
import * as types from '../constants/ActionTypes'

function deactivateScene(scene: Scene): Scene {
    return { ...scene, isActive: false }
}

function setActiveIfId(array: any, id: number): any {
    return { ...array, isActive: array.id === id }
}

function getActiveScene(scenes: Scene[]): Scene {
    return scenes.find((scene: Scene) => {
        return scene.isActive
    })
}

function getNextActive(array: SceneOrFrame[]): number {
    return array.find((member: SceneOrFrame) => {
        return member.isActive
    }).id + 1
}

function activateNextScene(scenes: Scene[]) {
    let nextSceneId = getNextActive(scenes)
    
    nextSceneId = nextSceneId > scenes.length ? 1 : nextSceneId

    return scenes.map(deactivateScene)
                 .map(scene => setActiveIfId(scene, nextSceneId))
}

function activateNextFrame(scenes: Scene[]) {
    let scene: Scene = getActiveScene(scenes)
    let nextFrameId: number = getNextActive(scene.frames);

    nextFrameId = nextFrameId > scene.frames.length ? 0 : nextFrameId

    let frames: Frame[] = scene.frames.map(frame => setActiveIfId(frame, nextFrameId))

    return scenes.map(scene => {
        if (scene.isActive) {
            scene.frames = frames
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

        case types.NEXT_FRAME:
            return activateNextFrame(state)

        default:
            return state
    }
}
  
export default scenes
