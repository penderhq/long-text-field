import React from 'react'
import PropTypes from 'prop-types'
import RecordGalleryCard from './contexts/recordGalleryCard'

export default class LongTextField extends React.Component {

    static propTypes = {
        value: PropTypes.string
    }

    render() {

        const {contextId} = this.props

        if (contextId === 'recordGalleryCard') {

            return (
                <RecordGalleryCard
                    {...this.props}
                />
            )
        }

        return (
            <div>
                Not supported
            </div>
        )
    }
}