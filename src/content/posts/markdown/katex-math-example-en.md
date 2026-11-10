---
title: KaTeX Math Examples
published: 1970-01-05
description: A demonstration of KaTeX support in Firefly, including inline equations, display equations, and advanced mathematical notation
tags: [Markdown]
category: 文章示例
image: api
slug: katex-math-example
series: "Markdown"
seriesOrder: 6
lang: en
translationKey: "markdown/katex-math-example"
---

This article demonstrates how the [Firefly](https://github.com/CuteLeaf/Firefly) theme renders mathematical formulas with KaTeX.

<a id="行内公式-inline" data-original-heading-id="行内公式-inline" data-translated-heading-id="inline-equations"></a>
## Inline Equations

Inline equations are enclosed in single `$` delimiters.

For example: Euler's identity $e^{i\pi} + 1 = 0$ is one of the most beautiful formulas in mathematics.

The mass-energy equivalence equation $E = mc^2$ is also widely known.

<a id="块级公式-block" data-original-heading-id="块级公式-block" data-translated-heading-id="display-equations"></a>
## Display Equations

Display equations are enclosed in pairs of `$$` delimiters and are centered.

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

<a id="复杂示例" data-original-heading-id="复杂示例" data-translated-heading-id="advanced-examples"></a>
## Advanced Examples

<a id="矩阵-matrices" data-original-heading-id="矩阵-matrices" data-translated-heading-id="matrices"></a>
### Matrices

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
\alpha & \beta \\
\gamma & \delta
\end{pmatrix} =
\begin{pmatrix}
a\alpha + b\gamma & a\beta + b\delta \\
c\alpha + d\gamma & c\beta + d\delta
\end{pmatrix}
$$

<a id="极限与求和-limits-and-sums" data-original-heading-id="极限与求和-limits-and-sums" data-translated-heading-id="limits-and-sums"></a>
### Limits and Sums

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

<a id="麦克斯韦方程组-maxwells-equations" data-original-heading-id="麦克斯韦方程组-maxwells-equations" data-translated-heading-id="maxwells-equations"></a>
### Maxwell's Equations

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$

<a id="化学方程式-chemical-equations" data-original-heading-id="化学方程式-chemical-equations" data-translated-heading-id="chemical-equations"></a>
### Chemical Equations

$$
\ce{CH4 + 2O2 -> CO2 + 2H2O}
$$

<a id="更多符号" data-original-heading-id="更多符号" data-translated-heading-id="more-symbols"></a>
## More Symbols

| Symbol | Code | Rendered Result |
| :--- | :--- | :--- |
| Alpha | `\alpha` | $\alpha$ |
| Beta | `\beta` | $\beta$ |
| Gamma | `\Gamma` | $\Gamma$ |
| Pi | `\pi` | $\pi$ |
| Infinity | `\infty` | $\infty$ |
| Right Arrow | `\rightarrow` | $\rightarrow$ |
| Partial | `\partial` | $\partial$ |

For more KaTeX syntax, see [KaTeX Supported Functions](https://katex.org/docs/supported.html).
