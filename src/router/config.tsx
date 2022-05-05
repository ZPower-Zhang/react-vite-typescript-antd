import React, { FC, Suspense } from 'react'
import { routes } from './index'
import { RouterInterface, IRoute } from './router.types'

const SpinBack: FC = () => {
  return (
    <div id='loading-mask'>
      <div className='loading-wrapper'>
        <span className='loading-dot loading-dot-spin'>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </div>
  )
}

const SuspenseCom = (Comp: React.LazyExoticComponent<any>): React.ReactNode => (
  <Suspense fallback={<SpinBack />}>
    <Comp />
  </Suspense>
)

const backRoutes = (menus: IRoute) => {
  return menus.map((menu: RouterInterface) => {
    if (menu.children) {
      return {
        path: menu.path,
        element: SuspenseCom(menu.component),
        children: [...backRoutes(menu.children)],
      }
    } else {
      return {
        path: menu.path,
        element: SuspenseCom(menu.component),
      }
    }
  })
}

const allRoutes = backRoutes(routes)

export { allRoutes }
