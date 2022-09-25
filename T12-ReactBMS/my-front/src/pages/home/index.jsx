import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import LeftNav from '../../components/left-nav';

const { Content, Sider } = Layout;
const Home = () => {
  return (
    <Layout style={{ height: '100%' }}>
      <Sider><LeftNav /></Sider>
      <Content style={{ overflow: 'auto' }}>
        {/* 
          不再使用routers配置子路由了, 直接配置一个插槽outlet, 然后由路由表进行渲染, 这样有一个好处就是不需要手动的配置子路由信息了
          因为子路由的渲染还需要进行import导包
          <Routes>
            <Route path="/city" element={<City />} />
            <Route path="province" element={<Province />} />
          </Routes> 
        */}
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Home;