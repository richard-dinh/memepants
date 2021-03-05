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
        console.log(search)
        console.log(`filter: ${searchState.filter}`)
        setSearchState({...searchState, search})
    }

    searchState.updateResults = results => {
        setSearchState({...searchState, results})
    }

    searchState.updateFilter = filter => {
        console.log(filter)
        setSearchState({...searchState, filter})
    }
	useEffect(() => {
        // only fire if search exists
        if(searchState.search){
            console.log('user has inputted search, run api call')
            // clear search
            setSearchState({...searchState, search: ''})

        }
        // console.log('ping')
		// API.google_search('money', 'gif')
        // .then(data => {
        //     console.log(data)
        //     setSearch(data.data)
        // })
	},[searchState.search])
	

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
