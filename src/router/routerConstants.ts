import { IRoute } from "../interfaces/IRoute"

interface IRouterConstant {
  [key: string]: IRoute
}

const ROUTES_CONSTANTS: IRouterConstant = {
  HOME: { path: '/', name: 'Home' }
}

export default ROUTES_CONSTANTS
