import ReactDOM from 'react-dom'
import Theme from 'theme'
import Routes from 'routes'
import { Store } from 'store'
import '@fontsource/noto-serif-sc';

const App = () => (
  <Theme>
    <Store>
      <Routes />
    </Store>
  </Theme>
)

ReactDOM.render(<App />, document.querySelector('#root'))
