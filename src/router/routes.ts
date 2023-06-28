import { IRouterRoute } from "../interfaces/IRoute"
import Home from "../pages/Home/Home"
import ROUTES_CONSTANTS from "./routerConstants"

const routes: IRouterRoute[] = [
  {
    path: ROUTES_CONSTANTS.HOME.path,
    name: ROUTES_CONSTANTS.HOME.name,
    element: Home
  }
]

export default routes
