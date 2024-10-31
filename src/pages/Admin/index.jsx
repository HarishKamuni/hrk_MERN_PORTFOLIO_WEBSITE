import React from 'react';
import Header from '../../components/Header';
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import AdminProject from './AdminProject';

const Admin = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Intro',
      children: <AdminIntro />,
    },
    {
      key: '2',
      label: 'About',
      children: <AdminAbout />,
    },
    {
      key: '3',
      label: 'Project',
      children: <AdminProject />,
    },
  ];
  return (
    <div>
      <Header />
      <div className="border shadow-md m-3 p-3">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Admin;
