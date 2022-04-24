import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

// type Props = {}
interface Props {
  collapsed: boolean;
  callback: (x: boolean) => void;
}

const Navbar = (props: Props) => {
  const toggle = () => {
    props.callback(!props.collapsed);
  };
  return (
    <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(
        props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: 'trigger',
          onClick: toggle,
        }
      )}
      HeaderBar
    </Layout.Header>
  );
};

export default Navbar;
