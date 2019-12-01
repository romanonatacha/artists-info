import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Artist.scss'

export default class Artist extends Component {
    render() {
        const { artistData, error } = this.props
        // const artistName = artistData.artists[0].strArtist

        return (
            <Fragment>
                {artistData && !error &&
                    <div className="artist">
                        <div className="artist__info">
                            <h3>{artistData.artists[0].strArtist}</h3>
                            <div>{artistData.artists[0].strCountry}</div>
                            <div>{artistData.artists[0].strGenre}</div>
                            <div>{artistData.artists[0].intFormedYear}</div>
                        </div>
                        <div className="artists__more">
                            <div className="artist__more__card">
                                <Link to={`/albums/${artistData.artists[0].strArtist}`}>Albums</Link>
                            </div>
                            <div className="artist__more__card">
                                <Link to={`/biography/${artistData.artists[0].strArtist}`}>Biography</Link>
                            </div>
                        </div>
                    </div>
                }
                {error &&
                    <div>{error}</div>
                }
            </Fragment>
        )
    }
}