import React from 'react'
import { Layout, Menu, Breadcrumb, Button, Typography } from 'antd';

import {
  HomeOutlined,
  PlusCircleOutlined,
  MessageOutlined,
  TeamOutlined,
  ShoppingOutlined
} from '@ant-design/icons';
import '../../App.css';
import './Sidebar.css'
import { Link } from "react-router-dom";
import logo from '../../images/plane.jpeg';
import words from '../../images/words.jpeg';
import { getAuth, signOut } from "firebase/auth";

const { Sider } = Layout;

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this);
}

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  onSignOut() {
    signOut(getAuth()).then(() => {
      window.location.href='/home'
    }).catch((error) => {
      console.log(error)
    });
  }

  render() {
    const { collapsed } = this.state;
    if (this.props.campaign) {
      return (
        <Sider theme="light" className="sidebar" collapsible width={200} collapsed={collapsed} onCollapse={this.onCollapse}>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.ItemGroup key="g1" title="General">
              <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/home"> Home </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<ShoppingOutlined />}>
                <Link to="/home/PastCampaigns"> Past Campaigns </Link>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Current Campaign">
              <Menu.Item key="3" icon={<HomeOutlined />}>
              <Link to={`/home/CampaignHome/${this.props.campaign.id}`}> Campaign Home </Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<TeamOutlined />}>
              <Link to={`/home/InfluencerTable/${this.props.campaign.id}`}> Influencers </Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>

          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item key="5">
              <Button onClick={this.onSignOut}>Sign Out</Button>
            </Menu.Item>
          </Menu>
        </Sider>
      )
    } 
    return (
        <Sider theme="light" className="sidebar" collapsible width={200} collapsed={collapsed} onCollapse={this.onCollapse}>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.ItemGroup key="g1" title="General">
              <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/home"> Home </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<ShoppingOutlined />}>
                <Link to="/home/PastCampaigns"> Past Campaigns </Link>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Current Campaign">
              <Menu.Item disabled key="3" icon={<HomeOutlined />}>
               Campaign Home
              </Menu.Item>
              <Menu.Item disabled key="4" icon={<TeamOutlined />}>
              Influencers
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>

          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item key="5">
              <Button onClick={this.onSignOut}>Sign Out</Button>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  };
};
