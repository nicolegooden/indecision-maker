import React from 'react';

export const Movie = (props) => {
  return (
    <main>
      <h1 className='title'>{props.title}</h1>
      <img src={props.image_poster} alt={`poster for ${props.title}`}></img>
      <h3 className='brief-description'>{props.brief_description}</h3>
      <p className='release-date'>Released: {props.release_date}</p>
      <p className='runtime'>Runtime: {props.runtime} minutes</p>
      <p className='content-rating'>Content Rating: {props.content_rating}</p>
      <p className='imdb-rating'>Audience Rating: {Math.floor(props.imdb_rating)}</p>
    </main>
  )
}

//do we need movie_plot and brief_description? 
// the content seems different, but some of the movie plots are NULL, should we be 
// prioritizing brief description only?