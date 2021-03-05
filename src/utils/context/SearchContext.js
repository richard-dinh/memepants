import {createContext} from 'react'

const SearchContext = createContext({
    search: '',
    results: [],
    filter: '',
    updateSearch: () => {},
    updateResults: () => {},
    updateFilter: () => {}
})

export default SearchContext