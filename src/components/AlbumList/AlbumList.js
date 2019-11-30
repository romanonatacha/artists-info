import React from 'react'

function AlbumList(props) {
    let { albumData } = props
    
    return (
        <div>
            <div>
                <ul>
                    {albumData.album.map(item =>
                        <li key={item.idAlbum}>{item.strAlbum}</li>    
                    )}
                </ul>
            </div>
        </div>
    )

}

export default AlbumList