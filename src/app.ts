import { Scene } from './types/types';
import { createStore } from 'redux'
import reducers from './reducers'

let store = createStore(reducers);

class Historia {
    scenes: Scene[];

    constructor() {
        this.scenes = [];
    }
}

(<any>window).historia = new Historia();
(<any>window).store = store;