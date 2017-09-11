import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import SceneContainer from './containers/SceneContainer';

import { initState } from './data'

let store = createStore(reducers)

initState(store)

ReactDOM.render(
    <Provider store={store}>
      <SceneContainer />
    </Provider>,
    document.getElementById("app")
);