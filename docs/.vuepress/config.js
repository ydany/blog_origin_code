module.exports = {
  title: '木易の后花园哈哈哈', // 页面title
  base: '/blog/', // 页面相对路径
  description: 'Just playing around',
  head: [['link', { rel: 'icon', href: '/icon.jpg' }]],
  themeConfig: {
    nav: [
      // 这个地方配置导航栏
      { text: 'Home', link: '/' },
      { text: '读书', link: '/read/' },
      { text: '电视剧', link: '/tv/' },
      {
        text: '前端三剑客',
        items: [
          { text: 'HTML', link: '/html/' },
          { text: 'CSS', link: '/CSS/' },
          { text: 'JavaScript', link: '/JavaScript/' }
        ]
      }
    ],
    search: false,
    searchMaxSuggestions: 10,
    sidebar: {
      //配置左侧菜单栏
      '/read/': [
        {
          title: '读书笔记',
          children: [
            {
              title: '《程序员的 38 堂成长课》8-14 读书笔记',
              path: '/read/read2'
            },
            {
              title: '《程序员的 38 堂成长课》1-7 读书笔记',
              path: '/read/read1'
            }
          ]
        }
      ],
      '/tv/':[
        {
          title: '电视剧',
          children: [
            {
              title: '剑来',
              path: '/tv/jl'
            },
          ]
        }
      ],
      '/html/': [
        {
          title: 'Html文档',
          children: [{ title: '占位地', path: '/html/h51' }]
        }
      ]
    }
  }
}
