export function getURLSearch(search: string) {
  if (!search) return {}
  const list: {[key: string]: string} = {}
  search.replace(/[^\?&]+=[^\?&]+/g, match => {
    console.log(match)
    const [key, value] = match.split('=')
    list[key] = decodeURIComponent(value)
    return ''
  })
  return list
}
