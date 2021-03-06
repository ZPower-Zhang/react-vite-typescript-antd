import { useState, FC, Suspense } from 'react';
import { Layout, Spin } from 'antd';
import { Outlet } from 'react-router-dom';
import { SiderBar, Navbar } from './components';
// import { routesArr } from '@/router';

const { Content } = Layout;

// const BasicLayout: FC = () => {
const BasicLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const callback = (bool: boolean): void => {
    setCollapsed(bool);
  };
  return (
    <Suspense
      fallback={
        <div>
          <Spin />
        </div>
      }
    >
      <Layout className="basic-layout-container">
        <SiderBar collapsed={collapsed} />
        <Layout className="site-layout">
          <Navbar callback={callback} collapsed={collapsed} />
          <Content style={{ padding: 12, minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Suspense>
  );
};

export default BasicLayout;
