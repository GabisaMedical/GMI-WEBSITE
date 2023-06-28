import { ElementType } from 'react'

type Icons = { filled: ElementType, outlined: ElementType }

interface IRoute {
  path: string
  name: string
}


interface IRouterRoute extends IRoute {
  icon?: Icons
  element: ElementType
}

interface IRouteGroup {
  name: string
  icon: Icons
  routes: IRouterRoute[]
}

export type {
  IRoute,
  IRouteGroup,
  IRouterRoute
}
