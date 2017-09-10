import { connect } from 'react-redux'
import { RootState, Scene } from '../types'
import App from '../components/App'

const filterActiveScene = (scenes: Scene[]): Scene => {
    let activeScene = scenes.filter(scene => {
        return scene.isActive
    })

    return activeScene ? activeScene[0] : scenes[0]
}

const mapStateToProps = (state: RootState) => {
    return {
        scene: filterActiveScene(state.scenes)
    }
}

const SceneContainer = connect(
    mapStateToProps
)(App)

export default SceneContainer