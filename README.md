# Gungnir

[![npm](https://img.shields.io/npm/v/vuepress-theme-gungnir.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/vuepress-theme-gungnir) [![docs](https://img.shields.io/badge/Docs-Gungnir-26A2FF?style=flat-square)](https://vuepress-theme-gungnir.vercel.app/docs/) [![license](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)](LICENSE)

一个基于 [VuePress](https://vuepress.vuejs.org/) 的博客主题。同时[这里](https://github.com/Renovamen/jekyll-theme-gungnir)还有一个它的 [Jekyll](https://jekyllrb.com/) 版本。

**Gungnir**，冈格尼尔，北欧神话中主神奥丁使用的用世界树树枝做成的武器，和本主题没有半毛钱关系但我就是用了这个名字。

🇬🇧 [English Intro](README.md) | 🇨🇳 中文说明

![preview](example/.vuepress/public/img/docs/gungnir.jpg)

&nbsp;

## 特性

- 简洁美观（反正这点我说是就是了）
- 响应式
- 多级目录
- 可切换的首页大图
- 明亮和夜间模式：识别系统的外观设置并自动切换模式，也支持用户手动切换
- 搜索
- 文章目录
- 多种代码高亮主题，支持代码块全屏（从 WordPress 主题 [Sakura](https://github.com/mashirozx/Sakura) 搬过来的功能）
- 基于 [Katex](https://github.com/KaTeX/KaTeX) 的公式支持
- 在文章中使用图表：[Chart.js](https://www.chartjs.org)、[Mermaid](https://mermaid-js.github.io)、[roughViz.js](https://github.com/jwilber/roughViz) 和 [markmap](https://github.com/gera2ld/markmap)
- 一些 Markdown 增强样式，目前支持：
  - 脚注（基于 [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)）
  - 高亮（基于 [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark)）
- 站点统计（[Google Analytics](https://analytics.google.com/) 和 [百度统计](https://tongji.baidu.com/)）
- 评论（基于 [Vssue](https://github.com/meteorlxy/vssue)）
- RSS
- 阅读时间估计
- 多语言支持（英文、简体中文）
- 带标签的归档页、链接页

&nbsp;

## 演示站点

这里有一些演示站点：

- [vuepress-theme-gungnir.vercel.app](https://vuepress-theme-gungnir.vercel.app/)
- [zxh.io](https://zxh.io)（我的博客）

&nbsp;

## 文档

[这里](https://vuepress-theme-gungnir.vercel.app/docs/)是本主题的文档。

&nbsp;

## 使用

### 配置

#### 侧边栏

#### 导航栏

### snippet

使用步骤：

1. 在 `settings` 中选择 `User Snippets`，选择 `markdown.json`。（如果不存在则需要自行创建）
2. 可以根据对应的 `prefix` 快速生成代码模板。

````json
{
  "bold": {
    "prefix": "bold",
    "body": "**$0**"
  },
  "highline": {
    "prefix": "highline",
    "body": "==$0=="
  },
  "reference": {
    "prefix": "reference",
    "body": "[^$0]"
  },
  "code": {
    "prefix": "code",
    "body": "`$1`$0"
  },
  "code:json": {
    "prefix": "code:json",
    "body": ["```json", "$0", "```"]
  },
  "code:javascript": {
    "prefix": "code:javascript",
    "body": ["```javascript", "$0", "```"]
  },
  "code:typescript": {
    "prefix": "code:typescript",
    "body": ["```typescript", "$0", "```"]
  },
  "code:jsx": {
    "prefix": "code:jsx",
    "body": ["```jsx", "$0", "```"]
  },
  "code:tsx": {
    "prefix": "code:tsx",
    "body": ["```tsx", "$0", "```"]
  },
  "code:css": {
    "prefix": "code:css",
    "body": ["```css", "$0", "```"]
  },
  "code:html": {
    "prefix": "code:html",
    "body": ["```css", "$0", "```"]
  },
  "container:info": {
    "prefix": "container:info",
    "body": ["::: info", "$0", ":::"]
  },
  "container:tip": {
    "prefix": "container:tip",
    "body": ["::: tip", "$0", ":::"]
  },
  "container:warning": {
    "prefix": "container:warning",
    "body": ["::: warning", "$0", ":::"]
  },
  "container:danger": {
    "prefix": "container:danger",
    "body": ["::: danger", "$0", ":::"]
  },
  "config:fe": {
    "prefix": "config:fe",
    "body": [
      "---",
      "title: 前端 - $1 # 博客标题（必须）",
      "subtitle: $2 # 博客副标题（可选）",
      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "header_style: image # 是否在博客中显示封面图：`image`（显示） / `text`（不显示）（可选，默认为 `text`）",
      "header_img: /img/home-bg/1.jpg # 博客封面图（必须，即使上一项选了 `text`，图片也需要在首页显示）",
      "header_mask: rgba(40, 57, 101, .4) # 封面图遮罩（可选）",
      "catalog: true # 是否启用右侧目录：false / true（可选，默认为 false）",
      "tags: # 博客标签",
      "  - $3",
      "---",
      "",
      "$0"
    ]
  },
  "config:fe-javascript": {
    "prefix": "config:fe-javascript",
    "body": [
      "---",
      "title: JavaScript - $1 # 博客标题（必须）",
      "subtitle: $2 # 博客副标题（可选）",
      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "header_style: image # 是否在博客中显示封面图：`image`（显示） / `text`（不显示）（可选，默认为 `text`）",
      "header_img: /img/home-bg/1.jpg # 博客封面图（必须，即使上一项选了 `text`，图片也需要在首页显示）",
      "header_mask: rgba(40, 57, 101, .4) # 封面图遮罩（可选）",
      "catalog: true # 是否启用右侧目录：false / true（可选，默认为 false）",
      "tags: # 博客标签",
      "  - $3",
      "---",
      "",
      "$0"
    ]
  },
  "config:fe-html": {
    "prefix": "config:fe-html",
    "body": [
      "---",
      "title: HTML - $1 # 博客标题（必须）",
      "subtitle: $2 # 博客副标题（可选）",
      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "header_style: image # 是否在博客中显示封面图：`image`（显示） / `text`（不显示）（可选，默认为 `text`）",
      "header_img: /img/home-bg/1.jpg # 博客封面图（必须，即使上一项选了 `text`，图片也需要在首页显示）",
      "header_mask: rgba(40, 57, 101, .4) # 封面图遮罩（可选）",
      "catalog: true # 是否启用右侧目录：false / true（可选，默认为 false）",
      "tags: # 博客标签",
      "  - $3",
      "---",
      "",
      "$0"
    ]
  },
  "config:fe-css": {
    "prefix": "config:fe-css",
    "body": [
      "---",
      "title: CSS - $1 # 博客标题（必须）",
      "subtitle: $2 # 博客副标题（可选）",
      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "header_style: image # 是否在博客中显示封面图：`image`（显示） / `text`（不显示）（可选，默认为 `text`）",
      "header_img: /img/home-bg/1.jpg # 博客封面图（必须，即使上一项选了 `text`，图片也需要在首页显示）",
      "header_mask: rgba(40, 57, 101, .4) # 封面图遮罩（可选）",
      "catalog: true # 是否启用右侧目录：false / true（可选，默认为 false）",
      "tags: # 博客标签",
      "  - $3",
      "---",
      "",
      "$0"
    ]
  },
  "config:framework": {
    "prefix": "config:framework",
    "body": [
      "---",
      "title: 框架 - $1 # 博客标题（必须）",
      "subtitle: $2 # 博客副标题（可选）",
      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "header_style: image # 是否在博客中显示封面图：`image`（显示） / `text`（不显示）（可选，默认为 `text`）",
      "header_img: /img/home-bg/1.jpg # 博客封面图（必须，即使上一项选了 `text`，图片也需要在首页显示）",
      "header_mask: rgba(40, 57, 101, .4) # 封面图遮罩（可选）",
      "catalog: true # 是否启用右侧目录：false / true（可选，默认为 false）",
      "tags: # 博客标签",
      "  - $3",
      "---",
      "",
      "$0"
    ]
  },
  "config:framework-react": {
    "prefix": "config:framework-react",
    "body": [
      "---",
      "title: React - $1 # 博客标题（必须）",
      "subtitle: $2 # 博客副标题（可选）",
      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "header_style: image # 是否在博客中显示封面图：`image`（显示） / `text`（不显示）（可选，默认为 `text`）",
      "header_img: /img/home-bg/1.jpg # 博客封面图（必须，即使上一项选了 `text`，图片也需要在首页显示）",
      "header_mask: rgba(40, 57, 101, .4) # 封面图遮罩（可选）",
      "catalog: true # 是否启用右侧目录：false / true（可选，默认为 false）",
      "tags: # 博客标签",
      "  - $3",
      "---",
      "",
      "$0"
    ]
  },
  "config:framework-vue": {
    "prefix": "config:framework-vue",
    "body": [
      "---",
      "title: Vue - $1 # 博客标题（必须）",
      "subtitle: $2 # 博客副标题（可选）",
      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "header_style: image # 是否在博客中显示封面图：`image`（显示） / `text`（不显示）（可选，默认为 `text`）",
      "header_img: /img/home-bg/1.jpg # 博客封面图（必须，即使上一项选了 `text`，图片也需要在首页显示）",
      "header_mask: rgba(40, 57, 101, .4) # 封面图遮罩（可选）",
      "catalog: true # 是否启用右侧目录：false / true（可选，默认为 false）",
      "tags: # 博客标签",
      "  - $3",
      "---",
      "",
      "$0"
    ]
  }
}
````

## FAQ

1. 针对 `prefix` 过长的问题。事实上 Vscode 运行输入部分 `prefix` 就可以帮我们推导出来。例如：`prefix = container:info`，只需要输入 `info` 就会有相应的代码提示。
2. 针对编译太慢的问题。这是由于 VuePress 采用 Webpack 进行编译，可能编译过程会比较慢。
3. 关于页面加载慢。页面初始化的时候会加载很多资源，可能会慢一点。
4. 关于预览问题。VuePress 支持热更新，但如果是新创建的文件或者修改了 `.md` 文件的 `config`，则需要重新编译。可以使用 Vscode 的一些插件进行预览，但其功能没有 VuePress 内置的 Markdown 解析器提供的完善。

## 开源协议

Gungnir 主题遵守 [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) 开源协议，详细细节见 [LICENSE](packages/theme-gungnir/LICENSE) 文件。
