import React from 'react'
import { Sidebar } from "./Sidebar.js";
import { Layout } from "antd";
import 'antd/dist/antd.css';
const { Header, Sider, Content } = Layout;

export const MainLayout = (props) => {

    return (
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
      );
  };

  export default MainLayout;
  