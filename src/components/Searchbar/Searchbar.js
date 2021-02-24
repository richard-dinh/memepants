import React from 'react'
import {FaSearch} from 'react-icons/fa'
import './Searchbar.css'
const SearchBar = () => {


    return(
        <div className = 'searchbar'>
            <input placeholder = 'Search' type = 'text' />
            <div class = 'search_btn'>
                <FaSearch />
            </div>
        </div>
    )
}

export default SearchBar
