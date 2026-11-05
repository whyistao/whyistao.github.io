import { readFileSync } from 'node:fs'
import type { Plugin } from 'vuepress/core'

import { APP_NAME, APP_NAME_PLACEHOLDER } from './app'

const replaceAppName = (content: string): string =>
  content.replaceAll(APP_NAME_PLACEHOLDER, APP_NAME)

/**
 * 在 VuePress 解析 Markdown 之前替换应用名称占位符。
 * 因此 frontmatter（title、description、heroText 等）和正文都能生效。
 */
export const appNamePlugin = (): Plugin => ({
  name: 'app-name',

  extendsPageOptions(pageOptions) {
    if (typeof pageOptions.content === 'string') {
      pageOptions.content = replaceAppName(pageOptions.content)
      return
    }

    if (pageOptions.filePath) {
      const content = readFileSync(pageOptions.filePath, 'utf8')
      if (content.includes(APP_NAME_PLACEHOLDER)) {
        pageOptions.content = replaceAppName(content)
      }
    }
  },
})
