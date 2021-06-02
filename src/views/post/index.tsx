import { Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import pageList, { Page } from 'content'
import { getURLSearch } from 'utils'

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
    <div>
      {page && (
        <>
          <h1>{page.title}</h1>
          <Typography>
            <span dangerouslySetInnerHTML={{ __html: page.html }}></span>
          </Typography>
        </>
      )}
    </div>
  )
}
