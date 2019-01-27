import React from 'react'
import trim from 'lodash/trim'
import {css} from 'emotion'
import {stateToMarkdown} from 'draft-js-export-markdown'
import {stateFromMarkdown} from 'draft-js-import-markdown'

import {Editor, EditorState} from 'draft-js'

// draftjs spits out some zero width spaces that are not visible
// this regex is used to filter those out
const REGEX_ZWS = new RegExp(/\u200B/, 'g')

class RichTextInput extends React.Component {

    state = {
        focus: false,
        value: this.props.value,
        editorState: EditorState.createWithContent(stateFromMarkdown(this.props.value || ''))
    }

    componentDidUpdate(prevProps) {

        if (this.state.value !== this.props.value) {
            this.setState({
                value: this.props.value,
                editorState: EditorState.createWithContent(stateFromMarkdown(this.props.value || ''))
            })
        }
    }

    render() {
        return (
            <div
                className={css`
                    padding: 16px;
                    width: 100%;
                    background-color: rgba(0, 0, 0, 0.05);
                    border: 2px solid transparent;
                    box-shadow: none;
                    border-radius: 3px;
                    -webkit-appearane: none;
                    line-height: 1.5;
                    ${this.state.focus ? 'border-color: rgba(0, 0, 0, 0.05);' : ''}
                `}
            >
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    onFocus={this.focus}
                    onBlur={this.blur}
                />
            </div>

        );
    }

    focus = () => this.setState({
        focus: true
    })

    blur = () => this.setState({
        focus: false
    })

    onChange = editorState => {

        const markdown = stateToMarkdown(editorState.getCurrentContent())

        let trimmed = trim(markdown)

        if (trimmed.length === 1) {
            trimmed = trimmed.replace(REGEX_ZWS, '') // removes zero width spaces
        }

        const value = trimmed === '' ? null : trimmed

        this.setState({
            value,
            editorState
        })

        this.props.onChange({
            value
        })
    }
}

export default RichTextInput