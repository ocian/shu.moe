import { Container, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import pageList, { Page } from 'content'
import { getURLSearch } from 'utils'
import styles from './index.module.scss'
import Layout from 'components/layout'

export default function Post() {
  const location = useLocation()
  const [page, setPage] = useState<Page & { html: string }>(() => null)

  useEffect(() => {
    const search = getURLSearch(location.search)
    const list = pageList.filter((item) => item.title === search.title)
    if (list.length > 0) {
      list[0].md().then((module: any) => {
        setPage({ ...list[0], html: module.default })
        console.log(module)
      })
    } else {
      setPage(null)
    }
  }, [])
  return (
    <Layout>
      <Container>
        {page && (
          <>
            <Typography variant="h1" className={styles.title}>
              {page.title}
            </Typography>
            <Typography>
              <span dangerouslySetInnerHTML={{ __html: page.html }}></span>
            </Typography>
          </>
        )}
      </Container>
    </Layout>
  )
}
