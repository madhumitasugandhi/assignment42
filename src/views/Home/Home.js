import React from 'react'
import "./Home.css"
import  Navbar from "../../components/Navbar/Navbar"
import FoodCard from '../../components/FoodCard/FoodCard'
import Footer from '../../components/Footer/Footer'
import { PRODUCTS, MAIN_TITLE, THEME} from '../../config/data'


function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className="main-title" style={{color:THEME.highlight

      }}>{MAIN_TITLE}</h1>

      <div className="food-card-container">
        {PRODUCTS.map((foodItem) => {

          return <FoodCard
            imgUrl={foodItem.imgUrl}
            title={foodItem.title}
            description={foodItem.description}
            price={foodItem.price}
          />
        })}
  <Footer/>
      </div>
     
    </div>
    
  )
}

export default Home
