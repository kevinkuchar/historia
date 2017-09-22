import { addScenes, nextScene } from './actions'
import { Scene } from './types'

let scene1: Scene = {
    id: 1,
    frames: [
        {
            id: 1,
            isActive: true,
            type: 'TEXT',
            config: {
                copy: 'Welcome to Historia'
            }
        },
        {
            id: 2,
            isActive: false,
            type: 'TEXT',
            config: {
                copy: 'Where diggity jiggity is liggity.'
            }
        },
        {
            id: 3,
            isActive: false,
            type: 'TEXT',
            config: {
                copy: 'And Biggity is Stiggity.'
            }
        }
        ,
        {
            id: 4,
            isActive: false,
            type: 'TEXT',
            config: {
                copy: 'Created by Tacoman.'
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
            isActive: true,
            type: 'TEXT',
            config: {
                copy: 'Scene 2 Frame 1'
            }
        },
        {
            id: 2,
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
            isActive: true,
            type: 'TEXT',
            config: {
                copy: 'Scene 3 Frame 1'
            }
        },
        {
            id: 2,
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