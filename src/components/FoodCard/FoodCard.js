import React from 'react'
import "./FoodCard.css"

function FoodCard({ imgUrl, title, description, price }) {

  return (
    <div className="food-card">
      <img
        src={imgUrl}
        className="food-card-image"
        alt="Food" />
      <h1 className="food-card-title">
        {title}
      </h1>
      <p>{description}</p>

      {
        price ?

          <p className="food-card-price">
            ₹{price}
          </p>
          : null
      }
    </div>
  )
}

export default FoodCard
