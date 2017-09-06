import { createStore } from 'redux'
import reducers from './reducers'
import { addToScenes } from './actions'
import { Scene } from './types'

let store = createStore(reducers);

let scene1: Scene = {
    id: 1,
    background: 'test',
    frames: []
}

let scene2: Scene = {
    id: 1,
    background: 'test',
    frames: []
}

store.dispatch(addToScenes(scene1));
store.dispatch(addToScenes(scene2));

console.log(store.getState());

class Historia {
    constructor() { }
}

(<any>window).historia = new Historia();
