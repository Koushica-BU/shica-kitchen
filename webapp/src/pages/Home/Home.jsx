import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import RecipeDisplay from '../../components/RecipeDisplay/RecipeDisplay'


const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <RecipeDisplay category={category} />
    </div>
  )
}

export default Home
