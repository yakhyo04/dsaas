import React from 'react'
import link from '../../assets/images/link.svg';
import pin from '../../assets/images/pin.svg';
import { Card, Col } from 'antd';
import classes from './SMM.module.scss';
import bz from '../../assets/images/bz.svg';
import { Link } from 'react-router-dom';
import CardPage from './CardPage';

function CardList() {
  return (
    // <div className={classes.card}>
      <Col className={classes.card__col} span={11}>
        <Link to={"/smm/cardpage"}>
        <Card>
          <span className={classes.card__span}>Время: 14 : 00</span>
          <p className={classes.card__time}>Осталось: 23 : 59 : 59</p>
          <span className={classes.card__subtitle}>Описание:</span>
          <p className={classes.card__desc}>
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
        </Card>
      </Link>
      </Col>
    // </div>
  )
}

export default CardList