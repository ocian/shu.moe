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
        这里应该是有一些内容的，比如说我是前端啦，我很弱啦，但是完全想不出怎么写比较好，不如空着
      </Typography>
      <div style={{ textAlign: 'center' }}>
        <Button variant="outlined" onClick={() => linkTo('/blogs')}>
          Blogs
        </Button>
      </div>
    </Container>
  )
}
