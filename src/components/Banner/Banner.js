import React, {Component}  from 'react'

export default class Banner extends Component {
    render() {
        const { artistData, image, alt } = this.props

        return (
            <div>
                <img src={image} alt={alt} />
            </div>
        )
    }
}