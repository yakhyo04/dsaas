import React from 'react'
// import Inprogress from '../../components/InProgress/InProgress'
import Inprogress from '../../components/Inprogress';
import classes from './SEM.module.scss';

const SEM = () => {
  return (
    <div className={classes.wrapper}>
        <Inprogress/>
    </div>
  )
}

export default SEM