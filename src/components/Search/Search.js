import React, {Component} from 'react'
import './Search.scss'

export default class Search extends Component {

    render() {

        const {getInfo, error, search, onHandleChange} = this.props

        return (
            <div className="search">
                <h1 className="search__title">discover about your favorite band or music artist</h1>
                <form onSubmit={getInfo}>
                    <input type="text" name="search" placeholder="enter artist or band name" value={search} onChange={onHandleChange} />
                    <button className="submit-search" type="submit">
                        <i className="fa fa-search">Search</i>
                    </button>
                </form>
                {error &&
                    <div>
                        {error}
                    </div>
                }
            </div>
        )
    }
}