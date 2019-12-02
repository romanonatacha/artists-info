import React, { Component } from 'react'
import './Error.scss'

export default class Error extends Component {
    render() {
        const { error, className } = this.props

        return (
            <div className="error">
                <i className={className}></i>
                <p className="error__text">
                    {error}
                </p>
            </div>
        )
    }
}