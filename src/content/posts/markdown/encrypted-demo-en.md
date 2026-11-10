---
title: Encrypted Posts in Firefly
published: 1970-01-07
description: A password-protected example demonstrating post encryption
tags: [Markdown]
category: 文章示例
password: "123456"
passwordHint: "The example password is 123456"
slug: encrypted-demo
series: "Markdown"
seriesOrder: 6
lang: en
translationKey: "markdown/encrypted-demo"
---

<a id="成功解锁了这篇文章" data-original-heading-id="成功解锁了这篇文章" data-translated-heading-id="you-have-unlocked-this-post"></a>
## You Have Unlocked This Post!

If you can read this, the password was correct and the post has been decrypted successfully.

<a id="功能说明" data-original-heading-id="功能说明" data-translated-heading-id="how-it-works"></a>
### How It Works

- **Build-time encryption**: Post content is encrypted with AES-256-GCM during the build. No plaintext content is included in the page source.
- **Client-side decryption**: After the visitor enters the correct password, the browser decrypts the content locally with the Web Crypto API.
- **Session caching**: The password is cached in `sessionStorage` for the current browser session, so refreshing the page does not require entering it again.
- **Expires on close**: Closing the browser clears the cache; the password must be entered again on the next visit.

> The password is `123456`, for testing only.

<a id="图片" data-original-heading-id="图片" data-translated-heading-id="images"></a>
## Images

![Firefly](../images/1.avif)

<a id="github-仓库卡片" data-original-heading-id="github-仓库卡片" data-translated-heading-id="github-repository-cards"></a>
## GitHub Repository Cards

::github{repo="CuteLeaf/Firefly"}

<a id="提示框" data-original-heading-id="提示框" data-translated-heading-id="callouts"></a>
## Callouts

> [!NOTE] NOTE
> Highlights information that readers should take into account.

> [!TIP] TIP
> Optional information that helps readers achieve better results.

> [!NOTE] Custom Title
> This is an example with a custom title.

<a id="数学公式" data-original-heading-id="数学公式" data-translated-heading-id="mathematical-formulas"></a>
## Mathematical Formulas
<a id="行内公式-inline" data-original-heading-id="行内公式-inline" data-translated-heading-id="inline-equations"></a>
### Inline Equations

Euler's identity $e^{i\pi} + 1 = 0$ is one of the most beautiful formulas in mathematics.

The mass-energy equivalence equation $E = mc^2$ is also widely known.

<a id="块级公式-block" data-original-heading-id="块级公式-block" data-translated-heading-id="display-equations"></a>
### Display Equations

Display equations are enclosed in pairs of `$$` delimiters and are centered.

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

<a id="化学方程式-chemical-equations" data-original-heading-id="化学方程式-chemical-equations" data-translated-heading-id="chemical-equations"></a>
### Chemical Equations

$$
\ce{CH4 + 2O2 -> CO2 + 2H2O}
$$

<a id="代码块" data-original-heading-id="代码块" data-translated-heading-id="code-blocks"></a>
## Code Blocks
<a id="常规语法高亮" data-original-heading-id="常规语法高亮" data-translated-heading-id="regular-syntax-highlighting"></a>
#### Regular Syntax Highlighting

```js
console.log('此代码有语法高亮!')
```

<a id="渲染-ansi-转义序列" data-original-heading-id="渲染-ansi-转义序列" data-translated-heading-id="rendering-ansi-escape-sequences"></a>
#### Rendering ANSI Escape Sequences

```ansi
ANSI colors:
- Regular: [31mRed[0m [32mGreen[0m [33mYellow[0m [34mBlue[0m [35mMagenta[0m [36mCyan[0m
- Bold:    [1;31mRed[0m [1;32mGreen[0m [1;33mYellow[0m [1;34mBlue[0m [1;35mMagenta[0m [1;36mCyan[0m
- Dimmed:  [2;31mRed[0m [2;32mGreen[0m [2;33mYellow[0m [2;34mBlue[0m [2;35mMagenta[0m [2;36mCyan[0m

256 colors (showing colors 160-177):
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m
[38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171[0m
[38;5;172m172 [38;5;173m173 [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177[0m

Full RGB colors:
[38;2;34;139;34mForestGreen - RGB(34, 139, 34)[0m

Text formatting: [1mBold[0m [2mDimmed[0m [3mItalic[0m [4mUnderline[0m
```


<a id="流程图" data-original-heading-id="流程图" data-translated-heading-id="flowcharts"></a>
## Flowcharts

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