import { FC, Fragment } from 'react'
import { useLocation, matchRoutes, Navigate } from 'react-router-dom'
import { routes } from './index'

type Props = {
  children: any
}

// let isLogin = false
const whiteRoutes = ['/user/login']
const RouterAuthorized: FC<Props> = ({ children }) => {
  const location = useLocation()
  const matchings = matchRoutes(routes, location)
  console.log('matchings', matchings)
  const userInfo = window.localStorage.getItem('userInfo') || null

  if (!whiteRoutes.includes(location.pathname) && !userInfo) {
    console.log('需要登录')
    return <Navigate to='/user/login' state={{ from: location.pathname }} replace />
  }
  return <Fragment>{children}</Fragment>
}

export default RouterAuthorized
