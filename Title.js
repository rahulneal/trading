import React from 'react'
import './Title.css'
import Bell from './ghanta.png'
function Title() {
    return (
        <div className="title">
          <div className="share__name">
              <h1>TATA POWER</h1>
              <p>INE511|01011</p>
              
              </div>

              <button className="add">+ Add to Watchlist</button>

              <div className="ghanta">
       <a href="#">
                <img src={Bell} width={30} />
       </a>
      </div>

            <div className="items">
              <ul>
                  <li className="item active" >Price</li>
                  <li >About</li>
                  <li >Overview</li>
                  <li >Insights</li>
                  <li >Financials</li>
                  <li >Shareholdings</li>
                  <li >Management</li>
                  <li >Press</li>              
                  <li >Annualreport</li>
                  <li >Companyinformation</li>

                  </ul>
        </div>
        
        
        </div>

    )
}

export default Title
