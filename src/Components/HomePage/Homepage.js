import React from 'react'
import './Homepage.scss'
import { ActivityCards }  from '../ActivityCards/ActivityCards'
import { CgUserlane } from "react-icons/cg";
import { FaServer, FaGithub} from "react-icons/fa";
import { Link } from 'react-router-dom';

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
            </ul>
          </nav>

          <div className="homepage-inner-container">
            <h1 className="app-title1">Indecision</h1>
            <h1 className="app-title2">maker</h1>
            <p className="intro">Thus, our indecision may lie in our fears and doubts about the outcomes of our decisions or about the process of decision-making: </p>
            <Link to='/form'><button className="find-activitty">find activity</button></Link>
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

          <footer className="social-section">
            <ul className="footer-links">
              <li className="foot-link"><a target="_blank" href="https://github.com/Atos20/indecision-maker-server"><FaServer className="repo-link"/></a></li>
              <li className="foot-link"><a target="_blank" href="https://github.com/nicolegooden/indecision-maker"><FaGithub className="repo-link"/></a></li>
            </ul>
            <p className="copy-rights">Ⓒ Indecision Maker is a product of Nicole, Blake and Orlando's Inc.</p>
          </footer>
        </div>
    )
}
