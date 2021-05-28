import { Link } from 'react-router-dom'

export default function LinkList(props: {
  list: { name: string; path: string }[]
}) {
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
