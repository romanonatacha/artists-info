import React, { Fragment } from 'react'
import './Biography.scss'

import Header from '../Header/Header'
import Banner from '../Banner/Banner'

function Biography(props) {
    let { artistData, getInfo, onHandleChange, error, search } = props

    return (
        <Fragment>
            <Header getInfo={getInfo} error={error} search={search} onHandleChange={onHandleChange} />
            <Banner artistData={artistData} image={`${artistData.artists[0].strArtistBanner}/preview`} alt={artistData.artists[0].strArtist} />
            <div className="bio">
                <div className="bio__title">About {artistData.artists[0].strArtist}</div>
                <div className="bio__text">{artistData.artists[0].strBiographyEN}</div>
            </div>
        </Fragment>
    )
}

export default Biography