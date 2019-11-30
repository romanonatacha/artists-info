import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Artist from '../Artist/Artist'
import AlbumList from '../AlbumList/AlbumList'
import Biography from '../Biography/Biography'
import Tracks from '../Tracks/Tracks' 

function Routes(props) {

    const { artistData, albumData } = props

    return (
        <Switch>
            <Route exact path="/">
                {artistData &&
                    <Artist artistData={artistData} />
                }
            </Route>
            <Route
                exact path={`/albums/:id`}
                children={<AlbumList artistData={artistData}
                albumData={albumData} />}
            />
            <Route
                path={`/biography/:id`}
                children={<Biography artistData={artistData}
                albumData={albumData} />}
            />
            <Route exact path={`/albums/:id/:idAlbum`}>
                <Tracks 
                    artistData={artistData}
                    albumData={albumData}
                />
            </Route>
        </Switch>
    )

}

export default Routes