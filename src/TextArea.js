import React from 'react'
import ReactDOM from 'react-dom'
import {css} from 'emotion'

export default class TextArea extends React.Component {

    state = {
        height: 100
    }

    componentDidMount() {
        this.updateHeight()
    }

    componentDidUpdate() {
        this.updateHeight()
    }

    updateHeight() {

        const el = ReactDOM.findDOMNode(this)

        const scrollHeight = el.scrollHeight

        if (scrollHeight !== this.state.height) {
            console.log(el.scrollHeight)
            this.setState({
                height: scrollHeight
            })
        }
    }

    render() {

        const value = this.props.value || ''

        return (
            <textarea
                className={css`
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
                `}
                style={{
                    height: this.state.height - 10,
                    minHeight: 200,
                    maxHeight: 580
                }}
                value={value}
                onChange={e => this.props.onChange({value: e.target.value})}
            />
        )
    }
}