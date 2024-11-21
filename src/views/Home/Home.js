import React from 'react'
import "./Home.css"

import FoodCard from '../../components/FoodCard/FoodCard'

function Home() {
  return (
    <div>
      <h1>Pratham Da Dhaba</h1>

      <div className="food-card-container">
        <FoodCard
          imgUrl="https://img.freepik.com/premium-photo/daikon-radish-mooli-stuffed-paratha-served-plate-with-butter-tomato-ketchup-colourful-wooden-background-selective-focus_466689-63042.jpg?ga=GA1.1.1731258435.1722595238&semt=ais_hybrid"
          title="Alu Paratha"
          description="Yummy"
          price={50}
        />

        <FoodCard
          imgUrl="https://img.freepik.com/free-photo/front-view-delicious-qutabs-with-different-seasonings-grey-space_140725-79294.jpg?ga=GA1.1.1731258435.1722595238&semt=ais_hybrid"
          title="Paneer Paratha"
          description="Yummy"
          price={50}
        />

        <FoodCard
          imgUrl="https://img.freepik.com/premium-photo/palak-paratha-is-delicious-healthy-tasty-indian-flatbread-made-from-mildly-spiced-whole-wheat-flour-spinach_466689-16016.jpg?ga=GA1.1.1731258435.1722595238&semt=ais_hybrid"
          title="Methi Paratha"
          description="Yummy"
          price={50}
        />

        <FoodCard
          imgUrl="https://img.freepik.com/premium-photo/stuffed-paneer-paratha-with-melting-butter-served-with-fresh-cottage-cheese-cubes-tomato-ketchup-selective-focus_466689-55673.jpg?ga=GA1.1.1731258435.1722595238&semt=ais_hybrid"
          title="Gobhi Paratha"
          description="Yummy"
          price={50}
        />

      </div>
    </div>
  )
}

export default Home
