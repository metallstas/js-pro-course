import React from 'react'
import cls from './SideBarItem.module.css'

const SideBarItem = ({ list }) => {

  return (
    <ul className={cls.item}>
      {list.map(el => <li key={el}>{el}</li>)}
    </ul>
  )
}

export default SideBarItem;