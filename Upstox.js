import React from 'react'
import './Upstox.css'
import Kala from './Kala.png'

function Upstox() {
    return (
        <div className="upstox">
            <p className="upp">UPSTOX</p>
            <p className="buy">BUY</p>
            <p className="SELL">SELL</p>
            <div className="kala">
       <a href="#">
                <img src={Kala} width={30} />
       </a>
      </div>
        </div>
    )
}

export default Upstox
