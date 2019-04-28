import React from 'react'
import Button from '@cmds/button'
import {css} from 'emotion'
import TextArea from '../../TextArea'
import Preview from '../../Preview'

const TabItem = ({onClick, active, children}) => (
    <div
        className={css`
            margin-right: 8px;
        `}
    >
        <Button
            highlighted={active}
            onClick={onClick}
        >
            {children}
        </Button>
    </div>
)

export default class RecordDetail extends React.Component {

    state = {
        editing: false
    }

    render() {

        return (
            <div>
                <div
                    className={css`
                        display: flex;
                        align-items: center;
                        margin-bottom: 8px;
                    `}
                >
                    <TabItem active={this.state.editing} onClick={() => this.setState({editing: true})}>
                        Write
                    </TabItem>
                    <TabItem active={!this.state.editing} onClick={() => this.setState({editing: false})}>
                        Preview
                    </TabItem>
                </div>
                <div>
                    {this.state.editing ? (
                        <TextArea
                            value={this.props.longText}
                            onChange={this.handleChange}
                        />
                    ) : null}
                    {!this.state.editing ? (
                        <Preview
                            value={this.props.longText}
                        />
                    ) : null}
                </div>
            </div>
        )
    }

    handleChange = ({value}) => {

        if (!this.props.onChange) {
            return
        }

        this.props.onChange({
            id: this.props.id,
            longText: value
        })
    }
}