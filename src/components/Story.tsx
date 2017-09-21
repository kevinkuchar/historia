import * as React from "react"
import Text from './Text'
import { TEXT } from "../types/FrameTypes";
import { Scene, Frame } from "../types/index";

const ARROW_DOWN = 40
const ARROW_UP = 38
const ARROW_LEFT = 37
const ARROW_RIGHT = 39

/**
 * Component Properties
 */
type StoryProps = {
    activeScene: Scene,
    nextScene: Scene,
    nextSceneHandler: (scene: Scene) => any,
    nextFrameHandler: () => any
}

/**
 * Main Story Component
 * Types: Props / State
 */
export default class Story extends React.Component<StoryProps, any> {
    componentWillMount(){
        document.addEventListener('keydown', this.onKeyPress.bind(this));
    }

    onKeyPress(event: KeyboardEvent) {
        let { nextSceneHandler, nextFrameHandler, nextScene } = this.props;
        switch (event.keyCode) {
            case ARROW_DOWN:
                nextSceneHandler(nextScene);
                break
            case ARROW_RIGHT:
                nextFrameHandler();
            default: 
                break
        }
        
    }

    renderFrames(frames: Frame[]) {
        return frames
                .filter((frame: Frame) => {
                    return frame.isActive
                }).map((frame: Frame) => {
                    switch (frame.type) {
                        case TEXT:
                            return <Text key={ frame.id } config={ frame.config } />
                        }
                })
    }

    render() {
        return (
            <div>
                { this.renderFrames(this.props.activeScene.frames) }
            </div>
        ) 
    }
}