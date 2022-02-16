import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  BarChartOutlined,
  HomeOutlined,
  FieldTimeOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';
import '../../App.css';
import { Link } from "react-router-dom";
import logo from '../../images/plane.jpeg';
import words from '../../images/words.jpeg';
const { Sider } = Layout;

export class Sidebar extends React.Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  // <Link to="/home/alert"> Security Alerts </Link>

  render() {
    const { collapsed } = this.state;
    return (
        
        <Sider collapsible width={250} collapsed={collapsed} onCollapse={this.onCollapse}>
          {/* <Menu theme="dark" defaultSelectedKeys={[]} mode="inline">
            <Menu.Item key="1" icon={<img src={logo} className="App-logo" alt="logo"/>}>
              <img src={words} className="App-logo" alt="inflow"/>
            </Menu.Item>
          </Menu> */}
 
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/home"> Home </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<PlusCircleOutlined />}>
              <Link to="/home/CreateCampaign"> Create Campaign </Link>
            </Menu.Item>
            {/* <Menu.Item key="3" icon={<FieldTimeOutlined />}>
              <Link to="/home"> Archives </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined/>}>
            <Link to="/home/InfluencerTable"> Statistics </Link>
            </Menu.Item> */}
          </Menu>
        </Sider>
    );
  };
};
