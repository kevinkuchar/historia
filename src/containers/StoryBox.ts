import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState, Scene, SceneAction } from '../types'
import { nextScene, nextFrame } from '../actions'
import Story from '../components/Story'
import { getNextIndex } from '../utils/getNextIndex';

const getNextScene = (scenes: Scene[], activeScene: Scene) => {
    return scenes[getNextIndex(scenes, activeScene)]
}

const mapStateToProps = (state: RootState) => {
    return {
        activeScene: state.activeScene,
        nextScene: getNextScene(state.scenes, state.activeScene)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<SceneAction>) => {
    return {
        nextSceneHandler: (scene: Scene) => {
            dispatch(nextScene(scene))
        }
    }
}

const StoryBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(Story)

export default StoryBox