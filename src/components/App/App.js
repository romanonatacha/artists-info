import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import Search from '../Search/Search'
import Artist from '../Artist/Artist'
import AlbumList from '../AlbumList/AlbumList'


const API_KEY = '195003';
  
export default class App extends Component {

  state = {
    error: undefined,
    loading: false,
    apiData: undefined
  }
    
  getInfo = async (e) => {
    e.preventDefault()
      
    this.setState({
      loading: true,
      error: undefined,
      apiData: undefined
    })
  
    let search = e.target.elements.search.value
  
    const api = await fetch(`https://theaudiodb.com/api/v1/json/${API_KEY}/search.php?s=${search}`)
    const result = await api.json()
    console.log(result)

     if (result === '404') {
        this.setState({
          apiData: undefined
        })
      } else if (search) {
    
        this.setState({
          apiData: result,
        }) 
      }

      if (this.state.apiData) {
        this.setState({
          apiData: result,
          loading: false
        }) 
      }
  }

  render() {
    return (
      <div className="App">
        <Search
          getInfo={this.getInfo}
        />
            <Switch>
          <Route exact path="/">
            {this.state.apiData && 
            <Artist
              apiData={this.state.apiData}
              loading={this.state.loading}
            />
            }
          </Route>
    
          <Route
            path={`/:id`}
            children={<AlbumList/>}
            apiData={this.state.apiData}
          />
        </Switch>
      </div>
    )
  }
}
