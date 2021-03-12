import React, {useState, useContext} from 'react'
import {FaSearch} from 'react-icons/fa'
import './Searchbar.css'

// context
import SearchContext from '../../utils/context/SearchContext'
const SearchBar = () => {

    // use context
    const {
        updateSearch,
    } = useContext(SearchContext)    
    const [userSearch, setUserSearch] = useState('')


    const handleInputChange = (event) => {
        setUserSearch(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(userSearch)
        updateSearch(userSearch)
    }
    return(
        <form className = 'searchbar' onSubmit = {handleSubmit}>
            <input placeholder = 'Search' type = 'text' name = 'userSearch' onChange = {handleInputChange} value = {userSearch}/>
            <button className = 'search_btn' type ='submit'>
                <FaSearch />
            </button>
        </form>
    )
}

export default SearchBar
