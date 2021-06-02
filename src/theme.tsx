import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core'

export default function Theme(props: React.PropsWithChildren<{}>) {
  let theme = createTheme({
    typography: {
      fontFamily: 'Noto Serif SC, Arial',
    },
  })

  // ...
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  )
}
