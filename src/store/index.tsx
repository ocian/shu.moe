import React from 'react'
import { PageList } from '../content'

interface Values {
  [key: string]: any
  pages: PageList
}

const Context = React.createContext(null)

export function Store(props: React.PropsWithChildren<{}>) {
  const [value, setValue] = React.useState<Values>({ pages: [] })

  function update(vals: Values) {
    setValue({ ...value, vals })
  }

  return (
    <Context.Provider value={{ value, update }}>
      {props.children}
    </Context.Provider>
  )
}

export default Context
