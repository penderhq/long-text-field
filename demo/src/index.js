import React, {Component} from 'react'
import {Canvas, Paragraph, Box, Heading} from '@cmds/demo-utils'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import LongTextField from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
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
        "longText": "## This is a long text.\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n### Bullet points\n\n- Bullet point 1\n- Bullet point 2\n- Bullet point 3​\n\n![Test Image](https://source.unsplash.com/1600x900/?nature,water)\n\n[Test Link](https://source.unsplash.com/1600x900/?nature,water)\n\n​\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    render() {
        return <Canvas>
            <Heading>
                Record Detail Context
            </Heading>
            <Paragraph>
                With editor role
            </Paragraph>
            <Box>
                <LongTextField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    longText={this.state.longText}
                    onChange={({longText}) => this.setState({longText})}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre
                    className={css`
                    white-space: normal;
                `}
                >
                {JSON.stringify(this.state, null, 2)}
            </pre>
            </Box>
            <Paragraph>
                With read only role
            </Paragraph>
            <Box>
                <LongTextField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    longText={this.state.longText}
                />
            </Box>
            <Heading>
                Record Gallery Card Context
            </Heading>
            <Paragraph>
                With read only role
            </Paragraph>
            <Box>
                <LongTextField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    longText={this.state.longText}
                />
            </Box>
            <Heading>
                Record List Item Context
            </Heading>
            <Paragraph>
                With read only role
            </Paragraph>
            <Box>
                <LongTextField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    longText={this.state.longText}
                />
            </Box>
        </Canvas>
    }
}

render(<Demo/>, document.querySelector('#demo'))
