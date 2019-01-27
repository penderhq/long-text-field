import React from 'react'
import RichTextInput from '../../RichTextInput'

export default class RecordDetail extends React.Component {

    render() {

        return (
            <RichTextInput
                value={this.props.longText}
                onChange={this.handleChange}
            />
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