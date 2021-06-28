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
      <Typography className={styles.slogan}>
        互联网前端开发工程师，会在这个博客站写一点 demo，整理一些心得，写一点 web 程序。欢迎到 <a href="https://github.com/ocian/shu.moe/issues" target="_black">issue</a> 留言。
      </Typography>
      <div className={styles.layout_btn}>
        <Button variant="outlined" onClick={() => linkTo('/blogs')}>
          Blogs
        </Button>
      </div>
    </Container>
  )
}
