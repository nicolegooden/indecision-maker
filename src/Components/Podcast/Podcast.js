import React from 'react';

export const Podcast = (props) => {
  return (
  <main>
    <h1 className='podcast-title'>{props.podcast_title}</h1>
    <h2 className='author'>{props.author}</h2>
    <h3 className='genre'>{props.genre}</h3>
    <img className='image' src={props.image_60} alt={`poster for ${props.podcast_title}`}></img>
    <p className='release-date'>{props.release_date}</p>
    <p className='episode-count'>{props.episode_count} episodes</p>
    <p className='collection-url'>For more from {props.author}: {props.collection_url}</p>
  </main>
  )
}