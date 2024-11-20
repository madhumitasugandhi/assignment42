import React from 'react'
import "./Accessories.css"

function Accessories({ imgUrl, title, description }) {
  return (
    <div className='Accessories-card'>
      <img 
      src={imgUrl} className='img'></img>
        <h1 className='Accessories-card-title'>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Accessories