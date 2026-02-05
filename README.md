# IT Tools (Customized Version)

本项目基于开源项目 [CorentinTh/it-tools](https://github.com/CorentinTh/it-tools) 进行二次开发与功能增强。

> **说明**：原项目是一个功能强大的在线开发工具箱。我的版本在此基础上针对个人使用习惯和特定场景进行了调整。


## 🚀 改进说明 (What's New)

本项目是 **it-tools** 的个人定制版本，主要在原版基础上进行了以下改进：

1. **主题色彩重构**：
   - 更改了全局主题颜色，打造了更加个性化的视觉体验。
   - 优化了暗黑/明亮模式下的色彩过渡。

2. **SEO 深度优化**：
   - 针对搜索引擎进行了元数据（Metadata）重写，大幅提升了网站的搜索排名潜力。
   - 优化了 TDK (Title, Description, Keywords) 策略，更精准地覆盖 IT 工具相关关键词。

3. **合规性说明**：
   - 根据 **GNU GPLv3** 协议，本项目保留原作者 @CorentinTh 的所有版权信息。
   - 本项目源码同样以 GPLv3 协议完全开放。

---


![logo](.github/logo.png)

Useful tools for developer and people working in IT. [Have a look !](https://it-tools.tech).

## Functionalities and roadmap

Please check the [issues](https://github.com/CorentinTh/it-tools/issues) to see if some feature listed to be implemented.

You have an idea of a tool? Submit a [feature request](https://github.com/CorentinTh/it-tools/issues/new?assignees=corentinth&labels=&template=feature_request.md&title=)!

## Self host

Self host solutions for your homelab

**From docker hub:**

```sh
docker run -d --name it-tools --restart unless-stopped -p 8080:80 corentinth/it-tools:latest
```

**From github packages:**

```sh
docker run -d --name it-tools --restart unless-stopped -p 8080:80 ghcr.io/corentinth/it-tools:latest
```

**Other solutions:**

- [Tipi](https://www.runtipi.io/docs/apps-available)
- [Unraid](https://unraid.net/community/apps?q=it-tools)

## Contribute

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Create a new tool

To create a new tool, there is a script that generate the boilerplate of the new tool, simply run:

```sh
pnpm run script:create-new-tool my-tool-name
```

It will create a directory in `src/tools` with the correct files, and a the import in `src/tools/index.ts`. You will just need to add the inported tool in the proper category and develop the tool.

## Credits

Coded with ❤️ by [Corentin Thomasset](//corentin-thomasset.fr).

This project is continuously deployed using [vercel.com](https://vercel.com).

<a href="https://www.producthunt.com/posts/it-tools?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-it&#0045;tools" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=345793&theme=light" alt="IT&#0032;Tools - Collection&#0032;of&#0032;handy&#0032;online&#0032;tools&#0032;for&#0032;devs&#0044;&#0032;with&#0032;great&#0032;UX | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
<a href="https://www.producthunt.com/posts/it-tools?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-it&#0045;tools" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=345793&theme=light&period=daily" alt="IT&#0032;Tools - Collection&#0032;of&#0032;handy&#0032;online&#0032;tools&#0032;for&#0032;devs&#0044;&#0032;with&#0032;great&#0032;UX | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## License

This project is under the [GNU GPLv3](LICENSE).


## 开源协议 (License)

本项目遵循 **GNU General Public License v3.0 (GPLv3)**。

1. **继承开源**：由于原项目采用 GPLv3 协议，本项目作为衍生作品，同样以 GPLv3 协议分发。
2. **版权保留**：保留原作者 [CorentinTh](https://github.com/CorentinTh) 的版权声明。
3. **权利与义务**：你可以自由地运行、学习、修改和分享本项目，但如果你分发本项目的修改版，必须同样保持开源并提供源代码。

详情请参阅项目中的 [LICENSE](https://github.com/waynew9527/it-tools/blob/main/LICENSE) 文件。