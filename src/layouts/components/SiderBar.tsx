import { FC, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu, MenuProps } from 'antd'
import { HomeOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import { routesArr } from '@/router/index'
import { RouterInterface, IRoute } from '@/router/config'

type MenuItem = Required<MenuProps>['items'][number]
type Props = {
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

let items: MenuProps['items'] = [
  // getItem('首页', '/home', <HomeOutlined />, [getItem('概览', '/home/overview'), getItem('分析', '/home/analysis')]),
  // getItem('资产', '/assets', <AppstoreOutlined />),
  // getItem('受众', '/audience', <MailOutlined />),
  // getItem('系统管理', '/systems', <SettingOutlined />, [
  //   getItem('权限', '/systems/permission'),
  //   getItem('用户信息', '/systems/user-info'),
  // ]),
]

const rootSubmenuKeys = ['/home', '/systems']

const subMaps = new Map([
  ['/', '/home'],
  ['/home', '/home/overview'],
  ['/systems', '/systems/permission'],
])

const SiderBar: FC<Props> = ({ collapsed = false }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [openKeys, setOpenKeys] = useState(['/home'])
  const [currentKey, setCurrentKey] = useState('/home/overview')
  const [theme] = useState<'light' | 'dark'>('dark')

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const onClickMenu: MenuProps['onClick'] = (e) => {
    if (e.key) {
      setCurrentKey(e.key)
      navigate(e.key)
    }
  }

  const handleLocation = (path = '/') => {
    if (subMaps.has(path)) {
      const fullPath = subMaps.get(path) || '/home'
      setOpenKeys([path])
      setCurrentKey(fullPath)
      navigate(fullPath)
    } else {
      const subPath = '/' + path.split('/')[1]
      setOpenKeys([subPath])
      setCurrentKey(path)
    }
  }

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'HomeOutlined':
        return <HomeOutlined />
      case 'MailOutlined':
        return <MailOutlined />
      case 'AppstoreOutlined':
        return <AppstoreOutlined />
      case 'SettingOutlined':
        return <SettingOutlined />
    }
  }

  const renderMenu = (menus: IRoute): any => {
    return menus.map((menu: RouterInterface) => {
      let child = []
      if (menu.routes && menu.routes.length) {
        child = renderMenu(menu.routes)
      }
      if (child.length) {
        return getItem(menu.meta.title, menu.path, menu.meta.icon && renderIcon(menu.meta.icon), child)
      }
      return getItem(menu.meta.title, menu.path, menu.meta.icon && renderIcon(menu.meta.icon))
    })
  }

  items = renderMenu(routesArr)

  useEffect(() => {
    let timer = setTimeout(() => handleLocation(pathname), 0)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <Layout.Sider trigger={null} width={256} collapsible collapsed={collapsed}>
      <div className='logo' />
      <Menu
        onClick={onClickMenu}
        mode='inline'
        theme={theme}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        selectedKeys={[currentKey]}
        items={items}
      />
    </Layout.Sider>
  )
}

export default SiderBar
