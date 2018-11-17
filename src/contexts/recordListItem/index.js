import React from 'react'
import {css} from 'emotion'

export default class LongTextField extends React.Component {

    render() {

        const {longText} = this.props

        return (
            <div
                className={css`
                    max-width: 100%;
                    overflow: hidden;
                    display: inline-flex;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: 1.5;
                    font-size: 13px;
                    height: 100%;
                    align-items: center;
                `}
            >
                <div
                    className={css`
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                    `}
                >
                    <div
                        className={css`
                            max-width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        `}
                    >
                        {longText}
                    </div>
                </div>
            </div>
        )
    }
}