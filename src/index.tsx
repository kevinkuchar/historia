import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'
import reducers from './reducers'

import App from './components/App';

let store = createStore(reducers);

// import { addToScenes } from './actions'
// import { Scene } from './types'
// store.dispatch(addToScenes(scene1));
// store.dispatch(addToScenes(scene2));

console.log('wtf');

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);

// class Historia {
//     constructor() { }
// }

// (<any>window).historia = new Historia();
