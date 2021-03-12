import React from 'react'
import './Header.css'


const Header = () => {


    return (
      <div className="header_container">
        <div className="header_title">
          <h1 className="spongebob_title">Spongebob</h1>
          <h1 className="memepants_title">MemePants</h1>
        </div>
        <div className="header_description">
          <h3 className="app_description">
            Type in a scenario and we will give you Spongebob memes related to
            it. You can filter by image or GIFs!
          </h3>
        </div>
      </div>
    )

}

export default Header