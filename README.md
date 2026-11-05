# whyistao.github.io

whyistao 的个人站点，使用 [VuePress 2](https://vuepress.vuejs.org/zh/) 构建并部署到 GitHub Pages。

## 修改应用名称

应用名称统一维护在 `docs/.vuepress/app.ts` 的 `APP_NAME` 中。修改后，首页标题、hero、导航栏、用户协议和隐私政策等所有引用位置都会自动更新。

Markdown 页面中统一使用 `{{APP_NAME}}` 占位符，构建时会自动替换为 `APP_NAME` 的值。

## 本地开发

```bash
npm install
npm run docs:dev
```

开发服务器默认运行在 <http://localhost:8080>。

## 构建

```bash
npm run docs:build
```

构建产物位于 `docs/.vuepress/dist`。

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

首次部署前，请在仓库 **Settings → Pages** 中将 **Source** 设置为 **GitHub Actions**。

## 目录结构

```text
.
├─ docs
│  ├─ .vuepress
│  │  ├─ app.ts           # 应用名称等全局常量
│  │  ├─ appNamePlugin.ts # 应用名称占位符替换插件
│  │  └─ config.ts        # VuePress 配置
│  ├─ README.md           # 首页
│  ├─ apps/word           # 单词挑战屋相关页面
│  └─ guide               # 指南
├─ .github/workflows
│  └─ deploy.yml          # GitHub Pages 部署工作流
└─ package.json
```
