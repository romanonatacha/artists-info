import React, {Component} from 'react'
import './Home.scss'
import Search from '../Search/Search'

export default class Home extends Component {
    render() {
        
        const { getInfo, error, search, onHandleChange } = this.props

        return (
            <div className="home">
                <div className="home__banner">
                    <div className="home__banner__search-box">
                        <h1 className="home__banner__search-box__title">
                            discover about<br/>
                            your favorite band<br/>
                            or music artist
                        </h1>
                        <Search getInfo={getInfo} error={error} search={search} onHandleChange={onHandleChange} />
                    </div>
                </div>
            </div>
        )
    }
}