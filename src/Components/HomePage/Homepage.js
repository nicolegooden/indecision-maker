import React from 'react'
import './Homepage.scss'
import { ActivityCards }  from '../ActivityCards/ActivityCards'
import { CgUserlane } from "react-icons/cg";
import { FaServer, FaGithub} from "react-icons/fa";

export function Homepage() {
    return (
        <div className='homepage-container'>

          <nav className="nav-bar">
            <div className="app-logo">
              <CgUserlane className="logo"/>
            </div>
            <ul className="nav-links">
              <li className="link">About</li>
              <li className="link">Developers</li>
              <li className="link"></li>
              <li className="link"><a className="link" href="https://github.com/nicolegooden/indecision-maker"><FaServer/></a></li>
              <li className="link"><a href="https://github.com/Atos20/indecision-maker-server"><FaGithub/></a></li>
              
            </ul>
          </nav>

          <div className="homepage-inner-container">
            <h1 className="app-title1">Indecision</h1>
            <h1 className="app-title2">maker</h1>
            <p className="intro">Thus, our indecision may lie in our fears and doubts about the outcomes of our decisions or about the process of decision-making: </p>
            <button className="find-activitty">find activity</button>
          </div>

            <ActivityCards />

        </div>
    )
}
