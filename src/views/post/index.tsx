import { Container, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import pageList, { Page } from 'content'
import { getURLSearch } from 'utils'
import styles from './index.module.scss'
import Layout from 'components/layout'

export default function PagePost() {
  const location = useLocation()
  const [page, setPage] = useState<Page & { html: string }>(() => null)

  useEffect(() => {
    const search = getURLSearch(location.search)
    const list = pageList.filter((item) => item.slug === search.slug)
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
            <Typography variant="h3" className={styles.title}>
              {page.title}
            </Typography>

            <Typography>{page.summary}</Typography>
            <span
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: page.html }}
            ></span>
          </>
        )}
      </Container>
    </Layout>
  )
}
