import loadable, { LoadableComponent } from '@loadable/component'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import LinkList from 'components/link_list'

export interface RouteProps {
  exact?: boolean
  path: string
  component: LoadableComponent<unknown>
  name: string
  hidden?: boolean
}

const routes: RouteProps[] = [
  {
    exact: true,
    path: '/',
    component: loadable(
      () => import(/* webpackChunkName: "page-home" */ 'views/home')
    ),
    name: '关于',
  },
  {
    path: '/blogs',
    component: loadable(
      () => import(/* webpackChunkName: "page-blog" */ 'views/blog_list')
    ),
    name: '博客',
  },
  {
    path: '/post',
    name: 'post',
    component: loadable(
      () => import(/* webpackChunkName: "page-post" */ 'views/post')
    ),
    hidden: true,
  },
  {
    path: '/resume',
    name: '简历',
    component: loadable(() => import(/* webpackChunkName: "page-resume" */ 'views/resume')),
    hidden: true,
  },
]

const RenderRoute = (props: RouteProps) => (
  <Route exact={props.exact} path={props.path} component={props.component} />
)

const Routes = () => (
  <HashRouter>
    <Switch>
      {routes.map((route) => (
        <RenderRoute {...route} key={route.path} />
      ))}
    </Switch>
  </HashRouter>
)

export default Routes
export { routes }
