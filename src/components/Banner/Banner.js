import React, {Component}  from 'react'

export default class Banner extends Component {
    render() {
        const { image, alt } = this.props

        return (
            <div>
                <img src={image} alt={alt} />
            </div>
        )
    }
}