import React from 'react'
import { Sidebar } from "./Sidebar.js";
import { HeaderBar } from "./HeaderBar.js";
import { Layout, Menu, Breadcrumb } from "antd";
import 'antd/dist/antd.css';
import '../../App.css';
import logo from '../../images/logo2.png';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const { Header, Sider, Content } = Layout;

export const MainLayout = (props) => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <HeaderBar />
            <Layout>
                <Sidebar />
                <Layout className="site-layout">

                    <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
      );
  };

  export default MainLayout;
  