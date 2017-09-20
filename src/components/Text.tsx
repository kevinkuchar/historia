import * as React from "react"

type TextProps = {
    config: Config
}

type Config = {
    copy: string
}

/**
 * Text Component
 * Types: Props / State
 */
export default class Text extends React.Component<TextProps, any> {
    render() {
        let { config } = this.props

        return (
            <div>
                { config.copy }
            </div>
        ) 
    }
}