import type { RouteObject } from 'react-router-dom'

interface RouteProps extends RouteObject {
  name?: string
  component?: any
  redirect?: string
  meta?: {
    title?: string
    icon?: string
  }
  children?: RouteProps[]
}

interface Meta {
  title: string
  icon?: string
}

interface IRoute {
  path?: string
  exact?: boolean
  redirect?: string
  component?: any
  element?: any
  routes?: IRoute[]
  key?: any
  strict?: boolean
  sensitive?: boolean
  wrappers?: any[]
  [k: string]: any
}

interface RouterInterface {
  path: string
  name: string
  component?: any
  redirect?: string
  meta: Meta
  auth?: boolean
  children?: IRoute[]
  hidden?: boolean
  lazyComponent?: () => Promise<any>
}

// interface IRoute extends RouterInterface {
//   children?: IRoute[];
// }

export type { Meta, RouterInterface, IRoute, RouteProps }
