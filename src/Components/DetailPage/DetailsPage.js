import React from 'react'
import './DetailsPage.scss'
import { CgUserlane } from "react-icons/cg";
import { RiHomeSmileLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import moment from 'moment';
import PropTypes from 'prop-types';

export const DetailsPage = (props) => {
  const noImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
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
            <h1 className="">{
               props.randomActivity.song_title 
            || props.randomActivity.title 
            || props.randomActivity.podcast_title 
            || props.randomActivity.podcast_name
            || props.randomActivity.name
            || "more info soon..."}</h1>
          </div>
          <div className="info activity-information">
            <div className="image-container">
              {props.randomActivity.image_poster 
              || props.randomActivity.image_100 || 
              props.randomActivity.image ? 
              <img 
              src={props.randomActivity.image_poster 
                  || props.randomActivity.image_100 
                  || props.randomActivity.image 
                  || noImage
                  } alt={
                    props.randomActivity.description
                  }/> :
            <div className="image-container" >
              <ReactPlayer
                alt="movie trailer"
                controls={true}
                width={350}
                height={250}
                url={props.randomActivity.video}
              />
            </div>}
            </div>
            <p className="content">{
               props.randomActivity.podcast_name
            || props.randomActivity.artist
            || props.randomActivity.title 
            || "More information coming soon"
            }</p>
            {props.randomActivity.episode_count && <p className="content">{props.randomActivity.episode_count } episodes</p>}
            {props.randomActivity.average_time && <h4 className="title">Average play time:</h4>}
            {props.randomActivity.average_time && <p className="content">{props.randomActivity.average_time} mins</p>}
            {props.randomActivity.materials && <h4 className="title">Materials</h4>}
            {props.randomActivity.materials && <p className="content">{props.randomActivity.materials}</p>}
            {props.randomActivity.imdb_rating && <h4 className="title">Imdb Raiting</h4>}
            {props.randomActivity.imdb_rating && <p className="content">{props.randomActivity.imdb_rating || 0}</p>}
            {props.randomActivity.content_rating&& <h4 className="title">Content</h4>}
            {props.randomActivity.content_rating && <p className="content">{props.randomActivity.content_rating|| 0}</p>}
            {props.randomActivity.album_url && <a className="content" href={props.randomActivity.album_url}>Listen Here!</a>}
            {props.randomActivity.author && <h4 className="title">Author</h4>}
            {props.randomActivity.author && <p >{props.randomActivity.author}</p>}
          </div>
          <div className="info activity-more-info">
            <h1 className="">Activity Details</h1>
            {props.randomActivity.brief_description && <p className="content">{props.randomActivity.brief_description || props.randomActivity.brief_description}</p>}
            {props.randomActivity.description && <p className="content">{props.randomActivity.description}</p>}
            {props.randomActivity.artist && <h3 className="title">Artist</h3>}
            {props.randomActivity.artist  && <p className="content">{props.randomActivity.artist}</p>}
            {props.randomActivity.podcast_name && <h3 className="title">Podcast</h3>}
            {props.randomActivity.podcast_name  && <p className="content">{props.randomActivity.podcast_name}</p>}
          </div>
          <div className="info activity-more-more-info">
            {props.randomActivity.instructions &&<h1 className="">Instructions</h1>}
            {props.randomActivity.instructions && <p className="content">{props.randomActivity.instructions }</p>}
            {props.randomActivity.type && <h3 className="title">Type</h3>}
            {props.randomActivity.type && <p className="content">{props.randomActivity.type === 'notExplicit' ? 'clean' : 'explicit'}</p>}
            {props.randomActivity.album_title && <h3 className="title">Album</h3>}
            {props.randomActivity.album_title  && <p className="content">{props.randomActivity.album_title}</p>}
          </div>
          <div className="info activity-more-more-more-info">
            {props.randomActivity.genre && <h3 className="title">Genre</h3>}
            {props.randomActivity.genre  && <p className="content">{props.randomActivity.genre}</p>}
            {props.randomActivity.release_date && <h3 className="title">Release Date</h3>}
            {props.randomActivity.release_date  && <p className="content">{moment(props.randomActivity.release_date).format('LL')}</p>}   
          </div>
          <div className="info enjoy-it">
            <h1 className="">Enjoy it!</h1>
          </div>
        </div>
    )
}

DetailsPage.propTypes = {
  name: PropTypes.object.isRequired,
  randomActivity: PropTypes.object.isRequired
}
