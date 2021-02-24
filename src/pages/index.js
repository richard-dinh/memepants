import React, {useEffect, useState, createContext} from "react"

import API from '../utils/API/api'
// Components
import Header from '../components/Header/Header'
import Filter from '../components/Filter/Filter'
import Search from '../components/Search/Search'
// css
import './index.css'

// Context
import SearchContext from '../utils/context/SearchContext'

const IndexPage = () => {

    const [searchState, setSearchState] = useState({
        search: ''
    })

    searchState.updateSearch = value => {
        console.log("in update Search")
        console.log(value)
        setSearchState({...searchState, search: value})
    }

	// useEffect(() => {
    //     console.log('ping')
	// 	API.google_search('money', 'gif')
    //     .then(data => {
    //         console.log(data)
    //         setSearch(data.data)
    //     })
	// },[])
	

	return (
        <>
        <SearchContext.Provider value={searchState}>
            <Header />
            <Filter />
            <Search />
        </SearchContext.Provider>
        </>
  )
}

export default IndexPage
