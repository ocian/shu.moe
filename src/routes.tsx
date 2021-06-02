import loadable, { LoadableComponent } from '@loadable/component'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import LinkList from 'components/link_list'

interface RouteProps {
  exact?: boolean
  path: string
  component: LoadableComponent<unknown>
  name: string
}

const routes: RouteProps[] = [
  {
    exact: true,
    path: '/',
    component: loadable(
      () => import(/* webpackChunkName: "page-home" */ 'views/home')
    ),
    name: 'home',
  },
  {
    path: '/blog',
    component: loadable(
      () => import(/* webpackChunkName: "page-blog" */ 'views/blog')
    ),
    name: 'blog',
  },
  {
    path: '/post',
    name: 'post',
    component: loadable(
      () => import(/* webpackChunkName: "page-post" */ 'views/post')
    ),
  },
]

const RenderRoute = (props: RouteProps) => (
  <Route exact={props.exact} path={props.path} component={props.component} />
)

const Routes = () => (
  <HashRouter>
    <LinkList list={routes} />
    <Switch>
      {routes.map((route) => (
        <RenderRoute {...route} key={route.path} />
      ))}
    </Switch>
  </HashRouter>
)

export default Routes
export { routes }
