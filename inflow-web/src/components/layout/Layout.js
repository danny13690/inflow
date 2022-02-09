import React from 'react'
import { Sidebar } from "./Sidebar.js";
import { Layout } from "antd";
import 'antd/dist/antd.css';
import '../../App.css';
import logo from '../../images/logo2.png';
const { Header, Sider, Content } = Layout;

export const MainLayout = (props) => {

    return (
        <Layout>
            <Header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Inflow</p>
            </Header>
            <Layout style={{ minHeight: "100vh" }}>
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
  