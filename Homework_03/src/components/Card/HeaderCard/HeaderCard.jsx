import React from 'react'
import classes from './HeaderCard.module.css'


const HeaderCard = () => {
  return (
    <div className={classes.headerCard}>
      <img className={classes.photo} alt='img' src={'./images/padraic_avatar.png'} />
    </div>
  )
}

export default HeaderCard
