import React from 'react'
import './DetailsPage.scss'
import { CgUserlane } from "react-icons/cg";
import { RiHomeSmileLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const DetailsPage = (props) => {
  const noImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
  console.log(props)
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
            <h1 className="title">Activity Title</h1>
            <h1 className="">{
               props.randomActivity.song_title 
            || props.randomActivity.title 
            || props.randomActivity.podcast_title 
            || props.randomActivity.podcast_name
            || props.randomActivity.name
            || "no information"}</h1>
          </div>

          <div className="info activity-information">
            <div className="image-container">
              <img 
              src={props.randomActivity.image_poster 
                  || props.randomActivity.image_100 
                  || props.randomActivity.image 
                  || noImage
                  } alt=""/>
            </div>

            <p className="content">{
               props.randomActivity.podcast_name
            || props.randomActivity.artist
            || props.randomActivity.title 
            || "no information available"
            }</p>

            
            {props.randomActivity.episode_count && <p className="content">{props.randomActivity.episode_count } episodes</p>}
            
            {props.randomActivity.average_time && <h4 className="title">Average play time</h4>}
            {props.randomActivity.average_time && <p className="content">{props.randomActivity.average_time}</p>}

            {props.randomActivity.imdb_rating && <h4 className="title">Imdb Raiting</h4>}
            {props.randomActivity.imdb_rating && <p className="content">{props.randomActivity.imdb_rating || 0}</p>}

            {props.randomActivity.content_rating&& <h4 className="title">Content</h4>}
            {props.randomActivity.content_rating && <p className="content">{props.randomActivity.content_rating|| 0}</p>}

            {props.randomActivity.album_url && <h4 className="title">Listen here</h4>}
            {props.randomActivity.album_url && <a className="content" href="props.randomActivity.album_url "> Click Here</a>}

            {props.randomActivity.author && <h4 className="title">Author</h4>}
            {props.randomActivity.author && <p >{props.randomActivity.author}</p>}
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
