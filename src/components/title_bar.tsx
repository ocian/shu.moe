import {
  AppBar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core'
import config from 'config'
import { useHistory } from 'react-router-dom'
import { routes } from 'routes'
import LinkList from './link_list'

interface HideOnScrollProps {
  window?: () => Window
  children: React.ReactElement
}

interface TitleBarProps {
  domId?: string
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function TitleBar(props: TitleBarProps) {
  const history = useHistory()
  function linkTo(path: string) {
    history.push(path)
  }
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => linkTo(config.links.HOME)}
              className="cursor"
            >
              {config.title}
            </Typography>
            <LinkList list={routes} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id={props.domId || 'back-to-top-anchor'} />
    </>
  )
}
