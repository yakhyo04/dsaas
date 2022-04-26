import React, { useState } from 'react'
import classes from './SMM.module.scss';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    PageHeader,
    TimePicker
  } from 'antd';
import Silka from '../../assets/images/silka.svg';

  
function AddPage(props) {
  return (
    <div>
        <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Go Back"
      />
      <h1>Social {props.state}</h1>
      <Form
      labelCol={{ span: 12}}
      wrapperCol={{ span: 24 }}
      layout="vertical"
    //   className={classes.card__form}
      >
      <div className={classes.card__form}>
      <Form.Item label="Время:">
      <TimePicker/>
      </Form.Item>
      <Form.Item label="Локация:">
        <Input placeholder='T' />
      </Form.Item>
      <Form.Item label="Отметить:">
        <Input  placeholder='@' />
      </Form.Item>
      </div>
      <Form.Item label="Описание:">
        <Input.TextArea placeholder='Пост должен быть в стиле модерн, должны использоваться паттерны нашего брендбука в основном нужно будет описать кратко что такое IT и для чего используется.' />
      </Form.Item>
      <Form.Item >
        <Cascader 
            placeholder="Назначить"
          options={[
            {
              value: 'rol',
              label: 'rol',
              children: [
                {
                  value: 'user',
                  label: 'user',
                },
              ],
            },
            {
                value: 'rol2',
                label: 'rol2',
                children: [
                  {
                    value: 'user2',
                    label: 'user2',
                  },
                ],
              },
              {
                value: 'rol3',
                label: 'rol3',
                children: [
                  {
                    value: 'user3',
                    label: 'user3',
                  },
                ],
              },
          ]}
        />
      </Form.Item>
      <a href=""><img className={classes.card__img} src={Silka} alt="" /></a>

      <div className={classes.card__div}>
          <button className={classes.card__redbtn}>Отменить</button>
          <button className={classes.card__greenbtn}>Опубликовать</button>
      </div>
      </Form>
    </div>
  )
}

export default AddPage