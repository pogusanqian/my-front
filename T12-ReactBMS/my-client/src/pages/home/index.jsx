import React from 'react';
import { Layout, Menu } from 'antd';
import LeftNav from '../../components/left-nav';
import MyHeader from '../../components/header';
const { Header, Content, Footer, Sider } = Layout;

const Home = () => (
  <Layout style={{ height: '100%' }}>
    <Sider><LeftNav /></Sider>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
);

export default Home;