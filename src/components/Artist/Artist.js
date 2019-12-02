import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Artist.scss'

import Error from '../Error/Error'

export default class Artist extends Component {
    render() {
        const { artistData, error } = this.props

        return (
            <Fragment>
                {artistData && !error &&
                    <div className="artist">
                        <div className="artist__info">
                            <div className="artist__info__card">
                                <div className="artist__info__card__item country">
                                    <p>
                                        from
                                        <br />
                                        <span>
                                            {artistData.artists[0].strCountry}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="artist__info__card">
                                <div className="artist__info__card__item genre">
                                    <p>
                                        genre
                                        <br />
                                        <span>
                                            {artistData.artists[0].strGenre}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="artist__info__card">
                                <div className="artist__info__card__item year">
                                    <p>
                                        since
                                        <br />
                                        <span>
                                            {artistData.artists[0].intFormedYear}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="artists__more">
                            <Link to={`/albums/${artistData.artists[0].strArtist}`}>
                                <div className="artist__more__card">
                                    <div className="artist__more__card__item album">
                                        <p>
                                            <span>
                                                Albums
                                            </span>
                                            <br/><br/>
                                            click to discover
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/biography/${artistData.artists[0].strArtist}`}>
                                <div className="artist__more__card">
                                    <div className="artist__more__card__item bio">
                                        <p>
                                            <span>
                                                Biography
                                            </span>
                                            <br/><br/>
                                            click to read
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                }
                {error &&
                    <Error error={error} />
                }
            </Fragment>
        )
    }
}