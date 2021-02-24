import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import './Searchbar.css'
const SearchBar = () => {

    const [search, setSearch] = useState('')


    const handleInputChange = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const handleOnClick = () => {
        console.log(search)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(search)
    }
    return(
        <form className = 'searchbar' onSubmit = {handleSubmit}>
            <input placeholder = 'Search' type = 'text' name = 'search' onChange = {handleInputChange} value = {search}/>
            <button className = 'search_btn' type ='submit'>
                <FaSearch />
            </button>
        </form>
    )
}

export default SearchBar
