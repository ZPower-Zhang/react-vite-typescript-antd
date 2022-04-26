import { lazy } from 'react'
import { BasicLayout, RouterView } from '@/layouts'

import { IRoute } from './config'

const routesArr = [
  {
    path: '/home',
    name: 'homepage',
    component: RouterView,
    meta: { title: '首页', icon: 'HomeOutlined' },
    routes: [
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
    routes: [
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

const routes: IRoute[] = [
  {
    path: '/',
    name: 'BasicLayout',
    component: BasicLayout,
    redirect: '',
    meta: { title: '', icon: '' },
    routes: [
      ...routesArr,
      {
        path: '*',
        name: 'NotFound',
        meta: { title: '404', icon: '' },
        component: lazy(() => import('@/views/error/404')),
      },
    ],
  },
]

// interface Props {
//   /** 自定义渲染组件 */
//   Cp: React.ComponentType<any>;
// }

// const SuspenseCom = (Comp: Component) => {
//   return (
//     <Suspense fallback={<div><Spin /></div>}> <Comp /> </Suspense>
//   )
// }

// const BackRoutesArr = (routes: IRoute[]) => {
//   if (routes && routes.length) {
//     return routes.map((ele, index) => {
//       return {
//         path: ele.path,
//         element: SuspenseCom(ele.component),
//         children: ele.children && ele.children.length ? BackRoutesArr(ele.children) : null,
//       }
//     })
//   } else {
//     return []
//   }
// }

// const RenderRoutes = () => {
//   let routeMap = BackRoutesArr(routes)
//   console.log('routeMap', routeMap);
//   let element = useRoutes(routeMap)
//   return element
// }

export { routes, routesArr }
