import React from 'react'
import './Homepage.scss'
import { ActivityCards }  from '../ActivityCards/ActivityCards'
import { CgUserlane } from "react-icons/cg";
import { Link } from 'react-router-dom';



export const Homepage = (props) => {

    return (
        <div className='homepage-container'>

          <div className="homepage-inner-container">

            <div className="app-logo">
              <CgUserlane className="logo"/>
            </div>

            <nav className="nav-bar">
              <ul className="nav-links">
              <Link
                  id="About"
                  className="link"
                  to="/about">
                <li 
                  id="About"
                  name="About"
                  >About</li>
              </Link>
              <Link
                  id="movies"
                  name="movies"
                  className="link"
                  onClick={props.getActivityData}
                  to="/movies">
                <li 
                  id="movies"
                  name="movies"
                  >Movies</li>
              </Link>
              <Link
                  id="music"
                  className="link"
                  onClick={props.getActivityData}
                  to="/music">
                  <li
                    id="music"
                    name="music"
                    >Music</li>
              </Link>
                
              <Link
                  id="cardGames"
                  className="link"
                  onClick={props.getActivityData}
                  to="/cardGames">
                <li 
                  id="cardGames"
                  name="cardGames"
                >Card Games</li>
              </Link>

              <Link
                  id="podcasts"
                  className="link"
                  onClick={props.getActivityData}
                  to="/podcasts">
                <li 
                  id="podcasts"
                  name="podcasts"
                  >Podcasts</li>
              </Link>

              <Link
                  id="boardGames"
                  className="link"
                  onClick={props.getActivityData}
                  to="/boardGames">
                <li
                  id="boardGames"
                  name="boardGames"
                  >Board Games</li>
              </Link>
                
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
            <p className="desc description3">Love Harper</p>
              <div className=" dev developer-card1">
                <div className="border"></div>
              </div>
              <p className="desc description2">Your regular Florida man</p>
              <div className="dev developer-card2">
                <div className="border"></div></div>
                <p className="desc description1">Love the outdoors</p>
              
              <div className="dev developer-card3">
                <div className="border"></div>
              </div>
            </div>
          </section>

        </div>
    )
}
