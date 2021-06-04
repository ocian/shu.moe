import config from "config"
import { useEffect } from "react"

export default function Initial() {
  useEffect(() => {
    document.title = config.title
  }, [])
  return <></>
}