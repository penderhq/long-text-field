import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import LongTextField from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const Context = ({contextId, roleId}) => (
    <div
        className={css`
            margin-top: 32px;
            margin-bottom: 24px;
        `}
    >
        <strong>Context:</strong> {contextId}, <strong>Role:</strong> {roleId}
    </div>
)

class Demo extends Component {

    state = {
        longText: "This is a long text.\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit,\n\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n​\n\n​\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    render() {
        return <div>
            <h1>LongTextField Demo</h1>
            <p>Used for entering multiple lines of text.</p>
            <h2>State</h2>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
            <Context contextId={'recordDetail'} roleId={'editor'} />
            <div
                className={css`
                        width: 460px;
                    `}
            >
                <LongTextField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    longText={this.state.longText}
                    onChange={({longText}) => this.setState({longText})}
                />
            </div>
            <Context contextId={'recordDetail'} roleId={'editor'} />
            <div
                className={css`
                        width: 460px;
                    `}
            >
                <LongTextField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    longText={this.state.longText}
                    onChange={({longText}) => this.setState({longText})}
                />
            </div>
            <Context contextId={'recordDetail'} roleId={'readOnly'} />
            <div
                className={css`
                        width: 460px;
                    `}
            >
                <LongTextField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    longText={this.state.longText}
                />
            </div>
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'} />
            <div
                className={css`
                    width: 240px;
                    height: 78px;
                `}
            >
                <LongTextField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    longText={this.state.longText}
                />
            </div>
            <Context contextId={'recordListItem'} roleId={'readOnly'} />
            <div
                className={css`
                        width: 240px;
                        height: 24px;
                    `}
            >
                <LongTextField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    longText={this.state.longText}
                />
            </div>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
