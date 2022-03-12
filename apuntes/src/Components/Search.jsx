import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return (
        <div className='paper-container'>
            <div className='title'>
                <h1>Search Topic</h1>
            </div>
            <div className='add-content'>
                <input type='text' className='add-content__input' />
                <SearchIcon sx={{ fontSize: '50px', cursor: 'pointer' }} />
            </div>
        </div>
    )
}

export default Search