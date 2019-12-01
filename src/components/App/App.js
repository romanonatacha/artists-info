import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import './App.scss'
import Loader from '../Loader/Loader'
import Routes from '../Routes/Routes'

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
    this.props.history.push('/query')
    
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
      <div className="app">

        {loading &&
          <Loader />
        }

        <Routes
          getInfo={this.getInfo}
          onHandleChange={this.onHandleChange}
          artistData={artistData}
          albumData={albumData}
          loading={loading}
          error={error}
          search={search}
        />

      </div>
    )
  }
}

export default withRouter(App)