// import { RouteConfig, Route, NavigationGuard, Location } from 'vue-router'
// import { RouteName } from './../enums/routes'
//
// export interface AtsSubMenu extends Location {
//   title: string
// }
//
// export interface AtsRouteMeta {
//   hidden?: boolean
//   title?: string
// }
//
export interface AtsRouteConfig {
  // name?: RouteName
  hidden?: boolean
  // meta: AtsRouteMeta
  children?: AtsRouteConfig[]
}
