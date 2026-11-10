---
title: Markdown Mermaid Diagrams
published: 1970-01-03
pinned: false
description: A Markdown blog post demonstrating Mermaid diagrams
tags: [Markdown]
category: 文章示例
slug: markdown-mermaid
series: "Markdown"
seriesOrder: 3
lang: en
translationKey: "markdown/markdown-mermaid"
---
<a id="markdown-中-mermaid-图表完整指南" data-original-heading-id="markdown-中-mermaid-图表完整指南" data-translated-heading-id="a-complete-guide-to-mermaid-diagrams-in-markdown"></a>
## A Complete Guide to Mermaid Diagrams in Markdown

This article demonstrates how to create diagrams in Markdown with Mermaid, including flowcharts, sequence diagrams, ER diagrams, class diagrams, state diagrams, XY charts, Gantt charts, mind maps, and more.

> Mermaid diagrams are powered by [Merman](https://github.com/Latias94/merman). Firefly generates separate light and dark static SVGs during the Astro build, so no Mermaid rendering runtime is loaded in the browser. Visit [Merman Playground](http://frankorz.com/merman/) to edit the syntax and preview the results interactively.

<a id="流程图示例" data-original-heading-id="流程图示例" data-translated-heading-id="flowchart-example"></a>
## Flowchart Example

Flowcharts are well suited to describing processes and algorithm steps.




```mermaid
graph TD
    A[开始] --> B{条件检查}
    B -->|是| C[处理步骤 1]
    B -->|否| D[处理步骤 2]
    C --> E[子过程]
    D --> E
    subgraph E [子过程详情]
        E1[子步骤 1] --> E2[子步骤 2]
        E2 --> E3[子步骤 3]
    end
    E --> F{另一个决策}
    F -->|选项 1| G[结果 1]
    F -->|选项 2| H[结果 2]
    F -->|选项 3| I[结果 3]
    G --> J[结束]
    H --> J
    I --> J
```

<a id="时序图示例" data-original-heading-id="时序图示例" data-translated-heading-id="sequence-diagram-example"></a>
## Sequence Diagram Example

Sequence diagrams show how objects interact over time.

```mermaid
sequenceDiagram
    participant User as 用户
    participant WebApp as 网页应用
    participant Server as 服务器
    participant Database as 数据库

    User->>WebApp: 提交登录请求
    WebApp->>Server: 发送认证请求
    Server->>Database: 查询用户凭据
    Database-->>Server: 返回用户数据
    Server-->>WebApp: 返回认证结果
    
    alt 认证成功
        WebApp->>User: 显示欢迎页面
        WebApp->>Server: 请求用户数据
        Server->>Database: 获取用户偏好
        Database-->>Server: 返回偏好设置
        Server-->>WebApp: 返回用户数据
        WebApp->>User: 加载个性化界面
    else 认证失败
        WebApp->>User: 显示错误消息
        WebApp->>User: 提示重新输入
    end
```

<a id="er-图示例" data-original-heading-id="er-图示例" data-translated-heading-id="er-diagram-example"></a>
## ER Diagram Example

ER diagrams, or entity-relationship diagrams, are useful for representing database structures.

```mermaid
erDiagram
    USER {
        int id PK
        string username
        string email
        datetime created_at
    }
    ARTICLE {
        int id PK
        string title
        text content
        datetime published
        int author_id FK
    }
    COMMENT {
        int id PK
        text content
        datetime created_at
        int user_id FK
        int article_id FK
    }
    CATEGORY {
        int id PK
        string name
        string description
    }
    USER ||--o{ ARTICLE : "writes"
    USER ||--o{ COMMENT : "posts"
    ARTICLE ||--o{ COMMENT : "has"
    ARTICLE }o--o{ CATEGORY : "belongs to"
```

<a id="类图示例" data-original-heading-id="类图示例" data-translated-heading-id="class-diagram-example"></a>
## Class Diagram Example

Class diagrams show the static structure of a system, including classes, properties, methods, and their relationships.

```mermaid
classDiagram
    class User {
        +String username
        +String password
        +String email
        +Boolean active
        +login()
        +logout()
        +updateProfile()
    }
    
    class Article {
        +String title
        +String content
        +Date publishDate
        +Boolean published
        +publish()
        +edit()
        +delete()
    }
    
    class Comment {
        +String content
        +Date commentDate
        +addComment()
        +deleteComment()
    }
    
    class Category {
        +String name
        +String description
        +addArticle()
        +removeArticle()
    }
    
    User "1" -- "*" Article : 写作
    User "1" -- "*" Comment : 发表
    Article "1" -- "*" Comment : 拥有
    Article "1" -- "*" Category : 属于
```

<a id="状态图示例" data-original-heading-id="状态图示例" data-translated-heading-id="state-diagram-example"></a>
## State Diagram Example

State diagrams show the sequence of states an object passes through during its lifecycle.

```mermaid
stateDiagram-v2
    [*] --> 草稿
    
    草稿 --> 审核中 : 提交
    审核中 --> 草稿 : 拒绝
    审核中 --> 已批准 : 批准
    已批准 --> 已发布 : 发布
    已发布 --> 已归档 : 归档
    已发布 --> 草稿 : 撤回
    
    state 已发布 {
        [*] --> 活跃
        活跃 --> 隐藏 : 临时隐藏
        隐藏 --> 活跃 : 恢复
        活跃 --> [*]
        隐藏 --> [*]
    }
    
    已归档 --> [*]
```

<a id="xy-图示例" data-original-heading-id="xy-图示例" data-translated-heading-id="xy-chart-example"></a>
## XY Chart Example

XY charts are useful for displaying trends and comparing data.

```mermaid
xychart-beta
    title "月度访问量趋势"
    x-axis [1月, 2月, 3月, 4月, 5月, 6月]
    y-axis "访问量" 0 --> 5000
    bar [2500, 3200, 4100, 3800, 4500, 4800]
    line [2500, 3200, 4100, 3800, 4500, 4800]
```

<a id="饼图示例" data-original-heading-id="饼图示例" data-translated-heading-id="pie-chart-example"></a>
## Pie Chart Example

Pie charts clearly show each part's proportion of a whole.

```mermaid
pie showData
    title 内容类型占比
    "技术文章" : 45
    "项目记录" : 30
    "生活随笔" : 15
    "其他" : 10
```

<a id="甘特图示例" data-original-heading-id="甘特图示例" data-translated-heading-id="gantt-chart-example"></a>
## Gantt Chart Example

Gantt charts show project phases, task dependencies, and current progress on a timeline.

```mermaid
gantt
    title 博客版本发布计划
    dateFormat YYYY-MM-DD
    axisFormat %m/%d
    section 准备
    需求整理 :done, req, 2026-07-01, 3d
    视觉设计 :done, design, after req, 4d
    section 开发
    功能实现 :active, dev, after design, 7d
    内容迁移 :content, after design, 5d
    section 发布
    构建检查 :test, after dev, 2d
    正式上线 :milestone, release, after test, 0d
```

<a id="思维导图示例" data-original-heading-id="思维导图示例" data-translated-heading-id="mind-map-example"></a>
## Mind Map Example

Mind maps help organize topic hierarchies and knowledge structures.

```mermaid
mindmap
  root((Firefly))
    内容
      技术文章
      生活记录
    体验
      搜索
      深色模式
      图表
    工程
      Astro
      Svelte
      Merman
```

<a id="时间线示例" data-original-heading-id="时间线示例" data-translated-heading-id="timeline-example"></a>
## Timeline Example

Timelines present important project events by year or phase.

```mermaid
timeline
    title Firefly 演进时间线
    2024 : 建立博客
         : 完成基础主题
    2025 : 加入搜索与图库
         : 完善内容系统
    2026 : 升级 Astro 7
         : 使用 Merman 渲染图表
```

<a id="用户旅程图示例" data-original-heading-id="用户旅程图示例" data-translated-heading-id="user-journey-example"></a>
## User Journey Example

User journey diagrams describe user actions and experience scores at different stages.

```mermaid
journey
    title 读者浏览文章的旅程
    section 发现内容
      打开首页: 5: 读者
      搜索主题: 4: 读者
    section 阅读文章
      浏览正文: 5: 读者
      查看图表: 5: 读者
    section 继续探索
      查看相关文章: 4: 读者
      分享文章: 3: 读者
```

<a id="git-图示例" data-original-heading-id="git-图示例" data-translated-heading-id="git-graph-example"></a>
## Git Graph Example

Git graphs clearly show branches, commits, and merge history.

```mermaid
gitGraph
    commit id: "init"
    branch feature
    checkout feature
    commit id: "add-diagrams"
    commit id: "polish-themes"
    checkout main
    merge feature id: "merge-feature"
    commit id: "release"
```

<a id="看板示例" data-original-heading-id="看板示例" data-translated-heading-id="kanban-example"></a>
## Kanban Example

Kanban boards show how tasks are distributed across workflow stages.

```mermaid
kanban
  todo[待办]
    task1[整理需求]
    task2[准备示例]
  doing[进行中]
    task3[接入 Merman]
  done[已完成]
    task4[服务端渲染]
    task5[亮暗主题]
```

<a id="sankey-图示例" data-original-heading-id="sankey-图示例" data-translated-heading-id="sankey-diagram-example"></a>
## Sankey Diagram Example

Sankey diagrams use link widths to represent the amount of flow between nodes.

```mermaid
sankey-beta
Home,Post list,1200
Home,Search,450
Post list,Post detail,900
Search,Post detail,320
Post detail,Related posts,260
Post detail,External shares,180
```

<a id="总结" data-original-heading-id="总结" data-translated-heading-id="summary"></a>
## Summary

Mermaid is a powerful tool for creating many kinds of diagrams in Markdown. This article demonstrated flowcharts, sequence diagrams, ER and class diagrams, state diagrams, XY and pie charts, Gantt charts, mind maps, timelines, user journeys, Git graphs, Kanban boards, and Sankey diagrams. These diagrams help explain complex concepts, processes, and data structures more clearly.

To use Mermaid, specify the mermaid language on a fenced code block and describe your diagram with its concise text syntax. Diagrams are automatically rendered to SVG at build time, without loading client-side JavaScript.

Try more syntax in [Merman Playground](http://frankorz.com/merman/) and then paste the diagram code into your article.
