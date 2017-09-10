import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import { addToScenes } from './actions'
import { Scene } from './types'

import SceneContainer from './containers/SceneContainer';

let store = createStore(reducers);

let scene1: Scene = {
  "id": 1,
  "background": "Test One",
  "frames": [],
  "isActive": false
}

let scene2: Scene = {
  "id": 2,
  "background": "Test Two",
  "frames": [],
  "isActive": true
}

store.dispatch(addToScenes(scene1));
store.dispatch(addToScenes(scene2));

ReactDOM.render(
    <Provider store={store}>
      <SceneContainer />
    </Provider>,
    document.getElementById("app")
);

// class Historia {
//     constructor() { }
// }

// (<any>window).historia = new Historia();