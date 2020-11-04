import React from 'react';
import './ResultPage.scss';
import { CgUserlane } from "react-icons/cg";
import { RiHomeSmileLine } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const ResultPage = (props) => {
  console.log(props)
  const noImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
  const displayActivityGallery = () => {
    return props.data.map((activity, i) => {

    return (
      <div key={i}className="inner-all-rest">
        <div className="border">
          <FaLightbulb className="bulb-icon"/>
          <h3 className="title">{
               activity.song_title 
            || activity.title 
            || activity.podcast_title 
            || activity.podcast_name
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
              || "no information"
            }
            </h1>
            <h2 className="activity-title">{
                props.randomActivity.podcast_name
              || props.randomActivity.artist
              || props.randomActivity.materials
              || props.randomActivity.content_rating
              || "no information available"
            }
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
            <button className="button pick-activity">Choose me!</button>
            <button className="button skip-activity">Not sure!</button>
          </div>

          <div className="the-rest-container">

           {displayActivityGallery()}
          </div>

        </section>
    )
}
