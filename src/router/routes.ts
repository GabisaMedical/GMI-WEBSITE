import { IRouterRoute } from "../interfaces/IRoute"
import About from "../pages/About/About"
import Company from "../pages/Company/Company"
import Contact from "../pages/Contact/Contact"
import Differencials from "../pages/Differencials/Differencials"
import Home from "../pages/Home/Home"
import News from "../pages/News/News"
import Products from "../pages/Products/Products"
import ROUTES_CONSTANTS from "./routerConstants"

const routes: IRouterRoute[] = [
  {
    path: ROUTES_CONSTANTS.HOME.path,
    name: ROUTES_CONSTANTS.HOME.name,
    element: Home
  },
  {
    path: ROUTES_CONSTANTS.COMPANY.path,
    name: ROUTES_CONSTANTS.COMPANY.name,
    element: Company
  },
  {
    path: ROUTES_CONSTANTS.ABOUT.path,
    name: ROUTES_CONSTANTS.ABOUT.name,
    element: About
  },
  {
    path: ROUTES_CONSTANTS.PRODUCTS.path,
    name: ROUTES_CONSTANTS.PRODUCTS.name,
    element: Products
  },
  {
    path: ROUTES_CONSTANTS.DIFFERENCIALS.path,
    name: ROUTES_CONSTANTS.DIFFERENCIALS.name,
    element: Differencials
  },
  {
    path: ROUTES_CONSTANTS.NEWS.path,
    name: ROUTES_CONSTANTS.NEWS.name,
    element: News
  },
  {
    path: ROUTES_CONSTANTS.CONTACT.path,
    name: ROUTES_CONSTANTS.CONTACT.name,
    element: Contact
  },
]

export default routes
