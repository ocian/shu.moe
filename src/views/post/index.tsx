import { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Module } from 'webpack'
import pageList, { Page } from '../../content'
import Context from '../../store'
import { getURLSearch } from '../../utils'

export default function Post() {
  const location = useLocation()
  const [page, setPage] = useState<Page & { html: string }>(() => null)

  useEffect(() => {
    const search = getURLSearch(location.search)
    const list = pageList.filter((item) => item.title === search.title)
    if (list.length > 0) {
      list[0].md().then((module: any) => {
        setPage({ ...list[0], html: module.default })
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
          <div dangerouslySetInnerHTML={{ __html: page.html }}></div>
        </>
      )}
    </div>
  )
}
