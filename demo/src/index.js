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

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

const stringifyJSON = (args) => {
    try {
        return JSON.stringify(args, null, 2)
    } catch (e) {
        return null
    }
}

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${stringifyJSON(args)}
    `)
}

class Demo extends Component {
    render() {
        return <div>
            <h1>LongTextField Demo</h1>
            <p>Used for entering multiple lines of text.</p>
            <h2>Context based</h2>
            <p>The behaviour of the component changes based on the context in which it is rendered.</p>
            <h3>
                RecordDetail context
            </h3>
            <p>Used for displaying a long text in a record gallery card.</p>
            <h4>
                Read only role
            </h4>
            <Viewport>
                <div
                    className={css`
                        width: 460px;
                        background-color: #fff;
                    `}
                >
                    <LongTextField
                        id={'fld1'}
                        contextId={'recordDetail'}
                        roleId={'readOnly'}
                        longText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                    />
                </div>
            </Viewport>
            <h3>
                RecordGalleryCard context
            </h3>
            <p>Used for displaying a long text in a record gallery card.</p>
            <h4>
                Read only role
            </h4>
            <Viewport>
                <div
                    className={css`
                        width: 240px;
                        height: 78px;
                        background-color: #fff;
                    `}
                >
                    <LongTextField
                        id={'fld1'}
                        contextId={'recordGalleryCard'}
                        roleId={'readOnly'}
                        longText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                    />
                </div>
            </Viewport>
            <h3>
                RecordListItem context
            </h3>
            <p>Used for displaying a long text in a record list item.</p>
            <h4>
                Read only role
            </h4>
            <Viewport>
                <div
                    className={css`
                        width: 240px;
                        height: 24px;
                        background-color: #fff;
                    `}
                >
                    <LongTextField
                        id={'fld1'}
                        contextId={'recordListItem'}
                        roleId={'readOnly'}
                        longText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
