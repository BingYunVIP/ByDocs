---
title: Markdown Tutorial
published: 1970-01-01
pinned: false
description: A concise Markdown blog example
tags: [Markdown]
category: 文章示例
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
slug: markdown-tutorial
series: "Markdown"
seriesOrder: 1
lang: en
translationKey: "markdown/markdown-tutorial"
---

This example shows how to write Markdown files. It covers the core syntax and common GitHub Flavored Markdown (GFM) extensions.

- [Block Elements](#block-elements)
    - [Paragraphs and Line Breaks](#paragraphs-and-line-breaks)
    - [Headings](#headers)
    - [Blockquotes](#blockquotes)
    - [Lists](#lists)
    - [Code Blocks](#code-blocks)
    - [Horizontal Rules](#horizontal-rules)
    - [Tables](#table)
- [Inline Elements](#span-elements)
    - [Links](#links)
    - [Emphasis](#emphasis)
    - [Inline Code](#code)
    - [Images](#images)
    - [Strikethrough](#strikethrough)
- [Miscellaneous](#miscellaneous)
    - [Automatic Links](#automatic-links)
    - [Backslash Escapes](#backslash-escapes)
- [Inline HTML](#inline-html)

<a id="block-elements"></a>
<a id="块级元素" data-original-heading-id="块级元素" data-translated-heading-id="block-elements"></a>
## Block Elements

<a id="paragraphs-and-line-breaks"></a>
<a id="段落与换行" data-original-heading-id="段落与换行" data-translated-heading-id="paragraphs-and-line-breaks"></a>
### Paragraphs and Line Breaks

<a id="段落" data-original-heading-id="段落" data-translated-heading-id="paragraphs"></a>
#### Paragraphs

HTML tags: `<p>`

Separate paragraphs with one or more blank lines. A line containing only **spaces** or **tabs** also counts as a blank line.

Code:

    This will be
    inline.

    This is second paragraph.

Preview:

---

This will be
inline.

This is second paragraph.

---

<a id="换行" data-original-heading-id="换行" data-translated-heading-id="line-breaks"></a>
#### Line Breaks

HTML tags: `<br />`

Add **two or more spaces** at the end of a line to create a line break.

Code:

    This will be not
    inline.

Preview:

---

This will be not  
inline.

---

<a id="headers"></a>
<a id="标题" data-original-heading-id="标题" data-translated-heading-id="headings"></a>
### Headings

Markdown supports two heading styles: Setext and ATX.

#### Setext

HTML tags: `<h1>`，`<h2>`

Underline a heading with any number of **equals signs (=)** for `<h1>` or **hyphens (-)** for `<h2>`.

Code:

    This is an H1
    =============
    This is an H2
    -------------

Preview:

---

# This is an H1

## This is an H2

---

#### atx

HTML tags: `<h1>`，`<h2>`，`<h3>`，`<h4>`，`<h5>`，`<h6>`

Start a line with one to six **hash signs (#)** for headings from `<h1>` through `<h6>`.

Code:

    # This is an H1
    ## This is an H2
    ###### This is an H6

Preview:

---

# This is an H1

## This is an H2

###### This is an H6

---

Optionally, you can close an ATX heading with hash signs. The number at the end **does not have to match** the number at the start.

Code:

    # This is an H1 #
    ## This is an H2 ##
    ### This is an H3 ######

Preview:

---

# This is an H1

## This is an H2

### This is an H3

---

<a id="blockquotes"></a>
<a id="引用" data-original-heading-id="引用" data-translated-heading-id="blockquotes"></a>
### Blockquotes

HTML tags: `<blockquote>`

Markdown uses the email-style **>** marker for blockquotes. For best results, wrap the text manually and begin each line with >.

Code:

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    >
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > id sem consectetuer libero luctus adipiscing.

Preview:

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

Markdown also permits lazy blockquotes: in a manually wrapped paragraph, only the first line needs a > marker.

Code:

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.

Preview:

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

Blockquotes can be nested by adding another level of > markers.

Code:

    > This is the first level of quoting.
    >
    > > This is nested blockquote.
    >
    > Back to the first level.

Preview:

---

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

---

Blockquotes can contain other Markdown elements, including headings, lists, and code blocks.

Code:

    > ## This is a header.
    >
    > 1.   This is the first list item.
    > 2.   This is the second list item.
    >
    > Here's some example code:
    >
    >     return shell_exec("echo $input | $markdown_script");

Preview:

---

> ## This is a header.
>
> 1.  This is the first list item.
> 2.  This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");

---

<a id="lists"></a>
<a id="列表" data-original-heading-id="列表" data-translated-heading-id="lists"></a>
### Lists

Markdown supports ordered (numbered) and unordered (bulleted) lists.

<a id="无序列表" data-original-heading-id="无序列表" data-translated-heading-id="unordered-lists"></a>
#### Unordered Lists

HTML tags: `<ul>`

Unordered lists can use **asterisks (\*)**, **plus signs (+)**, or **hyphens (-)**.

Code:

    *   Red
    *   Green
    *   Blue

Preview:

---

- Red
- Green
- Blue

---

Equivalent to:

Code:

    +   Red
    +   Green
    +   Blue

Or:

Code:

    -   Red
    -   Green
    -   Blue

<a id="有序列表" data-original-heading-id="有序列表" data-translated-heading-id="ordered-lists"></a>
#### Ordered Lists

HTML tags: `<ol>`

Ordered lists use numbers followed by periods:

Code:

    1.  Bird
    2.  McHale
    3.  Parish

Preview:

---

1.  Bird
2.  McHale
3.  Parish

---

Note: text such as the following can accidentally start an ordered list:

Code:

    1986. What a great season.

Preview:

---

1986. What a great season.

---

Use a **backslash escape (\\)** before the period:

Code:

    1986\. What a great season.

Preview:

---

1986\. What a great season.

---

<a id="列表中的缩进内容" data-original-heading-id="列表中的缩进内容" data-translated-heading-id="indented-content-in-lists"></a>
#### Indented Content in Lists

<a id="列表项里的引用" data-original-heading-id="列表项里的引用" data-translated-heading-id="blockquotes-in-list-items"></a>
##### Blockquotes in List Items

To place a blockquote inside a list item, indent its > markers:

Code:

    *   A list item with a blockquote:

        > This is a blockquote
        > inside a list item.

Preview:

---

- A list item with a blockquote:

  > This is a blockquote
  > inside a list item.

---

<a id="列表项里的代码块" data-original-heading-id="列表项里的代码块" data-translated-heading-id="code-blocks-in-list-items"></a>
##### Code Blocks in List Items

To place a code block inside a list item, indent it twice: **eight spaces** or **two tabs**:

Code:

    *   A list item with a code block:

            <code goes here>

Preview:

---

- A list item with a code block:

      <code goes here>

---

<a id="嵌套列表" data-original-heading-id="嵌套列表" data-translated-heading-id="nested-lists"></a>
##### Nested Lists

Code:

    * A
      * A1
      * A2
    * B
    * C

Preview:

---

- A
  - A1
  - A2
- B
- C

---

<a id="code-blocks"></a>
<a id="代码块" data-original-heading-id="代码块" data-translated-heading-id="code-blocks"></a>
### Code Blocks

HTML tags: `<pre>`

Indent each line of a code block by at least **four spaces** or **one tab**.

Code:

    This is a normal paragraph:

        This is a code block.

Preview:

---

This is a normal paragraph:

    This is a code block.

---

A code block continues until an unindented line or the end of the document.

Inside a code block, **ampersands (&)** and **angle brackets (< >)** are automatically converted to HTML entities.

Code:

        <div class="footer">
            &copy; 2004 Foo Corporation
        </div>

Preview:

---

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

---

The fenced code blocks and syntax highlighting described below are extensions that provide additional ways to write code blocks.

<a id="围栏代码块" data-original-heading-id="围栏代码块" data-translated-heading-id="fenced-code-blocks"></a>
#### Fenced Code Blocks

Enclose the content in matching backtick fences, as shown below, to avoid indenting it by four spaces.

Code:

    Here's an example:

    ```
    function test() {
      console.log("notice the blank line before this function?");
    }
    ```

Preview:

---

Here's an example:

```
function test() {
  console.log("notice the blank line before this function?");
}
```

---

<a id="语法高亮" data-original-heading-id="语法高亮" data-translated-heading-id="syntax-highlighting"></a>
#### Syntax Highlighting

Add an optional language identifier after the opening code fence to enable syntax highlighting; see the list of supported languages.

Code:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

Preview:

---

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

---

<a id="horizontal-rules"></a>
<a id="分割线水平线" data-original-heading-id="分割线水平线" data-translated-heading-id="horizontal-rules"></a>
### Horizontal Rules

HTML tags: `<hr />`
Place **three or more hyphens (-), asterisks (\*), or underscores (\_)** on a line. Spaces between the characters are allowed.

Code:

    * * *
    ***
    *****
    - - -
    ---------------------------------------
    ___

Preview:

---

---

---

---

---

---

---

---

<a id="table"></a>
<a id="表格" data-original-heading-id="表格" data-translated-heading-id="tables"></a>
### Tables

HTML tags: `<table>`

This is an extension to the basic syntax.

Separate columns with **pipes (|)** and the header row with **hyphens (-)**. Use **colons (:)** to specify alignment.

The outer **pipes (|)** and alignment markers are optional. Each column needs at least **three hyphens** in the header separator.

Code:

```
| Left | Center | Right |
|:-----|:------:|------:|
|aaa   |bbb     |ccc    |
|ddd   |eee     |fff    |

 A | B
---|---
123|456


A |B
--|--
12|45
```

Preview:

---

| Left | Center | Right |
| :--- | :----: | ----: |
| aaa  |  bbb   |   ccc |
| ddd  |  eee   |   fff |

| A   | B   |
| --- | --- |
| 123 | 456 |

| A   | B   |
| --- | --- |
| 12  | 45  |

---

<a id="span-elements"></a>
<a id="内联元素" data-original-heading-id="内联元素" data-translated-heading-id="inline-elements"></a>
## Inline Elements

<a id="links"></a>
<a id="链接" data-original-heading-id="链接" data-translated-heading-id="links"></a>
### Links

HTML tags: `<a>`

Markdown supports inline links and reference-style links.

<a id="行内链接" data-original-heading-id="行内链接" data-translated-heading-id="inline-links"></a>
#### Inline Links

Inline link syntax: `[text](URL "title")`

The title is optional.

Code:

    This is [an example](http://example.com/ "Title") inline link.

    [This link](http://example.net/) has no title attribute.

Preview:

---

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

---

Use relative paths to refer to local resources on the same site:

Code:

    See my [About](/about/) page for details.

Preview:

---

See my [About](/about/) page for details.

---

<a id="引用式链接" data-original-heading-id="引用式链接" data-translated-heading-id="reference-links"></a>
#### Reference Links

You can define link references in advance with `[id]: URL "title"`.

The title is optional here too. Refer to the link with `[text][id]`.

Code:

    [id]: http://example.com/  "Optional Title Here"
    This is [an example][id] reference-style link.

Preview:

---

[id]: http://example.com/ "Optional Title Here"

This is [an example][id] reference-style link.

---

Explanation:

- The square brackets contain the reference identifier (**case-insensitive**, with up to three leading spaces allowed);
- followed by a colon;
- followed by one or more spaces or tabs;
- followed by the link URL;
- the URL may optionally be enclosed in angle brackets;
- and an optional title may follow, enclosed in quotation marks or parentheses.

The following three definitions are equivalent:

Code:

    [foo]: http://example.com/  "Optional Title Here"
    [foo]: http://example.com/  'Optional Title Here'
    [foo]: http://example.com/  (Optional Title Here)
    [foo]: <http://example.com/>  "Optional Title Here"

With empty reference brackets, the link text itself serves as the reference name.

Code:

    [Google]: http://google.com/
    [Google][]

Preview:

---

[Google]: http://google.com/

[Google][]

---

<a id="emphasis"></a>
<a id="强调" data-original-heading-id="强调" data-translated-heading-id="emphasis"></a>
### Emphasis

HTML tags: `<em>`，`<strong>`

Markdown uses **asterisks (\*)** or **underscores (\_)** for emphasis. **One delimiter** produces `<em>`; **two delimiters** produce `<strong>`.

Code:

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

Preview:

---

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

---

If the delimiters have spaces on their inner sides, they are treated as ordinary characters rather than emphasis.

Escape the character with a backslash:

Code:

    \*this text is surrounded by literal asterisks\*

Preview:

---

\*this text is surrounded by literal asterisks\*

---

<a id="code"></a>
<a id="行内代码" data-original-heading-id="行内代码" data-translated-heading-id="inline-code"></a>
### Inline Code

HTML tags: `<code>`

Enclose the text in **backticks (`)**.

Code:

    Use the `printf()` function.

Preview:

---

Use the `printf()` function.

---

If inline code contains a backtick, use **multiple backticks** as the delimiters:

Code:

    ``There is a literal backtick (`) here.``

Preview:

---

``There is a literal backtick (`) here.``

---

The inline code delimiters may contain a space at each end, making it possible to place a backtick at the start or end of the code:

Code:

    A single backtick in a code span: `` ` ``

    A backtick-delimited string in a code span: `` `foo` ``

Preview:

---

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

---

<a id="images"></a>
<a id="图片" data-original-heading-id="图片" data-translated-heading-id="images"></a>
### Images

HTML tags: `<img />`

Markdown image syntax resembles link syntax and supports both inline and reference-style images.

<a id="行内图片" data-original-heading-id="行内图片" data-translated-heading-id="inline-images"></a>
#### Inline Images

Inline image syntax: `![alt text](URL "title")`

The title is optional.

Code:

    ![Alt text](/path/to/img.jpg)

    ![Alt text](/path/to/img.jpg "Optional title")

Preview:

---

![Alt text](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp)

![Alt text](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "Optional title")

---

Explanation:

- An exclamation mark !;
- followed by square brackets containing the image's alternative text;
- followed by parentheses containing the image URL or path and an optional quoted title.

<a id="引用式图片" data-original-heading-id="引用式图片" data-translated-heading-id="reference-images"></a>
#### Reference Images

Reference image syntax: `![alt text][id]`

Code:

    [img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp  "Optional title attribute"
    ![Alt text][img id]

Preview:

---

[img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "Optional title attribute"

![Alt text][img id]

---

<a id="strikethrough"></a>
<a id="删除线" data-original-heading-id="删除线" data-translated-heading-id="strikethrough"></a>
### Strikethrough

HTML tags: `<del>`

This is an extension to the basic syntax.

GFM adds strikethrough syntax.

Code:

```
~~Mistaken text.~~
```

Preview:

---

~~Mistaken text.~~

---

<a id="miscellaneous"></a>
<a id="杂项" data-original-heading-id="杂项" data-translated-heading-id="miscellaneous"></a>
## Miscellaneous

<a id="automatic-links"></a>
<a id="自动链接" data-original-heading-id="自动链接" data-translated-heading-id="automatic-links"></a>
### Automatic Links

Markdown provides a convenient way to create automatic links for URLs and email addresses: enclose them in angle brackets.

Code:

    <http://example.com/>

    <address@example.com>

Preview:

---

<http://example.com/>

<address@example.com>

---

GFM automatically detects standard URLs and turns them into links.

Code:

```
https://github.com/emn178/markdown
```

Preview:

---

https://github.com/emn178/markdown

---

<a id="backslash-escapes"></a>
<a id="反斜杠转义" data-original-heading-id="反斜杠转义" data-translated-heading-id="backslash-escapes"></a>
### Backslash Escapes

Use backslashes to escape characters that otherwise have special meaning in Markdown, displaying them literally instead.

Code:

    \*literal asterisks\*

Preview:

---

\*literal asterisks\*

---

The following characters can be backslash-escaped to display them literally:

Code:

    \   backslash
    `   backtick
    *   asterisk
    _   underscore
    {}  curly braces
    []  square brackets
    ()  parentheses
    #   hash mark
    +   plus sign
    -   minus sign (hyphen)
    .   dot
    !   exclamation mark

<a id="inline-html"></a>
<a id="内联-html" data-original-heading-id="内联-html" data-translated-heading-id="inline-html"></a>
## Inline HTML

For markup not covered by Markdown, use raw HTML directly. There is no need to declare a switch from Markdown to HTML; simply write the tags.

Code:

    This is a regular paragraph.

    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>

    This is another regular paragraph.

Preview:

---

This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.

---

Note that Markdown syntax is not processed inside **block-level HTML elements**.

Unlike block-level elements, **inline HTML elements** do allow Markdown syntax to be processed.

Code:

    <span>**Work**</span>

    <div>
        **No Work**
    </div>

Preview:

---

<span>**Work**</span>

<div>
  **No Work**
</div>
***