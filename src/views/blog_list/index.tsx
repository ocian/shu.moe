import { useState } from 'react'
import pageList from 'content/index'
import { Link, useHistory } from 'react-router-dom'
import Layout from 'components/layout'
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'
import styles from './index.module.scss'

export default function PageBlogList() {
  const history = useHistory()
  const [pages] = useState(() => pageList)

  function linkTo(path: string) {
    history.push(path)
  }

  return (
    <Layout>
      <List>
        {pages.map((page, index) => (
          <span key={page.title}>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    variant="h5"
                    onClick={() => linkTo('/post?slug=' + page.slug)}
                    className={styles.list_item_title}
                  >
                    {page.title}
                  </Typography>
                }
                secondary={page.summary}
              />
            </ListItem>
            <Divider component="li" />
          </span>
        ))}
      </List>
    </Layout>
  )
}
