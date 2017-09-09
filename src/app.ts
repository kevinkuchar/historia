import { createStore } from 'redux'
import reducers from './reducers'
import { addToScenes } from './actions'
import { Scene } from './types'

let store = createStore(reducers);

// store.dispatch(addToScenes(scene1));
// store.dispatch(addToScenes(scene2));

class Historia {
    constructor() { }
}

(<any>window).historia = new Historia();
