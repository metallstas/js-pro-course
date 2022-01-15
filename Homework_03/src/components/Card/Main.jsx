import React from 'react'
import classes from './Main.module.css'
import Navigation from './Navigation/Navigation'
import IdInfo from './IdInfo/IdInfo'
import HeaderCard from './HeaderCard/HeaderCard'
import MainSection from './MainSection/MainSection'

const Main = () => {
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

export default Main
