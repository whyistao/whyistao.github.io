import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

import { APP_NAME } from './app'
import { appNamePlugin } from './appNamePlugin'

const wordAppIconPath = fileURLToPath(
  new URL('../apps/word/icon.png', import.meta.url),
)

/**
 * 将应用图标复制到构建产物中。
 * 图标源文件与页面放在同一目录（docs/apps/word），
 * 构建后可通过 /apps/word/icon.png 访问。
 */
const wordAppIconPlugin = {
  name: 'word-app-icon',
  apply: 'build' as const,
  generateBundle() {
    this.emitFile({
      type: 'asset' as const,
      fileName: 'apps/word/icon.png',
      source: readFileSync(wordAppIconPath),
    })
  },
}

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Hello',
  description: 'whyistao 的个人站点',

  bundler: viteBundler({
    viteOptions: {
      plugins: [wordAppIconPlugin],
    },
  }),

  plugins: [appNamePlugin()],

  theme: defaultTheme({
    // 顶部导航栏
    navbar: [
      { text: '首页', link: '/' },
      { text: APP_NAME, link: '/apps/word/' },
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
