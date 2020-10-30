import React from 'react'
import './Homepage.scss'
import { ActivityCards }  from '../ActivityCards/ActivityCards'

export function Homepage() {
    return (
        <div className='homepage-container'>

          <div className="homepage-inner-container">
            <h1 className="app-title1">Indecision</h1>
            <h1 className="app-title2">maker</h1>
          </div>

            <ActivityCards />

        </div>
    )
}
