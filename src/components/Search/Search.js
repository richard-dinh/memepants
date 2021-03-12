import React, {useContext, useEffect, useState} from 'react'
import './Search.css'

import Meme from "../Meme/Meme"
import Searchbar from '../Searchbar/Searchbar'

// API
import API from "../../utils/API/api"
// context
import SearchContext from '../../utils/context/SearchContext'
const Search = () => {

    const {
        search,
        results,
        filter,
        start,
        updateStartAndResults
    } = useContext(SearchContext)
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
        // when user hits the bottom of the screen - 200px
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100){
            setIsFetching(true)
        }
    }

    const handleFetchMoreItems = () => {
        console.log("fetch more items!")
        let temp_start = start
        if(start === 0){
            temp_start = 11
        }
        else{
            temp_start = start + 10
        }

        API.google_search(search, filter, temp_start)
        .then( ({data}) => {
            let temp_results = results
            temp_results = temp_results.concat(data.items)
            updateStartAndResults(temp_start, temp_results)
            setIsFetching(false)
        })
        .catch(err => {
            console.log(err)
        })
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