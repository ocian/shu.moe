import * as ReactDOM from 'react-dom'
import { Provider, defaultTheme, Picker, Item } from '@adobe/react-spectrum'

import './styles/global.scss'
import { Home } from './views'

const App = () => {
  return (
    <>
      <Provider theme={defaultTheme}>
        <Home />
      </Provider>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
