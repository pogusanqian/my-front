import React from 'react';
import { Menu } from 'antd';
import { TrophyOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const loction = useLocation();
  
  const defaultSelectedKey = ['city', 'province'].find(item => loction.pathname.includes(item)) || 'city';
  const items = [
    { label: '城市', key: 'city', icon: <SettingOutlined /> },
    { label: '省份', key: 'province', icon: <TrophyOutlined /> },
  ];

  return (
    <Menu
      onClick={(data) => navigate(data.key)}
      theme="dark"
      style={{ width: 200 }}
      defaultSelectedKeys={[defaultSelectedKey]}
      mode="inline"
      items={items}
    />
  );
};

export default App;