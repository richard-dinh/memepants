import React, {useEffect, useState} from "react"
import { Link } from "gatsby"

import API from '../utils/API/api'
// Components
import Header from '../components/Header/Header'

// css
import './index.css'

const IndexPage = () => {

    const [search, setSearch] = useState(null)

	useEffect(() => {
        console.log('ping')
		API.google_search('money', 'gif')
        .then(data => {
            console.log(data)
            setSearch(data.data)
        })
	},[])
	

	return(
        <Header/>
	)
}

export default IndexPage
