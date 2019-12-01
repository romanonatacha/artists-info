import React, {Component} from 'react'
import './Search.scss'

export default class Search extends Component {

    render() {

        const {getInfo, search, onHandleChange} = this.props

        return (
            <div className="search">
                <div className="box">
                    <div className="container-2">
                    <form onSubmit={getInfo}>
                        <button className="icon search__button" type="submit"><i className="fa fa-search"></i></button>
                        <input type="text" id="search" name="search" placeholder="enter artist or band name" value={search} onChange={onHandleChange} />
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}