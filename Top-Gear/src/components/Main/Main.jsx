import React from 'react'
import cls from './Main.module.css'
import VideoBlock from './VideBlock/VideoBlock'

const videoList = [
  {
    id: 1,
    imgSrc: './img/1554957261_snimok.png',
    description: 'Гранд Тур 3 сезон 14 серия "Похороны Форда"',
  },
  {
    id: 2,
    imgSrc: './img/1554366596_snimok.png',
    description: 'Гранд Тур 3 сезон 13 серия "Выживание толстяков"',
  },
  {
    id: 3,
    imgSrc: './img/1553766157_474442.jpg',
    description: 'Гранд Тур 3 сезон 12 серия "Легенды и ручная кладь"',
  },
  {
    id: 4,
    imgSrc: './img/1553144253_snimok.png',
    description: 'Гранд Тур 3 сезон 11 серия "От моря до несолёного моря"',
  },
  {
    id: 5,
    imgSrc: './img/1552540428_snimok.png',
    description: 'Гранд Тур 3 сезон 10 серия "Голос молодежи"',
  },
]

const videoList2 = [
  {
    id: 1,
    imgSrc: './img/1638040165_snimok.jpg',
    description: 'Топ Гир 31 сезон 2 серия',
  },
  {
    id: 2,
    imgSrc: './img/1638039501_snimok.jpg',
    description: 'Топ Гир 31 сезон 1 серия',
  },
  {
    id: 3,
    imgSrc: './img/1638181719_snimok.jpg',
    description: 'Топ Гир 31 сезон 3 серия',
  },
  {
    id: 4,
    imgSrc: './img/1638038604_snimok.jpg',
    description: 'Топ Гир 30 сезон 4 серия "A Tribute to Sabine Schmitz"',
  },
  {
    id: 5,
    imgSrc: './img/1638038059_snimok.jpg',
    description: 'Топ Гир 30 сезон 3 серия "Off Road"',
  },
]

const Main = () => {
  return (
    <main className={cls.main}>
      <div style={{ width: '100%' }}>
        <div className={cls.helloBlockContent}>
          <p>
            <strong>Гранд Тур</strong> – увлекательное автомобильное шоу,
            вызвавшее массу откликов и оваций. Его основатели Ричард, Джеймс и
            Джереми работали на BBC. После увольнения Мэя, рейтинги Топ Гир
            опустились до рекордных значений. «The Grand Tour» смотреть онлайн
            теперь можно бесплатно на просторах интернета, поскольку по условиям
            контракта они не имеют права показываться на телевидении 2 года.
          </p>

          <p>
            Дословно Grand Tour переводится как «большое путешествие». Это
            название основатели выбрали не просто так. Большая палатка, в
            которой они путешествуют по миру, является одновременно и студией.
            Там они проводят съемки, транслируя все на весь мир. Путешественники
            часто говорят, что теперь они стали действительно свободными, могут
            устраивать трансляции в режиме онлайн в любое время суток и менее
            зависимы от жестких рамок, которыми их ограничивала BBC.
          </p>
          <div className={cls.video}>
            <iframe
              title={'GrandTour'}
              src={'https://www.youtube.com/embed/XHPVzvDnjZw'}
              width={'480'}
              height={'300'}
            />
          </div>
          <p>
            Новейшие марки автомобилей, захватывающий полет от гонок, является
            экстазом для любого зрителя. Автошоу с таким размахом постоянно
            набирает более 2000 желающих лицезреть и наслаждаться процессом. В
            конце июля 2015 года вышло официальное объявление о том, что
            Хаммонд, Мэй и Кларксон наконец заключили долгосрочный контракт с
            Amazon Prime. Огромный бюджет в 250 миллионов долларов на первые 3
            сезона позволяет сделать представление такого размаха, которого не
            было ранее ни в одной из автошоу.
          </p>

          <p>
            Будут проводиться тест-драйвы, по результатам которого можно будет
            судить о текущем состоянии автомобилей и возможности их починки.
            Наши ведущие расскажут о новинках, научат любого автомобилиста
            разбираться в малейших тонкостях и ухаживать за своей машиной
            правильно. Программа выходит за все допустимые рамки и показывает
            своему зрителю то, чего он раньше не видел. Автошоу можно будет
            посмотреть из любого уголка планеты. Трансляция проходит в режиме
            стриминга, передачу можно увидеть и в любое время, на нашем сайте.
          </p>
        </div>
        <div>
          <VideoBlock
            title={'Последние серии Гранд Тур'}
            videoList={videoList}
          />
        </div>
        <div>
          <VideoBlock
            title={'Последние серии Топ Гир'}
            videoList={videoList2}
          />
        </div>
        
      </div>
      <div className={cls.emptyBlock}></div>
    </main>
  )
}

export default Main