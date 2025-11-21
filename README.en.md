# 全闪 NAS 产品对比 (All-Flash NAS Comparison)

这是一个基于 HTML 的静态演示文稿项目，旨在对比市面上四款主流的全闪存及混合型 NAS 产品。

## 包含产品

本项目详细对比了以下四款产品的规格、价格及定位：

1.  **铁威马 (TerraMaster) F8 SSD Plus**: 高性能全闪存 NAS，搭载 i3-N305 处理器。
2.  **飞牛零刻 (Feiniu Beelink) ME mini**: 高性价比入门全闪存 NAS。
3.  **极空间 (Zspace) Z4Pro+ 8G 版**: 均衡型混合存储 NAS。
4.  **绿联 (Ugreen) DXP4800 Plus**: 支持万兆网络的混合存储 NAS。

## 文件结构

- `全闪NAS产品对比.html`: **封面页**，项目主标题。
- `四大品牌NAS产品参数对比.html`: **核心对比页**，详细列出了价格、处理器、内存、网络等参数的横向对比表格。
- `总结与建议.html`: **结论页**，根据不同用户需求（性能、性价比、均衡）提供的购买建议。
- `[产品名].html`: 各个产品的单独详细介绍页面（如 `极空间Z4Pro+ 8G版.html` 等）。

## 使用说明

1.  直接使用浏览器（推荐 Chrome 或 Edge）打开任意 `.html` 文件即可预览。
2.  页面设计为 1280x720 分辨率的幻灯片形式。

## 技术细节

- 纯静态 HTML + CSS。
- 使用了 Google Fonts (Noto Sans SC) 和 Material Icons 图标库（需要联网加载）。
- 页面采用固定分辨率布局。

---

_最后更新时间: 2025 年 11 月_

# JSON Processing Library Comparison Platform

This is a frontend project for an in-depth comparative analysis report on JSON
processing libraries, built with Vite. It primarily compares the performance,
features, and use cases of the stream-json and large-json-reader-writer
libraries.

## Project Features

- Single-page application (SPA) built with Vite
- Modern responsive interface based on Tailwind CSS
- Includes interactive charts and detailed comparative data
- Provides navigation management functionality, supporting adding, editing, and
  deleting navigation items
- Uses axios for API interactions
- Loads Chart.js and Font Awesome via CDN

## Technology Stack

- Build tool: Vite 7.x
- CSS framework: Tailwind CSS 4.x
- HTTP client: axios
- Chart library: Chart.js (loaded via CDN)
- Icons: Font Awesome (loaded via CDN)

## Installation and Execution

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build production version
pnpm build

# Preview build output
pnpm preview
```

## Project Structure

- **index.html** - Main page containing the full report and interactive charts
- **src/main.js** - Core JavaScript logic, including navigation management and
  API interactions
- **src/style.css** - Global styles
- **src/counter.js** - Counter component
- **public/** - Static assets directory

## Development Server Configuration

The development server is configured with API proxies in `vite.config.js`:

- `/api` → `http://localhost:5000`
- `/static` → `http://localhost:5000`

## Notes

1. The project uses a Chinese interface; all text content should remain in
   Chinese.
2. The project is primarily a presentation-style report page, containing
   extensive pre-defined comparative data and charts.
3. Although the code includes API calls related to navigation management, the
   main content is embedded directly within the HTML.
4. Multiple CDN resources are used to load the chart and icon libraries.
