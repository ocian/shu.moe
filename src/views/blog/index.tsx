import { useState } from 'react'
import pageList from 'content/index'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [pages] = useState(() => pageList)

  return (
    <ul>
      {pages.map((item) => (
        <Link key={item.title} to={'/post?title=' + item.title}>
          <li>
            <p>{item.title}</p>
            <p>{item.summary}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}
