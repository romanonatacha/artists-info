import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Artist.scss'
import Loader from '../Loader/Loader'

export default class Artist extends Component {
    render() {
        const { apiData, loading } = this.props

        return (
            <div className="artist">
                {loading &&
                    <Loader />
                }
                <div className="artist__banner">
                    <img src={apiData.artists[0].strArtistBanner} alt={apiData.artists[0].strArtist} />
                    <h3>{apiData.artists[0].strArtist}</h3>
                    <Link to={`/${apiData.artists[0].strArtist}`}>CLIQUE AQUI</Link>
                </div>
                <div className="artist__bio">
                    {apiData.artists[0].strBiographyEN}
                </div>
            </div>
        )
    }
}