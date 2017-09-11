import { addToScenes } from './actions'
import { Scene } from './types'

let scene1: Scene = {
    "id": 1,
    "background": "Test One life",
    "frames": [],
    "isActive": true
}

let scene2: Scene = {
    "id": 2,
    "background": "This is the background",
    "frames": [],
    "isActive": false
}

export function initState(store: any) {
    store.dispatch(addToScenes([scene1, scene2]));
}