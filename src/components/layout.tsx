import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import ScrollTop from './scroll_top'
import TitleBar from './title_bar'

export default function Layout(props: React.PropsWithChildren<{}>) {
  return (
    <div>
      <TitleBar domId="back-to-top-anchor" />
      {props.children}
      <ScrollTop domId="back-to-top-anchor" />
    </div>
  )
}
