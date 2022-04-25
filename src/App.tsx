import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom'
import { Layout, Spin } from 'antd'
// import { routes, RenderRoutes } from '@/router';
// import { BasicLayout } from '@/layouts'

const BasicLayout = lazy(() => import('@/layouts/BasicLayout'))
const RouterView = lazy(() => import('@/layouts/RouterView'))
const Overview = lazy(() => import('views/homepage/overview'))
const Analysis = lazy(() => import('views/homepage/analysis'))
const Assets = lazy(() => import('views/assets/index'))
const Audience = lazy(() => import('views/audience/index'))
const Permission = lazy(() => import('views/systems/permission'))
const UserInfo = lazy(() => import('views/systems/user'))
const NotFound = lazy(() => import('views/error/404'))

const RenderRoutes = () => {
  const ele = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<Spin />}>
          <BasicLayout />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: <Navigate to='/home' />,
        },
        {
          path: '/home',
          element: (
            <Suspense fallback={<Spin />}>
              <RouterView />
            </Suspense>
          ),
          children: [
            {
              path: '/home',
              element: <Navigate to='/home/overview' />,
            },
            {
              path: '/home/overview',
              element: (
                <Suspense fallback={<Spin />}>
                  <Overview />
                </Suspense>
              ),
            },
            {
              path: '/home/analysis',
              element: (
                <Suspense fallback={<Spin />}>
                  <Analysis />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: '/assets',
          element: (
            <Suspense fallback={<Spin />}>
              <Assets name='assets' />
            </Suspense>
          ),
        },
        {
          path: '/audience',
          element: (
            <Suspense fallback={<Spin />}>
              <Audience name='audience' />
            </Suspense>
          ),
        },
        {
          path: '/systems',
          element: (
            <Suspense fallback={<Spin />}>
              <RouterView />
            </Suspense>
          ),
          children: [
            {
              path: '/systems',
              element: <Navigate to='/systems/permission' />,
            },
            {
              path: '/systems/permission',
              element: (
                <Suspense fallback={<Spin />}>
                  <Permission />
                </Suspense>
              ),
            },
            {
              path: '/systems/user-info',
              element: (
                <Suspense fallback={<Spin />}>
                  <UserInfo />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: '*',
          element: (
            <Suspense fallback={<Spin />}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ])
  return ele
}

function App() {
  return (
    <Layout className={'layout-container'}>
      <Router>
        <RenderRoutes />
      </Router>
    </Layout>
  )
}

export default App
