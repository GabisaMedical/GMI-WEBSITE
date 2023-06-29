import { IRoute } from "../interfaces/IRoute"

interface IRouterConstant {
  [key: string]: IRoute
}

const ROUTES_CONSTANTS: IRouterConstant = {
  HOME: { path: '/', name: 'Home' },
  COMPANY: { path: '/company', name: 'Company' },
  ABOUT: { path: '/about', name: 'About'},
  PRODUCTS: { path: '/products', name: 'Products' },
  DIFFERENCIALS: { path: '/differenciails', name: 'Differencials' },
  NEWS: { path: '/news', name: 'News' },
  CONTACT: { path: '/contact', name: 'Contact Us' },
}

export default ROUTES_CONSTANTS
