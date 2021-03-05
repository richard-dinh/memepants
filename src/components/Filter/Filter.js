import React, {useContext, useState} from 'react'
import './Filter.css'

// context
import SearchContext from '../../utils/context/SearchContext'
const Filter = () => {

    // state to handle class toggling and to determine which button is active
    const {
        updateFilter
    } = useContext(SearchContext)
    const [buttonState, setButtonState] = useState({
        gifs: false,
        img: false
    })

    const handleOnClick = (value) => {
        console.log('handleButtonClick')
        if(value === 'gifs'){
            // Check to see if already toggled, if so untoggle
            if(buttonState.gifs){
                setButtonState({ ...buttonState, gifs: false, img: false })
                updateFilter('')
            }
            else{
                setButtonState({...buttonState, gifs: true, img: false})
                updateFilter('gif')
            }
        }
        else{
            if(buttonState.img){
                setButtonState({ ...buttonState, gifs: false, img: false })
                updateFilter('')
            }
            else{
                setButtonState({...buttonState, gifs: false, img: true})
                updateFilter('image')
            }
        }
    }

    return (
      <div className="filter_container">
        <ul className="filter_list">
          <li className="filter_title">Filter (both by default): </li>
          <li className="gifs_button">
            <button onClick = { () => handleOnClick('gifs')} className = {buttonState.gifs ? 'active': null}>
                Gifs
            </button>
          </li>
          <li className="Images_button">
            <button onClick = { () => handleOnClick('img')} className = {buttonState.img ? 'active': null}>
                Images
            </button>
          </li>
        </ul>
        <img src="./patrick.png" alt="patrick" className = 'filter_img'></img>
      </div>
    )
}

export default Filter