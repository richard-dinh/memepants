import React from 'react'
import './Meme.css'


// const Meme = (props) => {

//     return (
//         <>
//         <div className="meme_container">
//             <img src="./meme_pic.png" alt="example" className="meme_pic"></img>
//             <div className = 'meme_dl'>
//                 https://api.time.com/wp-content/uploads/2019/09/savage-patrick-best-spongebob-memes.png
//             </div>
//         </div>
//         <div className="meme_container">
//             <img src="./meme_pic.png" alt="example" className="meme_pic"></img>
//             <div className = 'meme_dl'>
//                 https://api.time.com/wp-content/uploads/2019/09/savage-patrick-best-spongebob-memes.png
//             </div>
//         </div>
//         </>
//     )
// }


const Meme = () => {

    return (
      <>
        <div className="meme_card meme_item">
                <img src="./meme_pic.png" alt="example"></img>
                {/* <div className = 'meme_text'>
                        https://api.time.com/wp-content/uploads/2019/09/savage-patrick-best-spongebob-memes.png
                </div> */}
            </div>
        {/* <img src="./meme_pic.png" alt="example" className = 'img'></img> */}
        {/* <p>One</p> */}
      </>
    )
}
export default Meme