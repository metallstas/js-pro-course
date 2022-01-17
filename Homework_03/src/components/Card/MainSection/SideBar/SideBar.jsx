import React from 'react'
import SideBarItem from './SideBarItem/SideBarItem'
import cls from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={cls.SideBar}>
      <SideBarItem
        list={[
          'Закладки', 
          'Темы на Форуме', 
          'Сообщения на Форуме и Барахолке'
        ]}
      />
      <SideBarItem 
        list={[
          'История заказов', 
          'Отзывы на магазины'
        ]} 
      />
      <SideBarItem
        list={[
          'Объявления в Барахолке',
          'Объявления в Каталоге',
          'Автообъявления',
          'Мотообъявления',
          'Oбъявления об Аренде квартир',
          'Oбъявления о Продаже квартир',
          'Заказы на сервисе «Услуги»',
          'Поиск пользователя',
        ]}
      />
    </div>
  )
}

export default SideBar
