import React, { Fragment } from 'react'
import './AlbumList.scss'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'

function AlbumList(props) {
    let { albumData, artistData, getInfo, error, onHandleChange, search } = props
    const artistName = artistData.artists[0].strArtist
    
    return (
        <Fragment>
            <Header getInfo={getInfo} error={error} search={search} onHandleChange={onHandleChange} />
            <Banner  artistData={artistData} image={`${artistData.artists[0].strArtistBanner}/preview`} alt={artistData.artists[0].strArtist} />
            <div className="albumlist">
                <div className="albumlist__content">
                    <ul className="albumlist__content__list">
                        <li key="title" className="albumlist__content__list__item title">
                            <span>Album</span>
                            <span>Year</span>  
                        </li>
                        {albumData.album.map(item =>
                            <li key={item.idAlbum} className="albumlist__content__list__item">
                                <Link to={`/albums/${artistName}/${item.idAlbum}`} >
                                    <span>{item.strAlbum}</span>
                                    <span>{item.intYearReleased}</span>  
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </Fragment>
    )

}

export default AlbumList