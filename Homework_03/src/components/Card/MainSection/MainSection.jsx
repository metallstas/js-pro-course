import React from 'react'
import MainList from './MainList/MainList'
import SideBar from './SideBar/SideBar'
import classes from './MainSection.module.css'

const MainSection = () => {
  return (
    <div className={classes.main}>
      <MainList />
      <SideBar />
    </div>
  )
}

export default MainSection
