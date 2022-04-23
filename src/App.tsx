import { useState, Suspense, lazy, Component } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  useRoutes,
} from "react-router-dom";
import { Layout, Spin } from 'antd'
// import { routes, RenderRoutes } from '@/router';
// import { BasicLayout } from '@/layouts'

const BasicLayout = lazy(() => import('@/layouts/BasicLayout'))
const Insight = lazy(() => import('views/overview/insight'))
const Assets = lazy(() => import('views/assets/index'))
const Audience = lazy(() => import('views/audience/index'))
const System = lazy(() => import('views/systems/index'))
const NotFound = lazy(() => import('views/error/404'))

const RenderRoutes = () => {
  const ele = useRoutes([
    {
      path: '/',
      element: <Suspense fallback={<div><Spin /></div>}><BasicLayout /></Suspense>,
      children: [
        {
          path: 'home',
          element: <Navigate to="/ad-overview" />,
        },
        {
          path: '/ad-overview',
          element: <Suspense fallback={<div><Spin /></div>}><Insight /></Suspense>,
        },
        {
          path: '/ad-assets',
          element: <Suspense fallback={<div><Spin /></div>}><Assets /></Suspense>,
        },
        {
          path: '/ad-audience',
          element: <Suspense fallback={<div><Spin /></div>}><Audience /></Suspense>,
        },
        {
          path: '/systems',
          element: <Suspense fallback={<div><Spin /></div>}><System /></Suspense>,
        },
        {
          path: '*',
          element: <Suspense fallback={<div><Spin /></div>}><NotFound /></Suspense>,
        }
      ],
    }
  ])
  return ele
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout className={'layout-container'}>
      <Router>
        <RenderRoutes />
      </Router>
    </Layout>
  )
}

export default App
