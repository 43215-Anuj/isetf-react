import React from 'react'
import './Layout.scss';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Navigation'

const Layout = ({children}) => {
    return (
        <div>
            <header className="top-head">
                <Header />
                <Nav />
            </header>
            { children }
        </div>
    )
}

export default Layout
