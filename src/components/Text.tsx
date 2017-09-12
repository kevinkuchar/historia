import * as React from "react"

/**
 * Component Properties
 */
export interface TextProps {
    config: Config
}

interface Config {
    copy: string
}

/**
 * Text Component
 * Types: Props / State
 */
export default class Text extends React.Component<TextProps, any> {
    render() {
        return (
            <div>
                { this.props.config.copy }
            </div>
        ) 
    }
}