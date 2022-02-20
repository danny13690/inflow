import React from 'react'
import './HeaderBar.css'
import logo from '../../images/logo_word.jpg';

import { Layout, Menu, Button } from 'antd';
const { SubMenu } = Menu;
const { Header } = Layout;


export class HeaderBar extends React.Component {
    render() {
        return (
            <Header className="header" style={{backgroundColor: "white"}} >
                <img src={logo} className="logo" ></img>
            </Header>
        );
      };
}