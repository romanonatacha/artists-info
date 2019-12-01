import React, {Fragment} from 'react'
import { Route, Switch } from 'react-router-dom'

import Artist from '../Artist/Artist'
import AlbumList from '../AlbumList/AlbumList'
import Biography from '../Biography/Biography'
import Tracks from '../Tracks/Tracks'
import Home from '../Home/Home'
import Search from '../Search/Search'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'

function Routes(props) {

    const { artistData, albumData, loading, error, getInfo, onHandleChange, search } = props

    return (
        <Switch>
            <Route exact path ='/'>
                {!loading &&
                    <Home
                        getInfo={getInfo}
                        error={error}
                        search={search}
                        onHandleChange={onHandleChange}
                    />
                }
            </Route>
            <Route exact path="/query">
                {!loading &&
                    <Fragment>
                        <Header getInfo={getInfo} error={error} search={search} onHandleChange={onHandleChange} />
                        {artistData &&
                            <Banner artistData={artistData} image={artistData.artists[0].strArtistBanner} alt={artistData.artists[0].strArtist} />
                        }
                        
                        <Artist artistData={artistData} error={error}/>
                    </Fragment>
                }
            </Route>
            <Route
                exact path={`/albums/:id`}
                children={<AlbumList artistData={artistData}
                albumData={albumData} />}
            />
            <Route
                exact path={`/biography/:id`}
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