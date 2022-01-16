import React from 'react'
import cls from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div>
        <ul>
          <li><a href='/#'>Главная</a></li>
          <li><a href='/#'>Гранд Тур</a></li>
          <li><a href='/#'>1 сезон</a></li>
          <li><a href='/#'>2 сезон</a></li>
          <li><a href='/#'>3 сезон</a></li>
          <li><a href='/#'>4 сезон</a></li>
          <li><a href='/#'>Топ Гир</a></li>
          <li><a href='/#'>31 сезон</a></li>
        </ul>
      </div>
      <div className={cls.text}>
        На данном сайте представлены исключительно ссылки на другие ресурсы. Если Вы являетесь обладателем исключительных прав на какой-либо материал, ссылка/ссылки на который находятся на данном сайте, и не желаете, чтобы эта информация была распространена без Вашего согласия, мы с удовольствием окажем Вам содействие и уберем соответствующие ссылки с сайта. Для этого напишите нам на почту: mastheadmust@gmail.com. 
      </div>
      <div className={cls.social}>
        <a href={'https://vk.com'}><img alt='vk' src={'./img/vk.png'}/></a>
        <a href={'https://facebook.com'}><img alt='facebook' src={'./img/facebook.png'}/></a>
        <a href={'https://twitter.com'}><img alt='twitter' src={'./img/twitter.png'}/></a>
        <a href={'https://ok.ru'}><img alt='ok' src={'./img/ok.png'}/></a>
      </div>
      <p>GrandTour © Copyright 2021</p>
      <div className={cls.liveinternet}>
        <a href='https://www.liveinternet.ru/?grandtour.tv'>
          <img alt='img' src={'./img/hit.gif'} />
        </a>
      </div>
      <a href='/#' className={cls.footerUp}>&#160;</a>
    </footer>
  );
};

export default Footer
