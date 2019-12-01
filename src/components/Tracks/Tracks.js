import React, { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '../Loader/Loader'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'

function Tracks(props) {
    let { artistData, albumData, getInfo, onHandleChange, error, search } = props
    let { idAlbum } = useParams()
    const [ tracks, setTracks ] = useState({ track: [] })
    const [ loading, setLoading ] = useState(true)

    const API_KEY = '195003';

    // fetching tracks data using the album id
    useEffect(() => {
        const getTracks = async () => {
            
            await fetch(`https://theaudiodb.com/api/v1/json/${API_KEY}/track.php?m=${idAlbum}`)   
            .then(response => response.json())
                .then(data => {
                setTracks(data)
                setLoading(false)
                console.log(data)             
            });
        }

        getTracks()

    }, [])

    return (
        <Fragment>
            <Header getInfo={getInfo} error={error} search={search} onHandleChange={onHandleChange} />
            <Banner  artistData={artistData} image={artistData.artists[0].strArtistBanner} alt={artistData.artists[0].strArtist} />
            <div>
                <div>
                    {loading &&
                        <Loader />
                    }
                    {/* map trought albumData, and checks if the album id is the same os the album id of url param, and render the album image of this album */}
                    {albumData.album.map(item => {
                        if (item.idAlbum === idAlbum) {
                            return <img key={item.idAlbum} src={item.strAlbumThumb} alt={item.strAlbum} />
                        }
                    })}
                    <ul>
                        {/* map trought tracks api, and render a list of tracks */}
                        {tracks.track.map(item =>
                            <li key={item.idTrack}>{item.strTrack}</li>
                        )}
                    </ul>
                </div>
            </div>

        </Fragment>
    )

}

export default Tracks