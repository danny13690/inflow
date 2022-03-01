import React from 'react'
import './HeaderBar.css'
import logo from '../../images/logo_word.jpg';

import { Layout, Menu, Button } from 'antd';
import { Row, Col } from 'antd';

const { SubMenu } = Menu;
const { Header } = Layout;


export class HeaderBar extends React.Component {
    render() {
        if (this.props.campaign) {
            return (
                <Header className="header" style={{backgroundColor: "white"}} >
                    <img src={logo} className="logo" ></img>
                    <p> <b> {this.props.campaign.name} </b></p>
                </Header>
            );
        }
        return (
            <Header className="header" style={{backgroundColor: "white"}} >
                <img src={logo} className="logo" ></img>
            </Header>
        );
      };
}