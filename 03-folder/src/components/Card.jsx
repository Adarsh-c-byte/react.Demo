import React from 'react'

const Card = (props) => {
  return (
    
      <div className='Card'>
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Spiderman Spiderman tune churaya mere dill ka chain :) her :  Modi h to mumkin hai. me : aji ghanta mera. . </p>
      <button>view profile</button>
      </div>
   
  )
}

export default Card
