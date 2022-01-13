import React from 'react'
import img from '../../../img/padraic_avatar.png'
import classes from './HeaderCard.module.css'


const HeaderCard = () => {
  return (
    <div className={classes.headerCard}>
      <img className={classes.photo} alt='img' src={img} />
    </div>
  )
}

export default HeaderCard
