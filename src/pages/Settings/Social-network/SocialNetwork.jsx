import classes from './SocialNetwork.module.scss'

import { useState } from 'react';
import { Button, Col, Input, PageHeader, Row } from 'antd';
import { Select } from 'antd';
import Box from '../../../components/Box';

const SocialNetwork = () => {
  const { Option } = Select;
  const [social, setSocial] = useState(true)

  function handleChange(value) {
    if (value === 'telegram') setSocial(false)
    else setSocial(true)
  }


  return (
    <div className={classes.wrapper}>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Social Networks"
      />
      <Box>
        <h2 style={{ textAlign: 'center' }}>Social Networks</h2>
        <Row gutter={[16, 16]}>
          <Col span={12} offset={6}>
            <Select defaultValue="Facebook" style={{ width: '100%' }} onChange={handleChange}>
              <Option value="facebook">Facebook</Option>
              <Option value="instagram">Instagram</Option>
              <Option value="tik-tok">Tik-Tok</Option>
              <Option value="vk">VK</Option>
              <Option value="odnoklassniki">Odnoklassniki</Option>
              <Option value="telegram">Telegram</Option>
            </Select>
          </Col>
          {
            social ? <>
              <Col span={12} offset={6}>
                <Input placeholder="Username, phone or email" />
              </Col>
              <Col span={12} offset={6}>
                <Input placeholder="Password" />
              </Col>
            </> : <Col span={12} offset={6}>
              <Input placeholder="Telegram Link" />
            </Col>
          }
          <Col span={12} offset={15}>
            <Button type="primary" >Submit</Button>
          </Col>
        </Row>
      </Box>
    </div>
  )
}

export default SocialNetwork
