const pageList = [
  {
    title: 'hello markdown',
    md: () =>
      import(/* webpackChunkName: "md.hello-world" */ './hello-markdown.md'),
    summary: '展示 Markdown 基础语法的表现形式',
  },
]

export type PageList = typeof pageList
export type Page = { title: string; md: () => Promise<any>; summary: string }
export default pageList
