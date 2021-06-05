declare module '*.module.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.css'
declare module '*.scss'
declare module '*.md'
declare module '*.ttf'
declare module '*.jpg'