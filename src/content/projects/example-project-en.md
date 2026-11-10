---
title: "Example Project"
slug: example-project
published: 1970-01-01
draft: false
order: 100
description: "This document explains project collection frontmatter fields and status values for writing projects in src/content/projects/."
image: ""
status: "planning"
tags:
  - 文档
  - 指南
lang: en
translationKey: "example-project"
---

<a id="项目展示页使用指南" data-original-heading-id="项目展示页使用指南" data-translated-heading-id="project-page-guide"></a>
## Project Page Guide

Create a project by adding a `.md` or `.mdx` file under `src/content/projects/`. **The body serves as the project README** and appears at the bottom of its detail page. **Frontmatter** fields populate the listing card and the top of the detail page.

<a id="frontmatter-字段" data-original-heading-id="frontmatter-字段" data-translated-heading-id="frontmatter-fields"></a>
## Frontmatter Fields

| Field | Type | Description |
|---|---|---|
| `title` | string | Required. Project name. |
| `slug` | string | Optional. Used in the same way as post slugs. |
| `published` | date | Required. Publication or update date, such as `2025-10-01`. Used for sorting together with `order`. |
| `draft` | boolean | Optional; defaults to `false`. When `true`, the page is hidden in production builds but visible in development. |
| `order` | number | Optional. Manual sort weight: **higher values appear first**. When omitted, projects are sorted by `published` in descending order. |
| `description` | string | Optional. Card summary and detail-page description. |
| `image` | string | Optional. Cover image. Supports full URLs, public root paths (`/images/xxx.png`), and paths relative to this file, such as `images/xxx.png`. Leave empty to omit the cover. |
| `tags` | string[] | Optional. Tags displayed as `#tag` on listing and detail pages. |
| `link` | array | Optional. External-link buttons: `{ label, icon, value }`. Use an astro-icon name such as `fa7-brands:github`, an image URL, or leave `icon` empty to use the first letter of `label`. |
| `status` | string | Optional. Project status using a standard key listed below. |
| `lang` | string | Optional. Page language, such as `zh_CN`. |

<a id="完整示例" data-original-heading-id="完整示例" data-translated-heading-id="complete-example"></a>
### Complete Example

````yaml
---
title: "Firefly"
slug: firefly
published: 2025-10-01
draft: false
order: 100
description: "一个功能丰富的开源博客主题。"
image: "images/firefly.avif"
status: "published"
tags:
  - Astro
  - Svelte
link:
  - label: "GitHub"
    icon: "fa7-brands:github"
    value: "https://github.com/CuteLeaf/Firefly"
  - label: "文档"
    icon: "material-symbols:menu-book"
    value: "https://docs-firefly.cuteleaf.cn"
lang: ""
---
````

<a id="状态键值status" data-original-heading-id="状态键值status" data-translated-heading-id="status-keys-status"></a>
## Status Keys (status)

Use a **standard key** for `status`. The interface displays a localized label in the site language and automatically assigns a color and icon:

| key | Meaning | Localized example |
|---|---|---|
| `planning` | Planning | Planning |
| `developing` | In Development | In Development |
| `published` | Published | Published |
| `archived` | Archived | Archived |

- Specify only the standard key: `status: "published"`.
- Unknown or custom strings are displayed unchanged in neutral gray and are excluded from the listing page's status filters.

> The listing page supports **filtering by status** (all or an individual status) and **searching** project names, descriptions, and tags.
