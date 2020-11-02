import React from 'react'
import './Homepage.scss'
import { ActivityCards }  from '../ActivityCards/ActivityCards'
import { CgUserlane } from "react-icons/cg";
import { FaServer, FaGithub} from "react-icons/fa";
import { Link } from 'react-router-dom';


export const Homepage = () => {

    return (
        <div className='homepage-container'>


          <div className="homepage-inner-container">

            <div className="app-logo">
              <CgUserlane className="logo"/>
            </div>

            <nav className="nav-bar">
              <ul className="nav-links">
                <li className="link">About</li>
                <li className="link">Movies</li>
                <li className="link">Music</li>
                <li className="link">Card Games</li>
                <li className="link">Podcast</li>
                <li className="link">Board Games</li>
              </ul>
            </nav>

            <h1 className="app-title1">Indecision</h1>
            <h1 className="app-title2">maker</h1>
            <p className="intro">Thus, our indecision may lie in our fears and doubts about the outcomes of our decisions or about the process of decision-making: </p>
            <Link to='/form' className="find-activitty-container">
              <button className="find-button">find activity</button>
            </Link>
          </div>

            <ActivityCards />

          <section className="team-section">
            <h1 className="team-title">A passionate team</h1>
            <div className="team-container">
                <p className="desc description1">Love the outdoors</p>
              <div className=" dev developer-card1">
                <div className="border"></div>
              </div>
              <p className="desc description2">Your regular florida man</p>
              <div className="dev developer-card2">
                <div className="border"></div></div>
              <p className="desc description3">Love Herper</p>
              <div className="dev developer-card3">
                <div className="border"></div>
              </div>
            </div>
          </section>

        </div>
    )
}
