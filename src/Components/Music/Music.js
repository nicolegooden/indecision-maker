import React from 'react';
import { Link } from 'react-router-dom';

export const Music = (props) => {
  return (
  <main>
    <h1 className='song-title'>{props.song_title}</h1>
    <h2 className='artist'>By {props.artist}</h2>
    <Link to={props.album_url}><h3 className='album-title'>{props.album_title}</h3></Link>
    <p className='genre'>{props.genre}</p>
    <p className='release-date'>{props.release_date}</p>
    <img className='image' src={props.image_60} alt={`poster for ${props.song_title}`}></img>
  </main>
  )
}