import { FC, Fragment } from 'react'
import { useLocation, Navigate, useRoutes } from 'react-router-dom'
import { allRoutes } from '@/router/config'

// let isLogin = false
const whiteRoutes = ['/user/login']

const App: FC = () => {
  const location = useLocation()
  const Element = useRoutes(allRoutes)
  const userInfo = window.localStorage.getItem('userInfo') || null

  if (!whiteRoutes.includes(location.pathname) && !userInfo) {
    // console.log('需要登录')
    const toUrl = '/user/login' + '?' + location.pathname
    return <Navigate to={toUrl} state={{ from: location.pathname }} replace />
  }
  return <Fragment>{Element}</Fragment>
}

export default App
