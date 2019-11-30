import React, {Component} from 'react'
import './Search.scss'

export default class Search extends Component {

    render() {

        const {getInfo, error, search, onHandleChange} = this.props

        return (
            <div className="search">
                <form onSubmit={getInfo}>
                    <input type="text" name="search" placeholder="search" value={search} onChange={onHandleChange} />
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