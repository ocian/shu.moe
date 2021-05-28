import loadable, { LoadableComponent } from '@loadable/component'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import LinkList from '../components/link_list'

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
    component: loadable(() => import('./home')),
    name: 'home',
  },
  {
    path: '/page1',
    component: loadable(() => import('./page1')),
    name: 'page1',
  },
  {
    path: '/page2',
    component: loadable(() => import('./page2')),
    name: 'page2',
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
