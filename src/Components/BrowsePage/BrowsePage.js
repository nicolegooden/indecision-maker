import React from 'react'
import './BrowsePage.scss'
import { CgUserlane } from "react-icons/cg";
import { RiHomeSmileLine } from "react-icons/ri";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const BrowsePage = (props) => {
    const activityInformation =
        props.data.map((e, i) => {
            return (
                <li key ={i}className="hexa">
                    <div className="inner-hexagon">
                        {(e.image_poster || e.image_100 || e.image) && <img className="hexa-image" 
                        src={e.image_poster || e.image_100 || e.image}
                        alt={e.song_title || e.podcast_title || e.name}
                        />}
                    {e.name && <h1 className={e.name.length  < 20 ? "title" : "large-title"}>{e.name }</h1>}
                    {e.instructions && <h1 className='title-copy'>{e.name }</h1>}
                    {e.podcast_title && <h1 className={e.podcast_title.length  < 20 ? "title": "large-title"}>{e.podcast_title }</h1>}
                    {e.song_title && <h1 className={e.song_title.length  < 20 ? "title" : "large-title"}>{e.song_title }</h1>}
                    {e.title && <h1 className={e.title.length  < 20 ? "title" : "large-title"}>{e.title }</h1>}
                    </div>
                </li>
          )
        })
    
  return (
    <section className="movies-section">
        <div className="bar-menu">
          <CgUserlane className="logo"/>
          <Link to='/'>
            <RiHomeSmileLine className="logo"/>
          </Link>
        </div>
        <div className="title-container">
            <h1 className="title">{props.name}</h1>
        </div>
        <article className="grid-container">
            <ul className="inner-grid">
                {activityInformation}
            </ul>
        </article>
    </section>
  )
}

BrowsePage.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}
