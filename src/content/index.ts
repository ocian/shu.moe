const pageList = [
  {
    slug: 'hello-markdown',
    title: 'markdown 渲染结果展示',
    md: () =>
      import(/* webpackChunkName: "md.hello-world" */ './hello-markdown.md'),
    summary: '展示 Markdown 基础语法的表现形式',
  },
  {
    slug: 'happy-js',
    title: 'JavaScript 要点整理',
    summary:
      '作为一个成熟的 JavaScript 工具人，应该学会面对超出预期的现象，理解产生麻烦的原因，整理合理不合情的情况，在反馈和反思中修改完善。',
    md: () => import(/* webpackChunkName: "md.happy-js" */ './happy-js.md'),
  },
]

export type PageList = typeof pageList
export type Page = { title: string; md: () => Promise<any>; summary: string }
export default pageList
