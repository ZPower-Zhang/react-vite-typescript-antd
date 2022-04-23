import { FunctionComponent, ComponentClass } from 'react';

interface IComponent extends FunctionComponent, ComponentClass {
  getInitialProps?: Function;
  preload?: () => Promise<any>;
}

interface Meta {
  title: string;
  icon?: string;
}

interface IRoute {
  path?: string;
  exact?: boolean;
  redirect?: string;
  component?: any;
  element?: any;
  routes?: IRoute[];
  key?: any;
  strict?: boolean;
  sensitive?: boolean;
  wrappers?: any[];
  [k: string]: any;
}

interface RouterInterface {
  path: string;
  name: string;
  component?: any;
  redirect?: string;
  meta: Meta;
  auth?: boolean;
  routes?: IRoute[];
  hidden?: boolean;
  lazyComponent?: () => Promise<any>;
}

// interface IRoute extends RouterInterface {
//   children?: IRoute[];
// }

export {
  type Meta,
  type RouterInterface,
  type IRoute
}
