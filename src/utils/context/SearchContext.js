import {createContext} from 'react'

const SearchContext = createContext({
    search: '',
    results: [],
    updateSearch: () => {},
    updateResults: () => {}
})

export default SearchContext