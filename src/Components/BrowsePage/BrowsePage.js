import React from 'react'
import './BrowsePage.scss'
import { CgUserlane } from "react-icons/cg";
import { RiHomeSmileLine } from "react-icons/ri";

export const BrowsePage = (props) => {

  return (
    <section className="movies-section">
        <div className="bar-menu">
          <CgUserlane className="logo"/>
          <RiHomeSmileLine className="logo"/>
        </div>

        <body className="grid-container">
            <ul className="inner-grid">
                <li className="hexa">
                  <div class="inner-hexagon"></div>
                </li>
                
                <li className="hexa">
                  <div class="inner-hexagon"></div>
                </li>
                <li className="hexa">
                  <div class="inner-hexagon"></div>
                </li>
                <li className="hexa">
                  <div class="inner-hexagon"></div>
                </li>
                <li className="hexa">
                  <div class="inner-hexagon"></div>
                </li>
                <li className="hexa">
                  <div class="inner-hexagon"></div>
                </li>
                <li className="hexa">
                  <div class="inner-hexagon"></div>
                </li>
                <li className="hexa">
                  <div class="inner-hexagon"></div>
                </li>
                <li className="hexa">
                  <div class="inner-hexagon"></div>
                </li>
                <li className="hexa">
                  <div class="inner-hexagon"></div>
                </li>
                <li className="hexa">
                  <div class="inner-hexagon"></div>
                </li>
                <li className="hexa">
                  <div class="inner-hexagon"></div>
                </li>

            </ul>
        </body>

    </section>

  )
}
