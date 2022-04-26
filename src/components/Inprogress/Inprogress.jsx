import React from 'react'
import razrabotka_ds from '../../assets/images/razrabotka_ds.png';
import classes from './InProgress.module.scss';

const Inprogress = () => {
  return (
    <div className={classes.inprogress__container}>
      <img className={classes.inprogress__image} src={razrabotka_ds} alt="razrabotka_ds" />
      <h3 className={classes.inprogress__title}>Этот раздел находится в разработке</h3>
    </div>
  )
}

export default Inprogress