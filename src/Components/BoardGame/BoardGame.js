import React from 'react';

export const BoardGame = (props) => {
  return (
    <main>
      <h1 className='name'>{props.name}</h1>
      <h2 className='description'>{props.description}</h2>
      <p className='player-count'>Players: {props.min_players} - {props.max_players}</p>
      <p className='average-time'>Estimated Time: {props.average_time} minutes</p>
      <img className='image' src={props.image} alt={`poster for ${props.name}`}></img>
    </main>
  )
}