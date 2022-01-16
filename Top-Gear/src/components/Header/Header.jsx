import React from 'react'
import cls from './Header.module.css'

const Header = () => {
  return (
    <header className={cls.header}>
      <img alt='logo' src='./img/logo.png' />
      <form className={cls.form}>
        <input type={'text'} placeholder='Найти...' />
        <button></button>
      </form>
      <ul className={cls.navigation}>
        <li><img alt='main' src='./img/main.png'/>Главная</li>
        <li><img alt='tv' src='./img/tv.png'/>Все выпуски Гранд Тур</li>
        <li><img alt='list' src='./img/list.png'/>Сезоны</li>
        <li><img alt='earth' src='./img/earth.png'/>Спец выпуски Гранд Тур</li>
        <li><img alt='tv' src='./img/tv.png'/>Все выпуски Топ Гир</li>
        <li><img alt='list' src='./img/list/png'/>Сезоны</li>
        <li><img alt='earth' src='./img/earth.png'/>Спец выпуски Топ Гир</li>
      </ul>
    </header>
  )
}

export default Header
