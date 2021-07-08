import React from 'react'
import './Stats.css'
import Upstox from './Upstox'
import Zerodha from './Zerodha'
import Grow from './Grow'
import Footerstats from './Footerstats'
import Doc from './Doc.png'

function Stats() {
    return (
        <div className="stats">
            <div className="stats__container">
            <div className="header__search">
        <div className="header__searchContainer">
        <div className="zoom">
       <a href="#">
                <img src={Doc} width={20} />
       </a>
      </div>
          <input placeholder="Search Eg. Zerodha,Grow,Upstox" type="text" />
        </div>
        </div>
        {/* UPSTOX */}
        <Upstox/>
        <Zerodha/>
        <Grow/>   
          

        
                    </div>
                    <button class="buttonji">ALL COMPANIES</button>
        
        </div> 
    )
}

export default Stats
