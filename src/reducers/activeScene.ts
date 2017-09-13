import { Scene, SceneAction, Frame } from '../types'
import * as types from '../constants/ActionTypes'

const ActiveSceneReducer = (state: any = null, action: any) => {
    switch (action.type) {
        case types.NEXT_SCENE:
            return state
        default:
            return state
    }
}
  
export default ActiveSceneReducer




// function getActiveScene(scenes: Scene[]): Scene {
//     return scenes.find((scene: Scene) => scene.isActive)
// }

// function setActiveOnId(array: any, id: number): any {
//     let isActive = array.isActive ? array.isActive : array.id === id
//     return { ...array, isActive: isActive }
// }

// function activateNextFrame(scenes: Scene[]) {
//     // let scene: Scene = getActiveScene(scenes)
//     // let nextFrameId: number = getNextActive(scene.frames);

//     // nextFrameId = nextFrameId > scene.frames.length ? 0 : nextFrameId

//     // var frames: Frame[] = scene.frames.map(frame => setActiveOnId(frame, nextFrameId))
//     var frames: Frame[] = []
//     return scenes.map(scene => {
//         return {
//             ...scene,
//             frames: frames
//         }
//     })
// }