import React from 'react'
import '../Css/Home.css';
import Logo from '../Image/googlelogo.png';
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../Components/Search';

function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_header_left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home_header_right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className="home_body">
                <img src={Logo} 
                    alt=""
                />
                <div className="home_inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
