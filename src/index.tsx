import { useEffect } from 'react'
import * as ReactDOM from 'react-dom'

import './styles/global.css'

const App = () => {
  useEffect(() => {
    const html = document.querySelector('html')
    const classes = 'spectrum spectrum--medium spectrum--light'.split(' ')
    html.classList.add(...classes)

    return () => {
      html.classList.remove(...classes)
    }
  }, [])
  return <div>app</div>
}

ReactDOM.render(<App />, document.querySelector('#root'))
