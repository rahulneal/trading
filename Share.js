import React from 'react'
import './Share.css'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'

function Share() {
    return (
        <div className="share">
            <button class="button">BUY</button>
            <button class="button2">SELL</button>
         
         <div className="light">
            <p className="f">Share Range</p>
            <p className="t"> Price/share</p>
            </div>
        <div className="share_con">

            <One/>
            <Two/>
            <Three/>
            <Four/>
            
        </div>
        <div className="light2">
            <p className="ff">Enter Quantity</p>
            <p className="tt"> Rate/share</p>
            </div>
          <div className="qunt">
             <input className="button4" type="text"/>
            
            <button class="button5">1000</button>
            </div>
             
            <div className="light3">
            <p>Estimated Cost:</p>
            <p className="ttt">Rs 1400</p>
            </div>

            <button class="button6">Buy Shares</button>

            
        </div>
    )
}

export default Share
