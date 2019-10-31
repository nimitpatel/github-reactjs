import React from 'react';
import SearchBar from './SearchBar';
import './NavBar.css';

const NavBar = props => {
    return (
        <div className="navbar">
            <h1 className="nav-brand">GitHub</h1>
            <SearchBar onSearch={props.onSearch} />
        </div>
    );
};

export default NavBar;