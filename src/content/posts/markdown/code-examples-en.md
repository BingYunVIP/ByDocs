---
title: Code Block Examples
published: 1970-01-06
pinned: false
description: How Expressive Code blocks look in Markdown
tags: [Markdown]
category: 文章示例
image: ../images/firefly3.avif
slug: code-examples
series: "Markdown"
seriesOrder: 5
lang: en
translationKey: "markdown/code-examples"
---

This article explores how to display code blocks with [Expressive Code](https://expressive-code.com/). The examples are based on its official documentation, where you can find more details.

<a id="表达性代码" data-original-heading-id="表达性代码" data-translated-heading-id="expressive-code"></a>
## Expressive Code

<a id="语法高亮" data-original-heading-id="语法高亮" data-translated-heading-id="syntax-highlighting"></a>
### Syntax Highlighting

[Syntax Highlighting](https://expressive-code.com/key-features/syntax-highlighting/)

<a id="常规语法高亮" data-original-heading-id="常规语法高亮" data-translated-heading-id="regular-syntax-highlighting"></a>
#### Regular Syntax Highlighting

```js
console.log('此代码有语法高亮!')
```

<a id="渲染-ansi-转义序列" data-original-heading-id="渲染-ansi-转义序列" data-translated-heading-id="rendering-ansi-escape-sequences"></a>
#### Rendering ANSI Escape Sequences

```ansi
[1;4mStandard ANSI colors:[0m
- Dimmed:     [2;30m Black [2;31m Red [2;32m Green [2;33m Yellow [2;34m Blue [2;35m Magenta [2;36m Cyan [2;37m White [0m
- Foreground: [30m Black [31m Red [32m Green [33m Yellow [34m Blue [35m Magenta [36m Cyan [37m White [0m
- Background: [40m Black [41m Red [42m Green [43m Yellow [44m Blue [45m Magenta [46m Cyan [47m White [0m
- Reversed:   [7;30m Black [7;31m Red [7;32m Green [7;33m Yellow [7;34m Blue [7;35m Magenta [7;36m Cyan [7;37m White [0m

[1;4m8-bit colors (showing colors 160-171 as an example):[0m
- Dimmed:     [2;38;5;160m 160 [2;38;5;161m 161 [2;38;5;162m 162 [2;38;5;163m 163 [2;38;5;164m 164 [2;38;5;165m 165 [2;38;5;166m 166 [2;38;5;167m 167 [2;38;5;168m 168 [2;38;5;169m 169 [2;38;5;170m 170 [2;38;5;171m 171 [0m
- Foreground: [38;5;160m 160 [38;5;161m 161 [38;5;162m 162 [38;5;163m 163 [38;5;164m 164 [38;5;165m 165 [38;5;166m 166 [38;5;167m 167 [38;5;168m 168 [38;5;169m 169 [38;5;170m 170 [38;5;171m 171 [0m
- Background: [48;5;160m 160 [48;5;161m 161 [48;5;162m 162 [48;5;163m 163 [48;5;164m 164 [48;5;165m 165 [48;5;166m 166 [48;5;167m 167 [48;5;168m 168 [48;5;169m 169 [48;5;170m 170 [48;5;171m 171 [0m
- Reversed:   [7;38;5;160m 160 [7;38;5;161m 161 [7;38;5;162m 162 [7;38;5;163m 163 [7;38;5;164m 164 [7;38;5;165m 165 [7;38;5;166m 166 [7;38;5;167m 167 [7;38;5;168m 168 [7;38;5;169m 169 [7;38;5;170m 170 [7;38;5;171m 171 [0m

[1;4m24-bit colors (full RGB):[0m
- Dimmed:     [2;38;2;34;139;34m ForestGreen - RGB(34,139,34) [2;38;2;102;51;153m RebeccaPurple - RGB(102,51,153) [0m
- Foreground: [38;2;34;139;34m ForestGreen - RGB(34,139,34) [38;2;102;51;153m RebeccaPurple - RGB(102,51,153) [0m
- Background: [48;2;34;139;34m ForestGreen - RGB(34,139,34) [48;2;102;51;153m RebeccaPurple - RGB(102,51,153) [0m
- Reversed:   [7;38;2;34;139;34m ForestGreen - RGB(34,139,34) [7;38;2;102;51;153m RebeccaPurple - RGB(102,51,153) [0m

[1;4mFont styles:[0m
- Default
- [1mBold[0m
- [2mDimmed[0m
- [3mItalic[0m
- [4mUnderline[0m
- [7mReversed[0m
- [9mStrikethrough[0m
```

<a id="编辑器和终端框架" data-original-heading-id="编辑器和终端框架" data-translated-heading-id="editor-and-terminal-frames"></a>
### Editor and Terminal Frames

[Editor and Terminal Frames](https://expressive-code.com/key-features/frames/)

<a id="代码编辑器框架" data-original-heading-id="代码编辑器框架" data-translated-heading-id="code-editor-frames"></a>
#### Code Editor Frames

```js title="my-test-file.js"
console.log('标题属性示例')
```

---

```html
<!-- src/content/index.html -->
<div>文件名注释示例</div>
```

<a id="终端框架" data-original-heading-id="终端框架" data-translated-heading-id="terminal-frames"></a>
#### Terminal Frames

```bash
echo "此终端框架没有标题"
```

---

```powershell title="PowerShell 终端示例"
Write-Output "这个有标题!"
```

<a id="覆盖框架类型" data-original-heading-id="覆盖框架类型" data-translated-heading-id="overriding-frame-types"></a>
#### Overriding Frame Types

```sh frame="none"
echo "看，没有框架!"
```

---

```ps frame="code" title="PowerShell Profile.ps1"
# 如果不覆盖，这将是一个终端框架
function Watch-Tail { Get-Content -Tail 20 -Wait $args }
New-Alias tail Watch-Tail
```

<a id="文本和行标记" data-original-heading-id="文本和行标记" data-translated-heading-id="text-and-line-markers"></a>
### Text and Line Markers

[Text and Line Markers](https://expressive-code.com/key-features/text-markers/)

<a id="标记整行和行范围" data-original-heading-id="标记整行和行范围" data-translated-heading-id="marking-entire-lines-and-line-ranges"></a>
#### Marking Entire Lines and Line Ranges

```js {1, 4, 7-8}
// 第1行 - 通过行号定位
// 第2行
// 第3行
// 第4行 - 通过行号定位
// 第5行
// 第6行
// 第7行 - 通过范围 "7-8" 定位
// 第8行 - 通过范围 "7-8" 定位
```

<a id="选择行标记类型-mark-ins-del" data-original-heading-id="选择行标记类型-mark-ins-del" data-translated-heading-id="choosing-a-line-marker-type-mark-ins-del"></a>
#### Choosing a Line Marker Type (mark, ins, del)

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log('此行标记为已删除')
  // 此行和下一行标记为已插入
  console.log('这是第二个插入行')

  return '此行使用中性默认标记类型'
}
```

<a id="为行标记添加标签" data-original-heading-id="为行标记添加标签" data-translated-heading-id="adding-labels-to-line-markers"></a>
#### Adding Labels to Line Markers

```jsx {"1":5} del={"2":7-8} ins={"3":10-12}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}
  value={value}
  className={buttonClassName}
  disabled={disabled}
  active={active}
>
  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

<a id="在单独行上添加长标签" data-original-heading-id="在单独行上添加长标签" data-translated-heading-id="adding-long-labels-on-separate-lines"></a>
#### Adding Long Labels on Separate Lines

```jsx {"1. Provide the value prop here:":5-6} del={"2. Remove the disabled and active states:":8-10} ins={"3. Add this to render the children inside the button:":12-15}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}

  value={value}
  className={buttonClassName}

  disabled={disabled}
  active={active}
>

  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

<a id="使用类似-diff-的语法" data-original-heading-id="使用类似-diff-的语法" data-translated-heading-id="using-diff-like-syntax"></a>
#### Using Diff-like Syntax

```diff
+此行将标记为已插入
-此行将标记为已删除
这是常规行
```

---

```diff
--- a/README.md
+++ b/README.md
@@ -1,3 +1,4 @@
+this is an actual diff file
-all contents will remain unmodified
 no whitespace will be removed either
```

<a id="结合语法高亮和类似-diff-的语法" data-original-heading-id="结合语法高亮和类似-diff-的语法" data-translated-heading-id="combining-syntax-highlighting-with-diff-like-syntax"></a>
#### Combining Syntax Highlighting with Diff-like Syntax

```diff lang="js"
  function thisIsJavaScript() {
    // 整个块都会以 JavaScript 高亮显示，
    // 并且我们仍然可以为其添加 diff 标记！
-   console.log('要删除的旧代码')
+   console.log('新的闪亮代码！')
  }
```

<a id="标记行内的单独文本" data-original-heading-id="标记行内的单独文本" data-translated-heading-id="marking-individual-text-within-a-line"></a>
#### Marking Individual Text Within a Line

```js "given text"
function demo() {
  // 标记行内的任何给定文本
  return '支持给定文本的多个匹配项';
}
```

<a id="正则表达式" data-original-heading-id="正则表达式" data-translated-heading-id="regular-expressions"></a>
#### Regular Expressions

```ts /ye[sp]/
console.log('单词 yes 和 yep 将被标记。')
```

<a id="转义正斜杠" data-original-heading-id="转义正斜杠" data-translated-heading-id="escaping-forward-slashes"></a>
#### Escaping Forward Slashes

```sh /\/ho.*\//
echo "Test" > /home/test.txt
```

<a id="选择内联标记类型-mark-ins-del" data-original-heading-id="选择内联标记类型-mark-ins-del" data-translated-heading-id="choosing-an-inline-marker-type-mark-ins-del"></a>
#### Choosing an Inline Marker Type (mark, ins, del)

```js "return true;" ins="inserted" del="deleted"
function demo() {
  console.log('这些是插入和删除的标记类型');
  // return 语句使用默认标记类型
  return true;
}
```

<a id="自动换行" data-original-heading-id="自动换行" data-translated-heading-id="word-wrap"></a>
### Word Wrap

[Word Wrap](https://expressive-code.com/key-features/word-wrap/)

<a id="为每个块配置自动换行" data-original-heading-id="为每个块配置自动换行" data-translated-heading-id="configuring-word-wrap-per-block"></a>
#### Configuring Word Wrap Per Block

```js wrap
// 启用换行的示例
function getLongString() {
  return '这是一个非常长的字符串，除非容器极宽，否则很可能无法适应可用空间'
}
```

---

```js wrap=false
// wrap=false 的示例
function getLongString() {
  return '这是一个非常长的字符串，除非容器极宽，否则很可能无法适应可用空间'
}
```

<a id="配置换行的缩进" data-original-heading-id="配置换行的缩进" data-translated-heading-id="configuring-wrapped-line-indentation"></a>
#### Configuring Wrapped Line Indentation

```js wrap preserveIndent
// preserveIndent 示例（默认启用）
function getLongString() {
  return '这是一个非常长的字符串，除非容器极宽，否则很可能无法适应可用空间'
}
```

---

```js wrap preserveIndent=false
// preserveIndent=false 的示例
function getLongString() {
  return '这是一个非常长的字符串，除非容器极宽，否则很可能无法适应可用空间'
}
```

<a id="可折叠部分" data-original-heading-id="可折叠部分" data-translated-heading-id="collapsible-sections"></a>
## Collapsible Sections

[Collapsible Sections](https://expressive-code.com/plugins/collapsible-sections/)

```js collapse={1-5, 12-14, 21-24}
// 所有这些样板设置代码将被折叠
import { someBoilerplateEngine } from '@example/some-boilerplate'
import { evenMoreBoilerplate } from '@example/even-more-boilerplate'

const engine = someBoilerplateEngine(evenMoreBoilerplate())

// 这部分代码默认可见
engine.doSomething(1, 2, 3, calcFn)

function calcFn() {
  // 您可以有多个折叠部分
  const a = 1
  const b = 2
  const c = a + b

  // 这将保持可见
  console.log(`计算结果: ${a} + ${b} = ${c}`)
  return c
}

// 直到块末尾的所有代码将再次被折叠
engine.closeConnection()
engine.freeMemory()
engine.shutdown({ reason: '示例样板代码结束' })
```

<a id="行号" data-original-heading-id="行号" data-translated-heading-id="line-numbers"></a>
## Line Numbers

[Line Numbers](https://expressive-code.com/plugins/line-numbers/)

<a id="为每个块显示行号" data-original-heading-id="为每个块显示行号" data-translated-heading-id="showing-line-numbers-per-block"></a>
### Showing Line Numbers Per Block

```js showLineNumbers
// 此代码块将显示行号
console.log('来自第2行的问候!')
console.log('我在第3行')
```

---

```js showLineNumbers=false
// 此块禁用行号
console.log('你好?')
console.log('抱歉，你知道我在第几行吗?')
```

<a id="更改起始行号" data-original-heading-id="更改起始行号" data-translated-heading-id="changing-the-starting-line-number"></a>
### Changing the Starting Line Number

```js showLineNumbers startLineNumber=5
console.log('来自第5行的问候!')
console.log('我在第6行')
```

<a id="tab-代码块" data-original-heading-id="tab-代码块" data-translated-heading-id="tabbed-code-blocks"></a>
## Tabbed Code Blocks

Powered by [rehype-code-group](https://github.com/ITZSHOAIB/rehype-code-group), using the same syntax as [VitePress code groups](https://vitepress.dev/guide/markdown#code-groups): wrap multiple code blocks in `::: code-group labels=[...]` to combine them into a set of tabs.

> [!NOTE]
> The comma-separated labels in `labels=[...]` correspond to the blocks in order. The space between `:::` and `code-group` is required.

<a id="基本用法" data-original-heading-id="基本用法" data-translated-heading-id="basic-usage"></a>
### Basic Usage

````markdown
::: code-group labels=[code.js, code.py, code.html]

```js
export function greet(name) {
  return `Hello, ${name}!`;
}
```

```py
def greet(name):
    return f"Hello, {name}!"
```

```html
<p>Hello, world!</p>
```

:::
````

Rendered Result:

::: code-group labels=[code.js, code.py, code.html]

```js
export function greet(name) {
  return `Hello, ${name}!`;
}
```

```py
def greet(name):
    return f"Hello, {name}!"
```

```html
<p>Hello, world!</p>
```

:::

<a id="标签中使用-emoji" data-original-heading-id="标签中使用-emoji" data-translated-heading-id="using-emoji-in-tab-labels"></a>
### Using Emoji in Tab Labels

Labels support [emoji shortcodes](https://github.com/omnidan/node-emoji#readme), which are converted to emoji at build time:

````markdown
::: code-group labels=[:package: npm, :package: pnpm, :yarn: yarn]
````

::: code-group labels=[:package: npm, :package: pnpm, :yarn: yarn]

```bash
npm create astro@latest
```

```bash
pnpm create astro@latest
```

```bash
yarn create astro
```

:::

<a id="与其他代码块特性组合" data-original-heading-id="与其他代码块特性组合" data-translated-heading-id="combining-with-other-code-block-features"></a>
### Combining with Other Code Block Features

Blocks inside a group remain regular Expressive Code blocks. Titles, line numbers, line markers, collapsing, terminal frames, and other features work as usual.

::: code-group labels=[Configuration, Terminal, Collapsible]

```js title="astro.config.mjs" showLineNumbers {2} ins={3}
export default {
  theme: "firefly",
  codeGroup: true,
};
```

```bash title="部署"
pnpm build && pnpm preview
```

```js collapse={1-3}
// 这三行默认折叠
import { a } from "a";
import { b } from "b";

console.log(a, b);
```

:::

<a id="不止是代码块" data-original-heading-id="不止是代码块" data-translated-heading-id="more-than-code-blocks"></a>
### More Than Code Blocks

Tabs can contain any content, such as text, lists, or images:

::: code-group labels=[Description, List]

This is an ordinary paragraph.

- List item one
- List item two

:::

> [!TIP]
> The tab bar is generated at build time and initially opens the first tab. Switch tabs with the mouse or the <kbd>←</kbd>, <kbd>→</kbd>, <kbd>Home</kbd>, and <kbd>End</kbd> keys.

<a id="在提醒框内使用mdx-组件" data-original-heading-id="在提醒框内使用mdx-组件" data-translated-heading-id="using-tabs-in-admonitions-mdx-components"></a>
### Using Tabs in Admonitions (MDX Components)

Both `::: code-group` and Docusaurus-style admonitions such as `::: tip` use `:::` containers. Because micromark-directive requires nested containers to use different numbers of colons, `::: code-group` **cannot be nested inside admonitions such as `::: tip`**; the entire block will fail to render.

Use the MDX [`TabGroup`](@/components/common/TabGroup.svelte) component instead. MDX components bypass `:::` directive parsing, work inside or outside admonitions, and make it easier to add more UI components later. Change the extension to `.mdx` and import components from the shared [`@/components/firefly-mdx`](@/components/firefly-mdx.ts) entry point:

````mdx
import { TabGroup } from "@/components/firefly-mdx";

:::tip

<TabGroup labels={["test.js", "test.py"]} client:load>
  ```js
  console.log(1)
  ```

  ```py
  print("hello world")
  ```
</TabGroup>

:::
````

:::tip
- The `labels` array assigns a label to each code block in the same order
- Use `client:load` to enable interactive tab switching
:::
