import ReactDOM from 'react-dom'
import Theme from 'theme'
import Routes from 'routes'
import { Store } from 'store'
import '@fontsource/noto-serif-sc';
import Initial from 'initial';

const App = () => (
  <Theme>
    <Store>
      <Initial />
      <Routes />
    </Store>
  </Theme>
)

ReactDOM.render(<App />, document.querySelector('#root'))
