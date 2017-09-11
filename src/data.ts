import { addToScenes } from './actions'
import { Scene } from './types'

let scene1: Scene = {
    "id": 1,
    "background": "Test One life",
    "frames": [],
    "isActive": false
}

let scene2: Scene = {
    "id": 2,
    "background": "This is the background",
    "frames": [],
    "isActive": true
}

export function initState(store: any) {
    store.dispatch(addToScenes(scene1));
    store.dispatch(addToScenes(scene2));
}