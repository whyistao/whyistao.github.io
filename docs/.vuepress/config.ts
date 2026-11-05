import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'whyistao',
  description: 'whyistao 的个人站点',

  bundler: viteBundler(),

  theme: defaultTheme({
    // 顶部导航栏
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: ['/guide/README.md', '/guide/markdown.md'],
        },
      ],
    },

    // 仓库信息
    repo: 'whyistao/whyistao.github.io',
    repoLabel: 'GitHub',

    // 页面元信息
    lastUpdated: true,
    contributors: false,
    editLink: false,

    // 返回首页按钮
    backToHome: '返回首页',
  }),
})
