import {createContext} from 'react'

const SearchContext = createContext({
    search: '',
    updateSearch: () => {}
})

export default SearchContext