import React from 'react'
import {injectGlobal} from 'emotion'
import PropTypes from 'prop-types'
import RecordDetailEditor from './contexts/recordDetail/editor'
import RecordDetailReadOnly from './contexts/recordDetail/readOnly'
import RecordGalleryCard from './contexts/recordGalleryCard'
import RecordListItem from './contexts/recordListItem'

injectGlobal`
    .long-text-field__preview a {
        color: #07f;
    }
    
    .long-text-field__preview img {
        max-width: 100%;
    }
`

export default class LongTextField extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        contextId: PropTypes.oneOf(['recordDetail', 'recordGridRow', 'recordGalleryCard', 'recordListItem']),
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        longText: PropTypes.string,
        onChange: PropTypes.func
    }

    render() {

        const {contextId, roleId} = this.props

        if (contextId === 'recordDetail' && roleId === 'editor') {

            return (
                <RecordDetailEditor
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordDetail' && roleId === 'readOnly') {

            return (
                <RecordDetailReadOnly
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordGalleryCard') {

            return (
                <RecordGalleryCard
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordListItem') {

            return (
                <RecordListItem
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