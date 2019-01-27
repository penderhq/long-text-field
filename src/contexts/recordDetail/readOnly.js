import React from 'react'
import {css} from 'emotion'
import nl2br from 'react-nl2br'
import ReactMarkdown from 'react-markdown'

export default class LongTextField extends React.Component {

    render() {

        const {longText} = this.props

        return (
            <div
                data-context-id={this.props.contextId}
                data-role-id={this.props.roleId}
            >
                <div>
                    <ReactMarkdown
                        source={longText}
                    />
                </div>
            </div>
        )
    }
}