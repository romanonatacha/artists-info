import React, {Component} from 'react'
import './Search.scss'

export default class Search extends Component {

    render() {

        return (
            <div className="search">
                <form onSubmit={this.props.getInfo}>
                    <input type="text" name="search" placeholder="search"/>
                    <button className="submit-search" type="submit">
                        <i className="fa fa-search">Search</i>
                    </button>
                </form>
            </div>
        )
    }
}