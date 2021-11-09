import { useEffect } from 'react'
import * as ReactDOM from 'react-dom'

import './styles/global.css'
import { Home } from './views'

import './i18n'

const App = () => {
  // spectrum CSS
  useEffect(() => {
    const html = document.querySelector('html')
    const classes = 'spectrum spectrum--medium spectrum--light'.split(' ')
    html.classList.add(...classes)

    return () => {
      html.classList.remove(...classes)
    }
  }, [])

  return (
    <>
      <select>
        <option value="en">en</option>
        <option value="zh-CN">zh-CN</option>
      </select>
      <Home />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
