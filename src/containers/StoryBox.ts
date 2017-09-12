import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState, Scene, SceneAction } from '../types'
import { nextScene, nextFrame } from '../actions'
import Story from '../components/Story'

/**
 * Returns the state with active = true
 * @param scenes
 */
const filterActiveScene = (scenes: Scene[]): Scene => {
    return scenes.find(scene => {
        return scene.isActive
    }) 
}

/**
 * Maps scene to props
 * @param state 
 */
const mapStateToProps = (state: RootState) => {
    return {
        scene: filterActiveScene(state.scenes)
    }
}

const mapDispatchToProps= (dispatch: Dispatch<SceneAction>) => {
    return {
        nextScene: bindActionCreators(nextScene, dispatch),
        nextFrame: bindActionCreators(nextFrame, dispatch)
    }
}

const StoryBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(Story)

export default StoryBox