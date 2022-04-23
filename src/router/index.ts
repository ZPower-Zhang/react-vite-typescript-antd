import { lazy } from 'react';
// import {
//   Navigate,
//   useRoutes,
// } from "react-router-dom";
// import { Spin } from 'antd'
// import { BasicLayout } from '@/layouts'
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// import SuspenseCom from './SuspenseCom'

import { IRoute } from './config';

const routesArr = [
  {
    path: '/ad-overview',
    name: 'ad-overview',
    meta: { title: '广告概览', icon: 'MailOutlined' },
    component: lazy(() => import('views/overview/insight')),
  },
  {
    path: '/ad-assets',
    name: 'ad-assets',
    meta: { title: '广告资产', icon: 'AppstoreOutlined' },
    component: lazy(() => import('@/views/assets/index')),
  },
  {
    path: '/ad-audience',
    name: 'ad-audience',
    meta: { title: '广告受众', icon: 'AppstoreOutlined' },
    component: lazy(() => import('@/views/audience/index')),
  },
  {
    path: '/systems',
    name: 'Systems',
    meta: { title: '系统管理', icon: 'SettingOutlined' },
    component: lazy(() => import('@/views/systems/index')),
  },
];

const routes: IRoute[] = [
  {
    path: '/',
    name: 'BasicLayout',
    component: lazy(() => import('@/layouts/BasicLayout')),
    redirect: '/ad-overview',
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
];

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

export { routes, routesArr };
