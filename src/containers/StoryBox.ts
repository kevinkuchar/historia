import { connect } from 'react-redux'
import { RootState, Scene } from '../types'
import Story from '../components/Story'

/**
 * Returns the state with active = true
 * @param scenes
 */
const filterActiveScene = (scenes: Scene[]): Scene => {
    let activeScene = scenes.filter(scene => {
        return scene.isActive
    })

    return activeScene ? activeScene[0] : scenes[0]
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

const StoryBox = connect(
    mapStateToProps
)(Story)

export default StoryBox