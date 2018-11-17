import React from 'react'
import {css} from 'emotion'

export default class LongTextField extends React.Component {

    render() {

        const {longText} = this.props

        return (
            <div
                data-context-id={this.props.contextId}
                data-role-id={this.props.roleId}
                className={css`
                    font-size: 13px;
                    padding: 0;
                    margin: 0;
                    color: #111111;
                    cursor: default;
                    outline: none;
                    display: flex;
                    flex-wrap: wrap;
                    vertical-align: middle;
                    height: auto;
                    min-height: 28px;
                    position: relative;
                    white-space: normal;
                    line-height: 12px;
                    box-shadow: none;
                    overflow: visible;
                    box-sizing: border-box;
                    background-color: transparent;
                    width: 100%;
                    height: auto;
                    top: 0;
                    left: 0;
                    cursor: text;
                    line-height: 20px;
                    text-overflow: ellipsis;
                    overflow: visible;
                `}
            >
                {longText}
            </div>
        )
    }
}