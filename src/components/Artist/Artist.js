import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Artist.scss'

export default class Artist extends Component {
    render() {
        const { artistData } = this.props
        const artistName = artistData.artists[0].strArtist

        return (
            <div className="artist">
                <div className="artist__info">
                    <h3>{artistName}</h3>
                    <div>{artistData.artists[0].strCountry}</div>
                    <div>{artistData.artists[0].strGenre}</div>
                    <div>{artistData.artists[0].intFormedYear}</div>
                </div>
                <div className="artists__more">
                    <div className="artist__more__card">
                        <Link to={`/albums/${artistName}`}>Albums</Link>
                    </div>
                    <div className="artist__more__card">
                        <Link to={`/biography/${artistName}`}>Biography</Link>
                    </div>
                </div>
            </div>
        )
    }
}