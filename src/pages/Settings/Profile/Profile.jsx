import classes from './Profile.module.scss'
import { Button, Divider, Input, Row, Col } from 'antd';
import { Select, PageHeader } from 'antd';
import Box from '../../../components/Box'
import { UpdateForm, UpdatePAsswordForm } from '../../../module/auth/form';
import { useSelector } from 'react-redux';
const { Option } = Select;

const Profile = () => {

  const { profile } = useSelector(state => state.auth)

  return (
    <div className={classes.wrapper}>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Profile"
      />
      <UpdateForm val={profile}>
        {({ handleChange }) => (
          <Box>
            <h2>Personal Account</h2>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Input onChange={handleChange} name='firstName' placeholder="FirstName" defaultValue={profile?.firstName} />
              </Col>
              <Col span={8}>
                <Input onChange={handleChange} name='lastName' placeholder="LastName" defaultValue={profile?.lastName} />
              </Col>
              <Col span={8}>
                <Input disabled={true} value={profile?.email} name='email' placeholder="Email" />
              </Col>
              <Col span={12}>
                <Input onChange={handleChange} name='phoneNumber' placeholder="Phone Number" />
              </Col>
              <Col span={12}>
                <Select onChange={handleChange} defaultValue={profile?.type} name='type' style={{ width: '100%' }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Col>
              <Col span={24}>
                <Button htmlType='submit' type="primary">Submit</Button>
              </Col>
            </Row>
          </Box>
        )}
      </UpdateForm>

      <Divider />
      <UpdatePAsswordForm>
        {({ handleChange, isValid, dirty }) => (
          <Box>
            <h2>Change Password</h2>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Input onChange={handleChange} type="password" name='password' placeholder="Password" />
              </Col>
              <Col span={12}>
                <Input onChange={handleChange} type="password" name='confirmPassword' placeholder="Conformation Password" />
              </Col>
              <Col span={24}>
                <Button disabled={!(isValid && dirty)} type="primary">Submit</Button>
              </Col>
            </Row>
          </Box>
        )}
      </UpdatePAsswordForm>
    </div>
  )
}

export default Profile
