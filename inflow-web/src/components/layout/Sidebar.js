import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  BarChartOutlined,
  HomeOutlined,
  FieldTimeOutlined
} from '@ant-design/icons';
import '../../App.css';
import { Link } from "react-router-dom";
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
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/home"> Home </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FieldTimeOutlined />}>
              Archives
            </Menu.Item>
            <Menu.Item key="3" icon={<BarChartOutlined/>}>
            Statistics
            </Menu.Item>
          </Menu>
        </Sider>
    );
  };
};
