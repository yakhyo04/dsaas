import React from 'react'
import logo from '../../assets/images/logo.png';
import classes from './Loading.module.scss';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className={classes.loading}>
      <img className={classes.loading__img} src={logo} alt="logo" />
      <ReactLoading type={'spin'} color='#1890ff' height={'25px'} width={'25px'} />
    </div>
  )
}

export default Loading