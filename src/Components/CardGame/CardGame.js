import React from 'react';

export const CardGame = (props) => {
  return (
    <main>
      <h1 className='name'>{props.name}</h1>
      <h2 className='description'>What is this game? <br/> {props.description}</h2>
      <p className='number_of_players'>Players: {props.number_of_players}</p>
      <p className='materials'>You need: {props.materials}</p>
      <p className='instructions'>{props.instructions}</p>
    </main>
  )
}

//add video with React Player for each card - URL exists as props.video