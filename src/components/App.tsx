import * as React from "react"
import { connect } from 'react-redux'
import { Scene } from '../types'

export interface AppProps { scene: Scene }

// 'HelloProps' describes the shape of props
// State is never set so we use the 'undefined' type
export default class App extends React.Component<AppProps, any> {
    render() {
        console.log('Update5')
        
        return <div>Hello! - {this.props.scene.background}</div>
    }
}