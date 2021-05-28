import loadable, { LoadableComponent } from '@loadable/component'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import LinkList from '../components/link_list'
import { Store } from '../store'

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
      () => import(/* webpackChunkName: "page-home" */ './home')
    ),
    name: 'home',
  },
  {
    path: '/blog',
    component: loadable(
      () => import(/* webpackChunkName: "page-blog" */ './blog')
    ),
    name: 'blog',
  },
  {
    path: '/post',
    name: 'post',
    component: loadable(
      () => import(/* webpackChunkName: "page-post" */ './post')
    ),
  },
]

const RenderRoute = (props: RouteProps) => (
  <Route exact={props.exact} path={props.path} component={props.component} />
)

const Routes = () => (
  <HashRouter>
    <Store>
      <LinkList list={routes} />
      <Switch>
        {routes.map((route) => (
          <RenderRoute {...route} key={route.path} />
        ))}
      </Switch>
    </Store>
  </HashRouter>
)

export default Routes
