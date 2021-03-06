import React, {useEffect, useState} from "react"

import API from '../utils/API/api'
// Components
import Header from '../components/Header/Header'
import Filter from '../components/Filter/Filter'
import Search from '../components/Search/Search'
import CopyMessage from '../components/CopyMessage/CopyMessage'
// css
import './index.css'

// Context
import SearchContext from '../utils/context/SearchContext'

const IndexPage = () => {

    const [searchState, setSearchState] = useState({
        search: '',
        filter: '',
        // The index of the first result to return.
        start: 0,
        copy: false,
        results: []
    })

    searchState.updateSearch = search => {
        setSearchState({...searchState, search})
    }

    searchState.updateResults = results => {
        setSearchState({...searchState, results})
    }

    searchState.updateFilter = filter => {
        setSearchState({...searchState, filter})
    }

    searchState.updateStartAndResults = (start, results) => {
        setSearchState({...searchState, start, results})
    }

    searchState.updateCopy = (copy) => {
        setSearchState({...searchState, copy})
        setTimeout(() => {
            setSearchState({...searchState, copy: false})
        }, 3000);
    }
	useEffect(() => {
        // only fire if search exists
        if(searchState.search){
            console.log('user has inputted search, run api call')
            // clear search

            API.google_search(searchState.search, searchState.filter, searchState.start)
            .then( ({data}) => {
                setSearchState({...searchState, search: '', results: data.items})
            })
            .catch(err => {
                setSearchState({ ...searchState, search: "" })
                console.log(err)
            })

            // empty search in Search state in event user wants to conduct the same search 

        }
	},[searchState.search])
	

	return (
        <>
        <SearchContext.Provider value={searchState}>
            <Header />
            <Filter />
            <Search />
            <CopyMessage value = {searchState.copy}/>
        </SearchContext.Provider>
        </>
  )
}

export default IndexPage
