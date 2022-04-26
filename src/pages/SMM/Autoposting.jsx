import React, { useState } from 'react'
import classes from './SMM.module.scss'; 
import { Select } from 'antd';
import { Card, Col, Row } from 'antd';
import add from '../../assets/images/add.svg';
import CardList from './CardList';
import Inprogress from '../../components/Inprogress';
import { Link } from 'react-router-dom';
import AddPage from './AddPage';

const { Option } = Select;

function Autoposting() {

    const [social, setSocial] = useState(true)
    const [state, setState] = useState()

    function handleChange(value){
      setState(value)
      if(value == "Youtube" || value == "Tik-Tok" || value == "VK" || value == "Twitter") setSocial(false)
      else setSocial(true)
    }
    console.log(state);




  return (
    <div className='site-card-wrapper'>
        <div className={classes.smm__div}>
            <Select defaultValue="Календарь">
                <Option value="Календарь">Календарь</Option>
            </Select>

            <Select defaultValue="Instagram" onChange={handleChange} >
                <Option value="Instagram">Instagram</Option>
                <Option value="Facebook">Facebook</Option>
                <Option value="Telegram">Telegram</Option>
                <Option value="Youtube">Youtube</Option>
                <Option value="Tik-Tok">Tik-Tok</Option>
                <Option value="VK">VK</Option>
                <Option value="Twitter">Twitter</Option>
            </Select>
        </div>


        {
            social ?
        <Row className={classes.card__row} gutter={24}>
      <Col className={classes.card__col}  span={11}>
        <Link to={"/smm/addpage"}  >
        <Card className={classes.card__card} state={state} >
        <nav className={classes.card__nav}>
          <img src={add} alt="add" />
          <p className={classes.card__subdesc}>Добавить</p>
        </nav>
        </Card>
        </Link>
      </Col>
          <CardList/>
          <CardList/>
          <CardList/>
    </Row>

    : <div className={classes.card__wrapper}>
        <Inprogress/>
    </div> 
    
        }

    </div>
  )
}

export default Autoposting