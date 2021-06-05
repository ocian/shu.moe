// import _message from './data.local'

let message = {
  person: {
    name: '小树',
    subtitle: 'Web 前端开发',
  },
  concat: {
    tel: '155****0750',
    email: 'nvcsadjkojf@outlook.com',
    github: 'ocian',
    base: '北京/上海 远程',
  },
  leftContent: [
    {
      title: '教育经历',
      list: [['嘉兴学院 2013 - 2017', '计算机科学与技术专业', '本科肄业']],
    },
    {
      title: '工作经历',
      list: [['2020.04.20 - 现在', '商米科技 * 上海', 'Web 前端开发']],
    },
    {
      title: '技能',
      list: [['⽹络开发: TypeScript, React,Node.js, Go', '运维相关: NGINX']],
    },
  ],
  projects: [
    {
      title: '个人博客网站',
      subtitle: 'https://github.com/ocian/shu.moe',
      tags: ['React', 'TypeScript', 'webpack'],
      list: ['我配置了完整易用的 react 模版。刚刚起步，目前只有这些。'],
    },
    {
      title: '商米云平台',
      subtitle: '商米公司设备管控平台',
      tags: ['React', 'TypeScript', 'webpack', 'Go'],
      list: [
        '商米是一家商用设备公司，云平台包含远程控制设备、OTA 升级、系统发版等功能，为渠道商和部门合作提供方便。',
        '我负责系统方面的业务逻辑开发，包括管理后台、统计数据呈现；参与一部分接口开发和功能设计。',
      ],
    },
  ],
  rightBox: [
    {
      title: '个人期望',
      list: [
        '我过往的工作平平无奇，是个前端都做过。我希望摆脱这种情况：写增删改查的页面和移动端适配看起来没有竞争力，会导致面试很难。',
      ],
    },
  ],
}

// if (_message) {
//   message = _message
// }

export default message
