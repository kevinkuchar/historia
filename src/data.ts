import { addScenes } from './actions'
import { Scene } from './types'

let scene1: Scene = {
    id: 1,
    frames: [
        {
            id: 1,
            isActive: true,
            type: 'TEXT',
            config: {
                copy: 'One'
            }
        },
        {
            id: 2,
            isActive: false,
            type: 'TEXT',
            config: {
                copy: 'Twof'
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
            isActive: false,
            type: 'TEXT',
            config: {
                copy: 'Three'
            }
        },
        {
            id: 2,
            isActive: false,
            type: 'TEXT',
            config: {
                copy: 'Four'
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
            isActive: false,
            type: 'TEXT',
            config: {
                copy: 'Awesome story'
            }
        },
        {
            id: 2,
            isActive: false,
            type: 'TEXT',
            config: {
                copy: 'Cool story bro'
            }
        }
    ],
    isActive: false
}

export function initState(store: any) {
    store.dispatch(addScenes([scene1, scene2, scene3]));
}