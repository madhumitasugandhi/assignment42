import React from 'react'
import "./Home.css"
import Accessories from '../../components/AccessorieCard/Accessories'

function Home({imgUrl,title,description}) {
  return (
    <div>
        <h1 className='Home-title'>Sai Car Decore 🚘</h1>
        <div className='Accessories-cards-container'>
        <Accessories 
        imgUrl="https://images.moneycontrol.com/static-mcnews/2022/11/imageresizer-666x435.png?impolicy=website&width=770&height=431"
         title="Force motor" 
         description=" Cruiser, Toofan all types of fancy work"/>

         <Accessories 
         title="Maruti Sizuki" 
         description=" Cruiser, Toofan all types of fancy work"/>

         <Accessories 
         title="Mahindra" 
         description=" Cruiser, Toofan all types of fancy work"/>
         
         <Accessories 
         title="Mahindra" 
         description=" Cruiser, Toofan all types of fancy work"/>
         </div>
    </div>
  )
}

export default Home