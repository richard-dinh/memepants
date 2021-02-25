import React from 'react'
import './Meme.css'

// icon

const Meme = (props) => {

    return (
        <>
        <div className="meme_container">
            <img src="./meme_pic.png" alt="example" className="meme_pic"></img>
            <div className = 'meme_dl'>
                https://api.time.com/wp-content/uploads/2019/09/savage-patrick-best-spongebob-memes.png
            </div>
        </div>
        <div className="meme_container">
            <img src="./meme_pic.png" alt="example" className="meme_pic"></img>
            <div className = 'meme_dl'>
                https://api.time.com/wp-content/uploads/2019/09/savage-patrick-best-spongebob-memes.png
            </div>
        </div>
        </>
    )
}

export default Meme