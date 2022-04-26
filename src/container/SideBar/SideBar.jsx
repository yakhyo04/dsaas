import { Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./SideBar.module.scss";

// const bars = [
//   {
//     title: 'Dashboard',
//     path: '/dashboard'
//   },
//   {
//     title: 'Задании',
//     path: '/tasks'
//   },
//   {
//     title: 'Планы',
//     path: '/plans'
//   },
//   {
//     title: 'SMM',
//     path: '/smm'
//   },
//   {
//     title: 'ADS',
//     path: '/ads'
//   },
//   {
//     title: 'SEM',
//     path: '/sem'
//   },
//   {
//     title: 'SEO',
//     path: '/seo'
//   },
//   {
//     title: 'ADS Data',
//     path: '/ads-data'
//   },
//   {
//     title: 'Команда',
//     path: '/command'
//   }
// ]

const SideBar = () => {
  const { pathname } = useLocation()
  return (
    <Menu className={classes.wrapper} mode="inline" defaultSelectedKeys={[pathname]}>
      <Menu.Item key="/dashboard">
        <Link to="/dashboard">
          Dashboard
        </Link>
      </Menu.Item>
      <Menu.Item key="/tasks">
        <Link to="/tasks">
          Задании
        </Link>
      </Menu.Item>
      <Menu.Item key="/plans">
        <Link to="/plans">
          Планы
        </Link>
      </Menu.Item>
      <Menu.Item key="/smm">
        <Link to="/smm">
          SMM
        </Link>
      </Menu.Item>
      <Menu.Item key="/ads">
        <Link to="/ads">
          ADS
        </Link>
      </Menu.Item>
      <Menu.Item key="/sem">
        <Link to="/sem">
          SEM
        </Link>
      </Menu.Item>
      <Menu.Item key="/seo">
        <Link to="/seo">
          SEO
        </Link>
      </Menu.Item>
      <Menu.Item key="/ads-data">
        <Link to="/ads-data">
          ADS Data
        </Link>
      </Menu.Item>
      <Menu.Item key="/command">
        <Link to="/command">
          Команда
        </Link>
      </Menu.Item>
      <Menu.SubMenu title="Settings" key="/settings">
      <Menu.Item key="/settings/profile">
        <Link to="/settings/profile">
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="/settings/networks">
        <Link to="/settings/networks">
          Social networks
        </Link>
      </Menu.Item>
      <Menu.Item key="/settings/accsess">
        <Link to="/settings/accsess">
          Accsess
        </Link>
      </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default SideBar;
