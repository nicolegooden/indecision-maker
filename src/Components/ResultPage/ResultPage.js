import React from 'react';
import './ResultPage.scss';
import { CgUserlane } from "react-icons/cg";
import { RiHomeSmileLine } from "react-icons/ri";
import { GoLightBulb } from "react-icons/go";
import { Link } from 'react-router-dom';
export const ResultPage = () => {
    return (
        <section className="result-container">
            <Link to="/" className="home-logo">
              <RiHomeSmileLine className=" logo" />
            </Link>
          <div className="app-logo">
            <CgUserlane className="logo" />
          </div>

          <h1 className="message">Finally, here is a suggestion for you!</h1>

          <div className="slider">
            <a className="slide-link" href="#slide-1">1</a>
            <a className="slide-link" href="#slide-2">2</a>
          

            <div className="slides">
            
                <div className="slide" id="slide-1">
                    <img className="image" src="https://images.unsplash.com/photo-1520156557489-31c63271fcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>

                <div className="slide" id="slide-2">
                    <img className="image" src="https://images.unsplash.com/photo-1520156557489-31c63271fcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>

            </div>

          </div>
            
          <div className="activity-controls">
            <button className="button pick-activity">Choose me!</button>
            <button className="button skip-activity">Not sure!</button>
          </div>

          <div className="the-rest-container">
            <div className="inner-all-rest">
              <div className="border">
                <GoLightBulb className="bulb-icon"/>
                <h3 className="title">activity name</h3>
                <h3 className="title">more information</h3>
                <h3 className="title">more information</h3>
                <h3 className="title">more information</h3>
              </div>
            </div>
            <div className="inner-all-rest">
              <div className="border">
                <GoLightBulb className="bulb-icon"/>
                <h3 className="title">activity name</h3>
                <h3 className="title">more information</h3>
                <h3 className="title">more information</h3>
                <h3 className="title">more information</h3>
              </div>
            </div>
            <div className="inner-all-rest">
              <div className="border">
                <GoLightBulb className="bulb-icon"/>
                <h3 className="title">activity name</h3>
                <h3 className="title">more information</h3>
                <h3 className="title">more information</h3>
                <h3 className="title">more information</h3>
              </div>
            </div>
            <div className="inner-all-rest">
              <div className="border">
              <GoLightBulb className="bulb-icon"/>
                <h3 className="title">activity name</h3>
                <h3 className="title">more information</h3>
                <h3 className="title">more information</h3>
                <h3 className="title">more information</h3>
              </div>
            </div>
            <div className="inner-all-rest">
              <div className="border">
              <GoLightBulb className="bulb-icon"/>
                <h3 className="title">activity name</h3>
                <h3 className="title">more information</h3>
                <h3 className="title">more information</h3>
                <h3 className="title">more information</h3>
              </div>
            </div>
            <div className="inner-all-rest">
              <div className="border">
                <GoLightBulb className="bulb-icon"/>
                <h3 className="title">activity name</h3>
                <h3 className="title">more information</h3>
                <h3 className="title">more information</h3>
                <h3 className="title">more information</h3>
              </div>
            </div>
          </div>

        </section>
    )
}
