import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function LinkList(props: {
  list: { name: string; path: string }[]
}) {
  useEffect(() => {
    console.log('link-list', props.list)
  }, [])
  return (
    <ul>
      {props.list.map((item) => (
        <li key={item.name}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}
