import React from 'react'
import "./FoodCard.css"
import { THEME } from '../../config/data'

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
            ₹ {price}
          </p>
          : "Not available."
      }
      <button className="food-card-btn">
        Add to cart
      </button>
    </div>
  )
}

export default FoodCard
