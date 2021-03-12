import React from 'react'
import './Meme.css'



const Meme = (props) => {

    return (
      <>
        <div className="meme_card">
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