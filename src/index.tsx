import * as ReactDOM from 'react-dom'
import { Provider, defaultTheme, Picker, Item } from '@adobe/react-spectrum'

import './styles/global.scss'
import Page from './views'

const App = () => {
  return (
    <Provider theme={defaultTheme}>
      <Page />
    </Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
