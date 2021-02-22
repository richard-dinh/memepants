import React, {useEffect, useState} from "react"
import { Link } from "gatsby"

import API from '../utils/API/api'
// Components
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


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
		<Layout>
			<SEO title="Home" />
			<h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
			<Link to="/page-2/">Go to page 2</Link> <br />
			<Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            {search ?
                <ul>
                {search.items.map(result => {
                    return(
                        <li>
                            <img src = {result.link} alt = {result.title}></img>
                            <p>{result.title}</p>
                        </li>
                    )
                })}
                </ul> 
            : null}
		</Layout>
	)
}

export default IndexPage
