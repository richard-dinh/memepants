import {createContext} from 'react'

const SearchContext = createContext({
    search: '',
    results: [],
    filter: '',
    start: 0,
    copy: false,
    updateSearch: () => {},
    updateResults: () => {},
    updateFilter: () => {},
    updateStartAndResults: () => {},
    updateCopy: () => {}
})

export default SearchContext