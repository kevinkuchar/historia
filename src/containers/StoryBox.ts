import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState, Scene } from '../types'
import Story from '../components/Story'
import { skipToNextScene } from '../actions'
import { SceneAction } from '../types'

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
        action: bindActionCreators(skipToNextScene, dispatch)
    }
}

const StoryBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(Story)

export default StoryBox