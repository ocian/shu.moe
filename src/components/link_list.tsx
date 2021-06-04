import { Button, Menu } from '@material-ui/core'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function LinkList(props: {
  list: { name: string; path: string; hidden?: boolean }[]
}) {
  const history = useHistory()
  useEffect(() => {
    console.log('link-list', props.list)
  }, [])

  function linkTo(path: string) {
    history.push(path)
  }

  return (
    <>
      {props.list.map(
        (item) =>
          !item.hidden && (
            <Button color="inherit" key={item.name} onClick={() => linkTo(item.path)}>
              {item.name}
            </Button>
          )
      )}
    </>
  )
}
