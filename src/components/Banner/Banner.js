import React, {Component, Fragment}  from 'react'
import './Banner.scss'

export default class Banner extends Component {
    render() {
        const { image, alt, artistData, error } = this.props

        return (
            <Fragment>
                {artistData && !error &&
                    <div className="banner">
                        <img src={image} alt={alt} />
                    </div>
                }
            </Fragment>
        )
    }
}