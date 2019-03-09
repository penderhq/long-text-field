import React from 'react'
import {css, cx} from 'emotion'
import ReactMarkdown from 'react-markdown'

export default class Preview extends React.Component {

    render() {

        return (
            <ReactMarkdown
                className={cx(
                    'long-text-field__preview',
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
                    padding: 8px 15px;
                    transition: border-color .15s ease-in-out;
                    width: 100%;
                    line-height: 1.5;
                    &:focus {
                     -webkit-transition-duration: 0s;
                        border-color: #07f;
                        outline: 0;
                        transition-duration: 0s;
                    }
                `
                )}
                source={this.props.value}
            />
        )
    }
}