import React from 'react'
import cls from './Navigation.module.css'

const menuItem = [
  'Главная',
  'Карта «Onliner Клевер»',
  'Личные данные',
  'Способы оплаты',
  'Безопстность',
  'Подписки',
]

const Navigation = () => {
  return (
    <div>
      <ul className={cls.Navigation}>
        {menuItem.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  )
}

export default Navigation
