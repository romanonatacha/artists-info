import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'

function AlbumList(props) {
    let { albumData, artistData, getInfo, error, onHandleChange, search } = props
    const artistName = artistData.artists[0].strArtist
    
    return (
        <Fragment>
            <Header getInfo={getInfo} error={error} search={search} onHandleChange={onHandleChange} />
            <Banner  artistData={artistData} image={artistData.artists[0].strArtistBanner} alt={artistData.artists[0].strArtist} />
            <div>
                <div>
                    <ul>
                        {albumData.album.map(item =>
                            <li key={item.idAlbum}>
                                <Link to={`/albums/${artistName}/${item.idAlbum}`} >
                                    {item.strAlbum} {item.intYearReleased}
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