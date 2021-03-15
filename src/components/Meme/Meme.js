import React, {useContext} from 'react'
import './Meme.css'

// context
import SearchContext from '../../utils/context/SearchContext'

const Meme = (props) => {

    const {updateCopy} = useContext(SearchContext)
    const handleOnClick = (link) => {
        const tempDiv = document.createElement('textarea')
        tempDiv.value = link
        document.body.appendChild(tempDiv)
        tempDiv.select()
        document.execCommand('copy')
        document.body.removeChild(tempDiv)
        updateCopy(true)
    }
    return (
      <>
        <div className="meme_card"  key = {props.link} onClick = {() => handleOnClick(props.link)}>
                <img src= {props.link} alt="example"></img>
                <p className = 'meme_text'>
                        {props.link}
                </p>
            </div>
        {/* <img src="./meme_pic.png" alt="example" className = 'img'></img> */}
        {/* <p>One</p> */}
      </>
    )
}
export default Meme