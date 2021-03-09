import React, {useContext, useEffect, useState} from 'react'
import './Search.css'

import Meme from "../Meme/Meme"
import Searchbar from '../Searchbar/Searchbar'

// context
import SearchContext from '../../utils/context/SearchContext'
const Search = () => {

    const {results} = useContext(SearchContext)
    const [isFetching, setIsFetching] = useState(false)
    // add window scroll
    useEffect(() => {
        // only add if results is greater than 1
        if(results.length > 1){
            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, [results])

    // use effect for fetching items
    useEffect( () => {
        if(isFetching) handleFetchMoreItems()
    }, [isFetching])

    const handleScroll = () =>{
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200){
            setIsFetching(true)
        }
    }

    const handleFetchMoreItems = () => {
        console.log("fetch more items!")
        // TODO: set isFetching to false
    }
    return (
        <div className = 'search_container'>
            <div className = 'search_contents'>
                <Searchbar />
            </div>
            <div className = 'results'>
                {results.map(image => {
                    return <Meme link = {image.link} />
                })}
            </div>
            {(isFetching && results.length > 1) ? <img src = './load.png' className = 'loading' alt = 'loading'/> : null}
        </div>
    )
}

export default Search