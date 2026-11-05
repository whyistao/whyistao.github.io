# whyistao.github.io

whyistao 的个人站点，使用 [VuePress 2](https://vuepress.vuejs.org/zh/) 构建并部署到 GitHub Pages。

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
│  │  └─ config.ts        # VuePress 配置
│  ├─ README.md           # 首页
│  └─ guide               # 指南
├─ .github/workflows
│  └─ deploy.yml          # GitHub Pages 部署工作流
└─ package.json
```
