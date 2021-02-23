import React from 'react'
import './Filter.css'
const Filter = () => {


    return (
        <div className = 'filter_container'>
            <ul className = 'filter_list'>
                <li className = 'filter_title'>Filter (both by default): </li>
                <li className = 'gifs_button'><button>Gifs</button></li>
                <li className = 'Images_button'><button>Images</button></li>
            </ul>
        </div>
    )
}

export default Filter