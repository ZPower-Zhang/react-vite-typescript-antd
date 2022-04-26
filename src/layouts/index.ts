import { lazy } from 'react'
const BasicLayout = lazy(() => import('@/layouts/BasicLayout'))
const RouterView = lazy(() => import('@/layouts/RouterView'))
// import BasicLayout from './BasicLayout'
// import RouterView from './RouterView'

export { BasicLayout, RouterView }
