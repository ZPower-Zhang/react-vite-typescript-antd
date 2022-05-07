import { FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Avatar, Dropdown, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'

type User = {
  name: string
}

const UserRight: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const userStr = window.localStorage.getItem('userInfo')
  const userInfo: User = (userStr && JSON.parse(userStr)) || { name: '' }
  const onClick = (): void => {
    const toUrl = '/user/login' + '?' + location.pathname
    window.localStorage.setItem('userInfo', '')
    navigate(toUrl)
  }
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: '退出',
          key: '1',
        },
        // {
        //   label: '2nd menu item',
        //   key: '2',
        // },
        // {
        //   label: '3rd menu item',
        //   key: '3',
        // },
      ]}
    />
  )

  return (
    <div className='user-right'>
      <Dropdown overlay={menu} placement='bottom' arrow>
        <a onClick={(e) => e.preventDefault()}>
          <Avatar icon={<UserOutlined />} /> <span className='name'>{userInfo.name}</span>
        </a>
      </Dropdown>
    </div>
  )
}

export default UserRight
