import { FC, Suspense } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import { routes } from '@/router'
import { RouterInterface, IRoute } from '@/router/config'

type suspendProps = {
  Comp: any
}

const SuspenseCom: FC<any> = (Comp: any) => (
  <Suspense
    fallback={
      <div>
        <Spin />
      </div>
    }
  >
    <Comp />
  </Suspense>
)

const backRoutes = (menus: IRoute) => {
  return menus.map((menu: RouterInterface) => {
    if (menu.routes) {
      return {
        path: menu.path,
        element: SuspenseCom(menu.component),
        children: [...backRoutes(menu.routes)],
      }
    } else {
      return {
        path: menu.path,
        element: SuspenseCom(menu.component),
      }
    }
  })
}

const RenderRoutes = () => {
  let routerArr = backRoutes(routes)
  const ele = useRoutes(routerArr)
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
