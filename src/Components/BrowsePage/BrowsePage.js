import React from 'react'
import './BrowsePage.scss'
import { CgUserlane } from "react-icons/cg";
import { RiHomeSmileLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const BrowsePage = (props) => {
    console.log(props)
    const injectActivityInformation = () => {
        return props.movies.map(e => {
            return (
                <li className="hexa">
                    <div className="inner-hexagon">
                    <img className="hexa-image" src={e.image_poster} alt=""/>
                    </div>
                </li>
          )
        })
    }

  return (
    <section className="movies-section">
        <div className="bar-menu">
          <CgUserlane className="logo"/>
          
          <Link to='/'>
            <RiHomeSmileLine className="logo"/>
          </Link>
        </div>
        
        <div className="title-container">
            <h1 className="title">Activitities</h1>
        </div>
        
        <body className="grid-container">
            <ul className="inner-grid">
                {injectActivityInformation()}
            </ul>
        </body>

    </section>

  )
}
