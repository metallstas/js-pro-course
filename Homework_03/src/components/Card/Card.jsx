import React from 'react'
import classes from './Card.module.css'
import Navigation from './Navigation/Navigation'
import IdInfo from './IdInfo/IdInfo'
import HeaderCard from './HeaderCard/HeaderCard'
import MainSection from './MainSection/MainSection'

const Card = () => {
  return (
    <div className={classes.wrapper}>
      <HeaderCard />
      <div>
        <IdInfo />
        <Navigation />
        <MainSection />
      </div>
    </div>
  )
}

export default Card
