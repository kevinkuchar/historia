import * as React from "react"
import { connect } from 'react-redux'
import { Scene } from '../types'

/**
 * Component Properties
 */
export interface AppProps {
    scene: Scene,
    nextScene: () => any,
    nextFrame: () => any
}

/**
 * Main Story Component
 * Types: Props / State
 */
export default class Story extends React.Component<AppProps, any> {
    render() {
        return (
            <div onClick={ this.props.nextScene }>
                { this.props.scene.background }
            </div>
        ) 
    }
}