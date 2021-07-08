import React from 'react'
import './Chart.css'
import LineGraph from "./LineGraph"
import TimeLine from './TimeLine'



function Chart() {
    return (
        <div className="chart">
        
        <div className="newsfeed__chart">
            
            <TimeLine/>
            <LineGraph/>
            
            
          </div>
                
        </div>
    )
}

export default Chart
