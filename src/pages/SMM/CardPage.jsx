import React from 'react'
import classes from './SMM.module.scss';
import link from '../../assets/images/link.svg';
import pin from '../../assets/images/pin.svg';
import bz from '../../assets/images/bz.svg';
import nature from '../../assets/images/nature.png';
import {PageHeader} from 'antd'

function CardPage() {
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Go Back"
      />
    <div className={classes.card__page}>
        {/* <Card> */}
          <span className={classes.card__span}>Время: 14 : 00</span>
          <p className={classes.card__time}>Осталось: 23 : 59 : 59</p>
          <span className={classes.card__subtitle}>Описание:</span>
          <p className={classes.card__description}>
            Пост должен быть в стиле модерн, должны использоваться паттерны нашего брендбука в основном нужно будет описать кратко что такое IT и для чего используется.
          </p>
          <p className={classes.card__text}><span className={classes.card__subtitle}>Локация: </span>Ташкент</p>
          <p className={classes.card__text}><span className={classes.card__subtitle}>Отметка: </span>@ziyo_designs</p>
          <div className={classes.card__div}>
            <nav>
              <img src={link} alt="link" />
            </nav>
            <nav>
              <img src={bz} alt="bz" />
              <img src={pin} alt="pin" />
            </nav>
          </div>
          <br />
          <hr />
          <ul className={classes.card__list}>
              <li className={classes.card__item}>
                  <img src={nature} alt="" />
              </li>
              <li className={classes.card__item}>
                  <img src={nature} alt="" />
              </li>
              <li className={classes.card__item}>
                  <img src={nature} alt="" />
              </li>
          </ul>
        {/* </Card> */}
    </div>
    </>
  )
}

export default CardPage