import {createContext} from 'react'

const SearchContext = createContext({
    search: '',
    results: [],
    filter: '',
    start: 0,
    updateSearch: () => {},
    updateResults: () => {},
    updateFilter: () => {},
    updateStartAndResults: () => {}
})

export default SearchContext