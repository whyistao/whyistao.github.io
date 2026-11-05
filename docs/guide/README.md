# 指南

欢迎来到 whyistao 的个人站点。

这个站点使用 [VuePress 2](https://vuepress.vuejs.org/zh/) 搭建，内容以 Markdown 编写，构建后发布在 GitHub Pages 上。

## 目录结构

```text
.
├─ docs                    # 文档源目录
│  ├─ .vuepress            # VuePress 配置与资源
│  │  ├─ config.ts         # 站点配置文件
│  │  ├─ .cache/           # 缓存（自动生成，不提交）
│  │  ├─ .temp/            # 临时文件（自动生成，不提交）
│  │  └─ dist/             # 构建产物（自动生成，不提交）
│  ├─ README.md            # 站点首页
│  └─ guide/               # 指南
│     ├─ README.md
│     └─ markdown.md
├─ .github/workflows/      # GitHub Actions 部署配置
└─ package.json
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:8080）
npm run docs:dev

# 构建静态站点，产物位于 docs/.vuepress/dist
npm run docs:build
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

如果这是第一次部署，请前往仓库的 **Settings → Pages**，将 **Build and deployment** 的 **Source** 设置为 **GitHub Actions**。
