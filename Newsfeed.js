import React from 'react'
import './Newsfeed.css'
import Title from './Title'
import Chart from './Chart'
import Statstwo from './Statstwo'
import Share from './Share'

function Newsfeed() {
    return (
        <div className="newsfeed" >
            <div className="newsfeed__container">
                
            <Title />
            <Share/>
            <div className="newsfeed__chart">
            <Chart/>
            </div>
            
            <Statstwo/>
            
            </div>
            
        </div>
    )
}

export default Newsfeed 
