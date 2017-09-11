import * as React from "react"
import { connect } from 'react-redux'
import { Scene } from '../types'

/**
 * Component Properties
 */
export interface AppProps {
    scene: Scene
}

/**
 * Main Story Component
 * Types: Props / State
 */
export default class Story extends React.Component<AppProps, any> {
    render() {
        return (
            <div>
                { this.props.scene.background }
            </div>
        ) 
    }
}