import React, {Component} from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.scss'
import Search from '../Search/Search'
import Artist from '../Artist/Artist'
import AlbumList from '../AlbumList/AlbumList'
import Loader from '../Loader/Loader'
import Banner from '../Banner/Banner'
import Biography from '../Biography/Biography'

const API_KEY = '195003';
  
class App extends Component {

  state = {
    error: undefined,
    loading: false,
    artistData: undefined,
    albumData: undefined,
    search: ''
  }

  onHandleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  
  // function called when search form is submited
  getInfo = async (e) => {
    e.preventDefault()

    // redirect to home when submit form
    this.props.history.push('/')
    
    this.setState({
      loading: true,
      error: undefined,
      artistData: undefined,
      albumData: undefined,
      search: e.target.elements.search.value
    })

    // fetching api's data
    const artist = await fetch(`https://theaudiodb.com/api/v1/json/${API_KEY}/search.php?s=${this.state.search}`)
    const album = await fetch(`https://theaudiodb.com/api/v1/json/${API_KEY}/searchalbum.php?s=${this.state.search}`)
    
    // parsing into json format
    const artistData = await artist.json()
    const albumData = await album.json()

    console.log(artistData)
    console.log(albumData)
    
    // handling the errors, if the api returns null when the artist was not found
    if (artistData.artists === null || albumData.album === null) {
      this.setState({
        artistData: undefined,
        albumData: undefined,
        error: 'The artist was not found.',
        loading: false,
        search: ''
      })
    } else {
      this.setState({
        artistData: artistData,
        albumData: albumData,
        error: undefined,
        loading: false,
        search: ''
      })
    }
  }

  render() {

    const {loading, artistData, albumData, error, search } = this.state

    return (
      <div className="App">
        <Search getInfo={this.getInfo} error={error} search={search} onHandleChange={this.onHandleChange} />

        {artistData && !error &&
          <Banner image={artistData.artists[0].strArtistBanner} alt={artistData.artists[0].strArtist} />
        }

        {loading &&
          <Loader />
        }

        <Switch>
          <Route exact path="/">
            {artistData &&
              <Artist artistData={artistData} />
            }
          </Route>
          <Route
            path={`/albums/:id`}
            children={<AlbumList artistData={artistData}
            albumData={albumData} />}
          />
          <Route
            path={`/biography/:id`}
            children={<Biography artistData={artistData}
            albumData={albumData} />}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)