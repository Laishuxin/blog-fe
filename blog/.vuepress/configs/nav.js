module.exports = [
  {
    text: '首页',
    link: '/',
    icon: 'fa-fort-awesome',
  },
  {
    text: '标签',
    link: '/tags/',
    icon: 'fa-tag',
  },
  {
    text: '链接',
    link: '/links/',
    icon: 'fa-satellite-dish',
  },
  //! 注意: link 字段末尾的斜杆 /。
  // 不加斜杆表示一个 .md 文件，加了斜杆会去读取**改目录下的 README.md**文件
  {
    text: '前端基础',
    icon: 'io-logo-web-component',
    items: [
      {
        text: 'JavaScript',
        link: '/frontend/javascript/',
        icon: 'fa-js',
      },
      {
        text: 'HTML',
        link: '/frontend/html/',
        icon: 'fa-html5',
      },
      {
        text: 'CSS',
        link: '/frontend/css/',
        icon: 'fa-css3',
      },
    ],
  },
  {
    text: '框架',
    icon: 'fa-briefcase',
    items: [
      {
        text: 'Vue',
        link: '/framework/vue/',
        icon: 'fa-vuejs',
      },
      {
        text: 'React',
        link: '/framework/react/',
        icon: 'fa-react',
      },
    ],
  },
]
