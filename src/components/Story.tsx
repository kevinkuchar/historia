import * as React from "react"
import { connect } from 'react-redux'
import { Scene, Frame } from '../types'
import * as Types from '../constants/FrameTypes'
import Text from './Text'

const ARROW_DOWN = 40
const ARROW_UP = 38
const ARROW_LEFT = 37
const ARROW_RIGHT = 39

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

    /**
     * Set document keypress event
     */
    componentWillMount(){
        document.addEventListener('keydown', this.onKeyPress.bind(this));
    }

    /**
     * Handle events for arrow keyboard presses
     * @param event
     */
    onKeyPress(event: KeyboardEvent) {
        switch(event.keyCode) {
            case ARROW_DOWN:
                this.props.nextScene()
                break
            case ARROW_UP:
                // this.props.prevScene()
                break
            case ARROW_LEFT:
                // this.props.prevFrame()
                break;
            case ARROW_RIGHT:
                this.props.nextFrame()
            default: 
                break
        }
        
    }

    /**
     * Iterate over frame array and return component for each active frame
     * @param frames 
     */
    renderFrames(frames: Frame[]) {
        return frames.filter((frame: Frame) => {
            return frame.isActive
        }).map((frame: Frame) => {
            switch (frame.type) {
                case Types.TEXT:
                    return <Text key={ frame.id } config={ frame.config } />

            }
        })        
    }

    render() {
        return (
            <div>
                { this.renderFrames(this.props.scene.frames) }
            </div>
        ) 
    }
}