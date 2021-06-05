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

export default function Blog() {
  const history = useHistory()
  const [pages] = useState(() => pageList)

  function linkTo(path: string) {
    history.push(path)
  }

  return (
    <Layout>
      <List>
        {pages.map((item, index) => (
          <>
            {index !== 0 && (
              <Divider
                key={index + '_divider'}
                variant="inset"
                component="li"
              />
            )}
            <ListItem key={item.title + '_item'}>
              <ListItemText
                primary={
                  <Typography
                    variant="h5"
                    onClick={() => linkTo('/post?title=' + item.title)}
                    className={styles.list_item_title}
                  >
                    {item.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography>{item.summary}</Typography>
                  </>
                }
              />
            </ListItem>
          </>
        ))}
      </List>
    </Layout>
  )
}
