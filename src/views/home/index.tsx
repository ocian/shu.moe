import { Box, Button, Container, Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import styles from './index.module.scss'

export default function PageHome() {
  const history = useHistory()
  function linkTo(path: string) {
    history.push(path)
  }
  return (
    <Container className={styles.page_home}>
      <Typography>
        互联网前端开发工程师，专注于 UI 交互、软件工程，对操作系统和各种程序都很感兴趣，期望对这个世界有更多的了解。
      </Typography>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Button variant="outlined" onClick={() => linkTo('/blogs')}>
          Blogs
        </Button>
      </div>
    </Container>
  )
}
