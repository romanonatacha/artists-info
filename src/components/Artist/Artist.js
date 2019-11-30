import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Artist.scss'
import Banner from '../Banner/Banner'

export default class Artist extends Component {
    render() {
        const { artistData } = this.props
        const artistName = artistData.artists[0].strArtist

        return (
            <div className="artist">
                <div className="artist__banner">
                    <h3>{artistName}</h3>
                    <Link to={`/albums/${artistName}`}>Albums</Link>
                    <Link to={`/biography/${artistName}`}>biography</Link>
                </div>
            </div>
        )
    }
}