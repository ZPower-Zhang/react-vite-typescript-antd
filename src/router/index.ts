import { lazy } from 'react'
import { BasicLayout, RouterView, UserLayout } from '@/layouts'
import { RouteProps } from './router.types'

const userRoutes = {
  path: '/user',
  exact: false,
  name: 'user',
  component: UserLayout,
  children: [
    {
      path: '/user/login',
      exact: false,
      name: 'login',
      component: lazy(() => import('views/user/login')),
    },
  ],
}

const asyncRoutes = [
  {
    path: '/home',
    name: 'homepage',
    component: RouterView,
    meta: { title: '首页', icon: 'HomeOutlined' },
    children: [
      {
        path: '/home/overview',
        name: 'overview',
        component: lazy(() => import('views/homepage/overview')),
        meta: { title: '概览', icon: '' },
      },
      {
        path: '/home/analysis',
        name: 'analysis',
        component: lazy(() => import('views/homepage/analysis')),
        meta: { title: '分析', icon: '' },
      },
    ],
  },
  {
    path: '/assets',
    name: 'assets',
    component: lazy(() => import('views/assets/index')),
    meta: { title: '资产', icon: 'MailOutlined' },
  },
  {
    path: '/audience',
    name: 'audience',
    component: lazy(() => import('views/audience/index')),
    meta: { title: '受众', icon: 'AppstoreOutlined' },
  },
  {
    path: '/systems',
    name: 'systems',
    component: RouterView,
    meta: { title: '系统管理', icon: 'SettingOutlined' },
    children: [
      {
        path: '/systems/permission',
        name: 'permission',
        component: lazy(() => import('views/systems/permission')),
        meta: { title: '权限', icon: '' },
      },
      {
        path: '/systems/user-info',
        name: 'userInfo',
        component: lazy(() => import('views/systems/user')),
        meta: { title: '用户信息', icon: '' },
      },
    ],
  },
]

const routes: RouteProps[] = [
  userRoutes,
  {
    path: '/',
    name: 'BasicLayout',
    component: BasicLayout,
    redirect: '',
    meta: { title: '', icon: '' },
    children: [
      ...asyncRoutes,
      {
        path: '*',
        name: 'NotFound',
        meta: { title: '404', icon: '' },
        component: lazy(() => import('@/views/error/404')),
      },
    ],
  },
]

export { userRoutes, routes, asyncRoutes }
