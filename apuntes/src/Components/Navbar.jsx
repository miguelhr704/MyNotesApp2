import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";

function Navbar() {
    return (

        <div className='navbar'>
            <div className='navbar-logo'>
                <div className='navbar-button'><FeaturedPlayListIcon fontSize='large' /></div>
            </div>
            <div className='navbar-button__container'>
                <Link to='/home' className='navbar-button'><HomeIcon fontSize='large' /> <div className='navbar-button__toolTip'>Home</div></Link>
                <Link to='/search' className='navbar-button'><SearchIcon fontSize='large' /> <div className='navbar-button__toolTip'>Search</div></Link>
                <Link to='/addInfo' className='navbar-button'><AddCircleIcon fontSize='large' /> <div className='navbar-button__toolTip'>Add Topic</div></Link>
            </div>
            <div className='navbar-out'>
                <div className='navbar-button'><ArrowCircleLeftIcon fontSize='large' /></div>
            </div>

        </div>
    )
}

export default Navbar