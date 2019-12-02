import React, { Component } from 'react'
import './Error.scss'

export default class Error extends Component {
    render() {
        const { error } = this.props

        return (
            <div className="error">
                <i class="error__icon fa fa-exclamation-circle"></i>
                <p className="error__text">
                    {error}
                </p>
            </div>
        )
    }
}