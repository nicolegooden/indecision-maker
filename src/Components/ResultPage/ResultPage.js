import React from 'react';
import './ResultPage.scss';
import { CgUserlane } from "react-icons/cg";
import { RiHomeSmileLine } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ResultPage = (props) => {
  const noImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
  const activityGallery = 
    props.data.map((activity, i) => {
    return (
      <div key={i} className="inner-all-rest">
        <div className="border">
          <FaLightbulb className="bulb-icon"/>
          <h3 className="title">{
             activity.podcast_title 
            || activity.song_title 
            || activity.album_title 
            || activity.title 
            || activity.name
            || "no information"}
          </h3>
          <h3 className="title">{
               activity.podcast_name
            || activity.artist
            || activity.materials
            || "no information available"
            }
          </h3>
          <h3 className="title">{
               activity.release_date
            || activity.author
            || activity.materials
            || "no information available"
            }
          </h3>
          <h3 className="title">{
               activity.genre
            || activity.average_time
            || activity.number_of_players
            || activity.type
            || "no information available"
            }
          </h3>
        </div>
      </div>
    )
  })

    return (
        <section className="result-container">
            <Link to="/" className="home-logo">
              <RiHomeSmileLine className=" logo" />
            </Link>
          <div className="app-logo">
            <CgUserlane className="logo" />
          </div>
          {!props.error ? <h1 className="message">Finally, here is a suggestion for you!</h1> : 
          <h1 className="message">{props.error}</h1>}
          <div className="slider">
            <h1 className="activity-title">{
              !props.randomActivity ?  "no information":
              props.randomActivity.podcast_title
              || props.randomActivity.song_title
              || props.randomActivity.title 
              || props.randomActivity.name}
            </h1>
            <h2 className="activity-title">{
              !props.randomActivity ? "no information available" :
                props.randomActivity.podcast_name
              || props.randomActivity.artist
              || props.randomActivity.materials
              || props.randomActivity.content_rating}
            </h2>
           <h2 className="activity-title">{
                props.randomActivity.imdb_raiting
            }</h2>
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
           {!props.error && <Link 
             to={
               `/about/${props.randomActivity.song_title
              || props.randomActivity.title 
              || props.randomActivity.podcast_title 
              || props.randomActivity.name
              }/details`
              }>
             <button className="button pick-activity">Choose me!</button>
          </Link>}
            <button 
              onClick={props.determineRandomActivity}
              className="button skip-activity">{!props.error ? "skip" : "back"}</button>
          </div>
          <div className="the-rest-container">
           {activityGallery}
          </div>
          <div className="more-suggestions">
            <h5 className="simmilar-picks">Similar picks</h5>
          </div>
        </section>
    )
}

ResultPage.propTypes = {
  name: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  randomActivity: PropTypes.object,
  determineRandomActivity: PropTypes.func.isRequired,
  error: PropTypes.string
}