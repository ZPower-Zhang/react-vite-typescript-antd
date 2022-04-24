import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu, MenuProps } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import { routesArr } from '@/router/index'
// import { RouterInterface, IRoute } from '@/router/config'

// const { Item, SubMenu } = Menu

type MenuItem = Required<MenuProps>['items'][number]
interface Props {
  collapsed: boolean
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem('广告概览', '/ad-overview', <MailOutlined />),
  getItem('广告资产', '/ad-assets', <AppstoreOutlined />),
  getItem('广告受众', '/ad-audience', <MailOutlined />),
  getItem('系统管理', '/systems', <SettingOutlined />),
  // getItem('Navigation One', 'sub1', <MailOutlined />, [
  //   getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
  //   getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  // ]),

  // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  // ]),

  // getItem('Navigation Three', 'sub4', <SettingOutlined />, [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),
  //   getItem('Option 11', '11'),
  //   getItem('Option 12', '12'),
  // ]),
]

// const renderIcon = (icon: string) => {
//   switch (icon) {
//     case 'MailOutlined':
//       return <MailOutlined />
//       break
//     case 'AppstoreOutlined':
//       return <AppstoreOutlined />
//     case 'SettingOutlined':
//       return <SettingOutlined />
//       break
//   }
// }

const SiderBar: FC<any> = (props: Props) => {
  const navigate = useNavigate()
  const { collapsed = false } = props
  const [menuTreeNode, setMenuTreeNode] = useState(null)
  const [theme] = useState<'light' | 'dark'>('dark')
  const onClickMenu: MenuProps['onClick'] = (e) => {
    e.key && navigate(e.key)
  }
  // const changeTheme = (value: boolean) => {
  //   setTheme(value ? 'dark' : 'light');
  // };

  // const renderMenu = (data: IRoute) => {
  //   return data.map((item: RouterInterface) => {
  //     if (item.routes) {
  //       return (
  //         <SubMenu key={item.path} title={item.meta.title} icon={<MailOutlined />}>
  //           {renderMenu(item.routes)}
  //         </SubMenu>
  //       )
  //     }
  //     if (item['hidden']) return null
  //     return (
  //       <Item
  //         key={item.path}
  //         title={item.meta.title}
  //         icon={item.meta.icon && renderIcon(item.meta.icon)}>
  //         <Link to={item.path} replace>
  //           {item.meta.title}
  //         </Link>
  //       </Item>
  //     )
  //   })
  // }
  // useEffect(() => {
  //   const treeNode = renderMenu(routesArr)
  //   setMenuTreeNode(treeNode)
  // }, [])
  return (
    <Layout.Sider trigger={null} width={256} collapsible collapsed={collapsed}>
      <div className='logo' />
      <Menu
        onClick={onClickMenu}
        mode='inline'
        theme={theme}
        defaultSelectedKeys={['ad-overview']}
        items={items}
      />
    </Layout.Sider>
  )
}

export default SiderBar
