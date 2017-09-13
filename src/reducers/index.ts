import { combineReducers } from 'redux'
import scenes from './scene'
import activeScene from './activeScene'

const reducers = combineReducers({
    scenes,
    activeScene
});

export default reducers