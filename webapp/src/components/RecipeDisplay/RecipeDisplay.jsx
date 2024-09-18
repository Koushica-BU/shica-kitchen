import React, { useContext } from 'react'
import './RecipeDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const RecipeDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food_display'>
        <h2> Recommended Dishes </h2>
        <div className='food-display-list'>
            {food_list.map((item,index)=>{
                if(category === "All" || category === item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} time={item.time} image={item.image}/>
                }
            })}
        </div>
    </div>
  )
}

export default RecipeDisplay
