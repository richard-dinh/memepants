import React from 'react'
import './Search.css'

import Searchbar from '../Searchbar/Searchbar'

const Search = () => {


    return (
        <div className = 'search_container'>
            <div className = 'search_contents'>
                <Searchbar />
            </div>
        </div>
    )
}

export default Search