import React from 'react'
import './FoodItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const FoodItem = ({id,name,time,description,image}) => {
  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name">
                <p>{name}</p>
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className='food-item-time'><FontAwesomeIcon className="timer-icon" icon={faClock}/>{time} minutes</p>
        </div>
    </div>
  )
}

export default FoodItem
