import { lazy } from 'react'
const BasicLayout = lazy(() => import('@/layouts/BasicLayout'))
const RouterView = lazy(() => import('@/layouts/RouterView'))
const UserLayout = lazy(() => import('@/layouts/UserLayout'))
// import BasicLayout from './BasicLayout'
// import RouterView from './RouterView'

export { BasicLayout, RouterView, UserLayout }
