import * as React from "react"
import { connect } from 'react-redux'
import { Scene } from '../types'

/**
 * Component Properties
 */
export interface AppProps {
    scene: Scene,
    action: any
}

/**
 * Main Story Component
 * Types: Props / State
 */
export default class Story extends React.Component<AppProps, any> {
    nextScene() {
        this.props.action()
    }

    render() {
        return (
            <div onClick={ this.nextScene.bind(this) }>
                { this.props.scene.background }
            </div>
        ) 
    }
}