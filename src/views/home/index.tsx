import { Box, Button, Container, Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import styles from './index.module.scss'

export default function Home() {
  const history = useHistory()
  function linkTo(path: string) {
    history.push(path)
  }
  return (
    <Container className={styles.page_home}>
      <Typography>
        我是一个小杂工，没有方向，没有目标，努力了解这个世界，期望自己有一个充实的人生。
      </Typography>
      <div style={{ textAlign: 'center' }}>
        <Button variant="outlined" onClick={() => linkTo('/blogs')}>
          Blogs
        </Button>
      </div>
    </Container>
  )
}
