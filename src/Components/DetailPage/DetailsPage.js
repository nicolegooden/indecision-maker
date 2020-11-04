import React from 'react'
import './DetailsPage.scss'
import { CgUserlane } from "react-icons/cg";
import { RiHomeSmileLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const DetailsPage = (props) => {
    

    return (
        <div className="details-container">
          <div className="bar-menu">
            <CgUserlane className="logo"/>
            <h1 className="details-title">All you need to know.</h1>
            <Link to='/'>
              <RiHomeSmileLine className="logo"/>
            </Link>
          </div>

          <div className="info activity-title">
            
            <h1 className="">information goes here</h1>
          </div>

          <div className="info activity-information">
            <div className="image-container">
              <img src="https://images.unsplash.com/photo-1533618821901-9e69d5f5360e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <p className="content">Here is a lot of the content, just in case you were wondering</p>
          </div>

          <div className="info activity-more-info">
            <h1 className="">information goes here</h1>
            <p className="content">Here is a lot of the content, just in case you were wondering</p>
          </div>

          <div className="info activity-more-more-info">
            <h1 className="">information goes here</h1>
            <p className="content">Here is a lot of the content, just in case you were wondering</p>
          </div>

          <div className="info activity-more-more-more-info">
            <h1 className="">information goes here</h1>
            <p className="content">Here is a lot of the content, just in case you were wondering</p>
          </div>

          <div className="info enjoy-it">
            <h1 className="">Enjoy it!</h1>

          </div>

        </div>
    )
}
