import React from 'react'
import MainListItem from './MainListItem/MainListItem'
import cls from './MainList.module.css'

const listInfo = [
  {
    src: 'images/bg-pouch.png',
    title: 'На счету: 0,00 р.',
    text: 'Внимание! Не для оплаты товаров в Каталоге. Пополняйте счет Onlíner и продвигайте ваши объявления.',
    linkText: 'Пополнить счет',
    id: 1,
  },
  {
    src: 'images/bg-binding.png',
    title: 'Добавьте банковскую карту',
    text: 'Привязанная банковская карта позволит вам моментально пополнить баланс без постоянного ввода данных.',
    linkText: 'Привязать карту',
    id: 2,
  },
  {
    src: 'images/bg-protection.png',
    title: 'Защитите свой профиль',
    text: 'Включите двухэтапную проверку, это поможет защитить вас от кражи профиля. Мы будем дополнительно отправлять вам SMS с кодом подтверждения для входа.',
    linkText: 'Включить двухэтапную проверку',
    id: 3,
  },
]

const MainList = () => {
  return (
    <div className={cls.MainList}>
      {listInfo.map((el) => (
        <MainListItem
          key={el.id}
          src={el.src}
          title={el.title}
          text={el.text}
          linkText={el.linkText}
        />
      ))}
    </div>
  )
}

export default MainList
