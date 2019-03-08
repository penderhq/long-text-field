import React from 'react'
import trim from 'lodash/trim'
import {css, cx} from 'emotion'
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
                className={cx(
                    css`
                    -moz-appearance: none;
                    -webkit-appearance: none;
                    -webkit-transition: border-color .15s ease-in-out;
                    appearance: none;
                    background-color: #fff;
                    border: 1px solid #d9d9d9;
                    border-radius: 3px;
                    color: #191919;
                    display: block;
                    font-size: 16px;
                    line-height: 1.42857;
                    padding: 16px;
                    transition: border-color .15s ease-in-out;
                    width: 100%;
                    line-height: 1.5;
                `, this.state.focus ? css`
                      -webkit-transition-duration: 0s;
                        border-color: #07f;
                        outline: 0;
                        transition-duration: 0s;
                    ` : null
                )}
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