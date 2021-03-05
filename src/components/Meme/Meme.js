import React from 'react'
import './Meme.css'



const Meme = () => {

    return (
      <>
        <div className="meme_card">
                <img src="./meme_pic.png" alt="example"></img>
                <p className = 'meme_text'>
                        https://api.time.com/wp-content/uploads/2019/09/savage-patrick-best-spongebob-memes.png
                </p>
            </div>
        {/* <img src="./meme_pic.png" alt="example" className = 'img'></img> */}
        {/* <p>One</p> */}
      </>
    )
}
export default Meme