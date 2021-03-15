import React from 'react'
import './Meme.css'



const Meme = (props) => {

    const handleOnClick = (link) => {
        const tempDiv = document.createElement('textarea')
        tempDiv.value = link
        document.body.appendChild(tempDiv)
        tempDiv.select()
        document.execCommand('copy')
        document.body.removeChild(tempDiv)
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