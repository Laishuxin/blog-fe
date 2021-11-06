const fs = require('fs')
const path = require('path')
// 将会插入到 <html>
//   <head></head>
// </html> 中
const head = [
  ['link', { rel: 'icon', href: '/img/logo.svg' }],
  [
    'meta',
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no',
    },
  ],
]
// console.log('env: ', process.env.NODE_EN)
// fs.writeFileSync(path.resolve)

const author = 'Laishuxin'
const personalInfo = {
  // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
  name: 'Cool Dragon',

  // 必须：头像，将在首页和移动端侧边栏显示
  avatar: '/img/avatar.jpeg',

  // 必须：个人简介，将在首页显示
  description: 'A cool dragon lost in human world.',

  // 可选：社交平台账号，将在首页和移动端侧边栏显示
  sns: {
    github: `${author}`, // Github
    // linkedin: 'xiaohan-zou-55bba0160', // 领英
    // facebook: 'renovamen.zou', // Facebook
    // twitter: 'renovamen_zxh', // 推特
    // zhihu: 'chao-neng-gui-su', // 知乎
    // weibo: 'your-weibo-id', // 新浪微博
    // email: 'renovamenzxh@gmail.com', // 邮箱
    // customize: [
    //   // 添加其他的社交平台
    //   {
    //     icon: 'ri-reddit-line', // 社交平台的图标
    //     link: 'https://www.reddit.com/user/oh-renovamen', // 主页链接
    //   },
    // ],
  },
}
const comment = {
  owner: 'Laishuxin',
  repo: 'blog-fe',
  clientId: 'a769a943fbbfb3bfe5a6',
  clientSecret: '7341727bf282c92027c9d35705dad1116a5d37a0',
}

module.exports = {
  title: author,
  base: '/blog-fe/',
  head,
  theme: 'gungnir',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    repo: `${author}/blog-fe`,
    docsDir: 'blog',
    editLinks: true,
    lastUpdated: true,
    hitokoto: true, // enable hitokoto (一言) or not?
    searchIcon: 'ri-search-2-line',
    languageIcon: 'hi-translate',
    comment: comment,
    analytics: {
      ga: 'UA-146858305-4',
      ba: '0958eaa31f4f4656f36bd33673332939',
    },
    // see also: https://vuepress-theme-gungnir.vercel.app/docs/plugins/
    katex: true,
    mermaid: true,
    chartjs: true,
    roughviz: true,
    markmap: true,
    mdPlus: {
      all: true,
    },
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        nav: require('./configs/nav'),
        sidebar: require('./configs/sidebar'),
      },
    },
    personalInfo,
    // 首页背景图
    homeHeaderImages: {
      local: [
        {
          path: '/img/home-bg/1.jpg',
          mask: 'rgba(40, 57, 101, .4)',
        },
        {
          path: '/img/home-bg/2.jpg',
          mask: 'rgb(251, 170, 152, .2)',
        },
        {
          path: '/img/home-bg/3.jpg',
          mask: 'rgba(68, 74, 83, .1)',
        },
        // {
        //   path: "/img/home-bg/4.jpg",
        //   mask: "rgba(19, 75, 50, .2)",
        // },
      ],
    },
    pages: {
      tags: {
        subtitle: 'Black Sheep Wall',
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)',
        },
      },
      links: {
        subtitle:
          'When you are looking at the stars, please put the brightest star shining night sky as my soul.',
        bgImage: {
          path: '/img/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)',
        },
      },
    },
    footer: `
      &copy; ${author} 2018-present
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,
  },
  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5'],
  },
}
