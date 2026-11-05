# Markdown 示例

VuePress 支持在 Markdown 中使用 [Markdown 扩展语法](https://vuepress.vuejs.org/zh/guide/markdown.html) 和在页面中直接使用 Vue 组件。

## 标题

```md
# 一级标题
## 二级标题
### 三级标题
```

## 文本样式

**加粗**、*斜体*、~~删除线~~、`行内代码`。

## 列表

- 第一项
- 第二项
  - 嵌套项

1. 有序列表
2. 第二项

## 表格

| 功能 | 支持 |
| --- | --- |
| Markdown | ✅ |
| Vue 组件 | ✅ |
| 自定义主题 | ✅ |

## 代码块

```ts
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello VuePress',
})
```

## 提示容器

::: tip 提示
这是一个提示容器。
:::

::: warning 注意
这是一个警告容器。
:::

::: danger 危险
这是一个危险容器。
:::
