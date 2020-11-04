import React from 'react';
import './ResultPage.scss';
import { CgUserlane } from "react-icons/cg";
import { RiHomeSmileLine } from "react-icons/ri";
import { GoLightBulb } from "react-icons/go";
import { Link } from 'react-router-dom';
export const ResultPage = (props) => {
  console.log(props)
  const noImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
  const displayActivityGallery = () => {
    return props.data.map(activity => {
    console.log()
    return (
      <div className="inner-all-rest">
        <div className="border">
          <GoLightBulb className="bulb-icon"/>
          <h3 className="title">{
               activity.song_title 
            || activity.title 
            || activity.podcast_title 
            || activity.name
            || "no information"}
          </h3>
          <h3 className="title">more information</h3>
          <h3 className="title">more information</h3>
          <h3 className="title">more information</h3>
        </div>
      </div>
    )
  })
}

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

            <h1 className="activity-title">{
                   props.randomActivity.song_title 
                || props.randomActivity.title 
                || props.randomActivity.podcast_title 
                || props.randomActivity.name
                || "no information"}

              </h1>
            <div className="slides">
            
                <div className="slide" id="slide-1">
                    <img className="image" 
                        src={props.randomActivity.image_poster 
                        || props.randomActivity.image_100 
                        || props.randomActivity.image 
                        || noImage} 
                        alt=""/>
                </div>
            </div>

          </div>
            
          <div className="activity-controls">
            <button className="button pick-activity">Choose me!</button>
            <button className="button skip-activity">Not sure!</button>
          </div>

          <div className="the-rest-container">
           {displayActivityGallery()}
          </div>

        </section>
    )
}
