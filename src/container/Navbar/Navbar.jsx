import React from "react";

import classes from "./Navbar.module.scss";
import Logo from "../../assets/images/logo.png";
import { Avatar, Dropdown, Image, Menu, message } from "antd";
import { Link, useHistory } from "react-router-dom";
import LangSwitch from "../../components/LangSwitch";
import { useDispatch } from "react-redux";
import { Logout } from "../../module/auth/actions"

const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const LogOut = () => {
    dispatch(Logout.request()).then(() => message.success)
  }

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => history.push('/settings/profile')}>
        Profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" onClick={LogOut} >
        <span className={classes['wrapper_logout']}>Log Out</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className={classes.wrapper}>
      <Link to="/">
        <Image width={200} preview={false} src={Logo} />
      </Link>
      {/* <Dropdown overlay={menu}> */}
      <div className={classes.right}>
        <LangSwitch />
        <Dropdown placement="topRight" overlay={menu} trigger={['click']}>
          <Avatar size="large" className={classes.avatar} >
            o
          </Avatar>
        </Dropdown>
      </div>
      {/* </Dropdown> */}
    </nav>
  );
};

export default Navbar;
