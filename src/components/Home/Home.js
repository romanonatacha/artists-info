import React, {Component} from 'react'
import './Home.scss'
import image from '../../images/music.jpg'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home__banner">
                    <img className="home__banner__img" src={image} />
                </div>
            </div>
        )
    }
}