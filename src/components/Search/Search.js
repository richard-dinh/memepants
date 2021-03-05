import React, {useContext} from 'react'
import './Search.css'

import Meme from "../Meme/Meme"
import Searchbar from '../Searchbar/Searchbar'

// context
import SearchContext from '../../utils/context/SearchContext'
const Search = () => {

    const {results} = useContext(SearchContext)
    return (
        <div className = 'search_container'>
            <div className = 'search_contents'>
                <Searchbar />
            </div>
            <div className = 'results'>
                {results.map(image => {
                    return <Meme link = {image.link} />
                })}
                {/* <Meme />
                <Meme />
                <Meme />
                <Meme />
                <Meme />
                <Meme /> */}
            </div>
        </div>
    )
}

export default Search