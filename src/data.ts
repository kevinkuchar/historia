import { addScenes, nextScene } from './actions'
import { Scene } from './types'

let scene1: Scene = {
    id: 1,
    frames: [
        {
            id: 1,
            sceneId: 1,
            isActive: true,
            type: 'TEXT',
            config: {
                copy: 'Scene 1 Frame 1'
            }
        },
        {
            id: 2,
            sceneId: 1,
            isActive: false,
            type: 'TEXT',
            config: {
                copy: 'Scene 1 Frame 2'
            }
        }
    ],
    isActive: true
}

let scene2: Scene = {
    id: 2,
    frames: [
        {
            id: 1,
            sceneId: 2,
            isActive: true,
            type: 'TEXT',
            config: {
                copy: 'Scene 2 Frame 1'
            }
        },
        {
            id: 2,
            sceneId: 2,
            isActive: false,
            type: 'TEXT',
            config: {
                copy: 'Scene 2 Frame 2'
            }
        }
    ],
    isActive: false
}

let scene3: Scene = {
    id: 3,
    frames: [
        {
            id: 1,
            sceneId: 3,
            isActive: true,
            type: 'TEXT',
            config: {
                copy: 'Scene 4 Frame 1'
            }
        },
        {
            id: 2,
            sceneId: 3,
            isActive: false,
            type: 'TEXT',
            config: {
                copy: 'Scene 3 Frame 2'
            }
        }
    ],
    isActive: false
}

export function initState(store: any) {
    store.dispatch(addScenes([scene1, scene2, scene3]));
    // store.dispatch(nextScene(scene1))
}