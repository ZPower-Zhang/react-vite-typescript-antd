import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { routesArr } from '@/router/index';
import { RouterInterface, IRoute } from '@/router/config';

const { Item, SubMenu } = Menu;
interface Props {
  collapsed: boolean;
}

const SiderBar: FC<any> = (props: Props) => {
  const { collapsed = false } = props;
  const [menuTreeNode, setMenuTreeNode] = useState(null);
  const [theme] = useState<'light' | 'dark'>('dark');
  // const changeTheme = (value: boolean) => {
  //   setTheme(value ? 'dark' : 'light');
  // };

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'MailOutlined':
        return <MailOutlined />;
        break;
      case 'AppstoreOutlined':
        return <AppstoreOutlined />;
        break;
      case 'SettingOutlined':
        return <SettingOutlined />;
        break;
    }
  };

  const renderMenu = (data: IRoute) => {
    return data.map((item: RouterInterface) => {
      if (item.routes) {
        return (
          <SubMenu
            key={item.path}
            title={item.meta.title}
            icon={<MailOutlined />}
          >
            {renderMenu(item.routes)}
          </SubMenu>
        );
      }
      if (item['hidden']) return null;
      return (
        <Item
          key={item.path}
          title={item.meta.title}
          icon={item.meta.icon && renderIcon(item.meta.icon)}
        >
          <Link to={item.path} replace>
            {item.meta.title}
          </Link>
        </Item>
      );
    });
  };
  useEffect(() => {
    const treeNode = renderMenu(routesArr);
    setMenuTreeNode(treeNode);
  }, []);
  return (
    <Layout.Sider trigger={null} width={256} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu mode="inline" theme={theme} defaultSelectedKeys={['ad-overview']}>
        {menuTreeNode}
      </Menu>
    </Layout.Sider>
  );
};

export default SiderBar;
