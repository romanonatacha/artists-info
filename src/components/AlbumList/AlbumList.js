import React from 'react'
import { Link } from 'react-router-dom'

function AlbumList(props) {
    let { albumData, artistData } = props
    const artistName = artistData.artists[0].strArtist
    
    return (
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
    )

}

export default AlbumList