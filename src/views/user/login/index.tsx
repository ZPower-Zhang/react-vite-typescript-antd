import { FC, useState, Fragment } from 'react'
import { Tabs } from 'antd'
import FormLogin from './components/FormLogin'

// type Props = {}

const Login: FC = () => {
  const [curKey, setCurKey] = useState('1')
  const callback = (key: string) => {
    setCurKey(key)
  }
  return (
    <Fragment>
      <div className='login-layout-wrapper'>
        <video className='bg-video' autoPlay muted loop>
          <source src='//video.699pic.com/videos/80/62/39/a_qmbxMqNvK9jr1583806239.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='login-window'>
          <p className='title'> Hello 后台系统</p>
          <Tabs centered defaultActiveKey={curKey} onChange={callback}>
            <Tabs.TabPane tab='账号密码登录' key='1'>
              <FormLogin curKey={curKey} />
            </Tabs.TabPane>

            <Tabs.TabPane tab='手机号登录' key='2'>
              Content of Tab Pane 2
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
