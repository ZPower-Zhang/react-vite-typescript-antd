import { FC, Fragment } from 'react'
import { useLocation, matchRoutes, Navigate, useRoutes } from 'react-router-dom'
import { routes } from '@/router/index'
import { allRoutes } from '@/router/config'

// let isLogin = false
const whiteRoutes = ['/user/login']
const RouterAuthorized: FC = () => {
  const location = useLocation()
  const Element = useRoutes(allRoutes)
  const matchings = matchRoutes(routes, location)
  console.log('matchings', matchings)
  const userInfo = window.localStorage.getItem('userInfo') || null

  if (!whiteRoutes.includes(location.pathname) && !userInfo) {
    // console.log('需要登录')
    return <Navigate to='/user/login' state={{ from: location.pathname }} replace />
  }
  return <Fragment>{Element}</Fragment>
}

export default RouterAuthorized
