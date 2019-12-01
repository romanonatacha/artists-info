import React, {Component, Fragment} from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'

export default class Header extends Component {
    render() {

        const { getInfo, error, search, onHandleChange} = this.props

        return (
            <Fragment>
                <div className="back-btn">
                    <Link to='/'><i className="fa fa-backward icon"></i><br/>back to home</Link>
                </div>
                <div className="app__search">
                    <Search getInfo={getInfo} error={error} search={search} onHandleChange={onHandleChange} />
                </div>
            </Fragment>
        )
    }
}