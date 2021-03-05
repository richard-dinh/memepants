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
        search: '',
        filter: '',
        results: []
    })

    searchState.updateSearch = search => {
        console.log("in update Search")
        console.log(search)
        setSearchState({...searchState, search})
    }

    searchState.updateResults = results => {
        setSearchState({...searchState, results})
    }

    searchState.updateFilter = filter => {
        console.log(filter)
        setSearchState({...searchState, filter})
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
