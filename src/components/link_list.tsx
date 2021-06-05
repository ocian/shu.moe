import { Button, Menu } from '@material-ui/core'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

interface LinkListProps {
  list: { name: string; path: string; hidden?: boolean }[]
}

export default function LinkList(props: LinkListProps) {
  const history = useHistory()

  function linkTo(path: string) {
    history.push(path)
  }

  return (
    <>
      {props.list.map(
        (item) =>
          !item.hidden && (
            <Button
              color="inherit"
              key={item.name}
              onClick={() => linkTo(item.path)}
            >
              {item.name}
            </Button>
          )
      )}
    </>
  )
}
