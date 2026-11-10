---
title: 使用冰云 AI 中转站
published: 2026-10-02
description: 如何把冰云AI 对接到 Codex、Claude Code、Grok、DeepSeek Harness等工具
pinned: true
tags: [AI]
category: 冰云小店
slug: ai-gateway
series: "冰云小店"
lang: zh
translationKey: "shop/ai-gateway"
---

## 3个平台检测结果，`所有检测结果超过98%`
### hvoy.ai

- **Fable5**

![Fable5](https://cdn.nodeimage.com/i/flZpj71oWTEBbWEICYS2UENGIozrhF14.webp)

- **GPT5.6**

![GPT5.6](https://cdn.nodeimage.com/i/flZpj71oWTEBbWEICYS2UENGIozrhF14.webp)


### veridrop.org

- **Fable5**

![Fable5](https://cdn.nodeimage.com/i/kCekBxJ8FOFvIpbGRdUWNbefV1Fkze9v.webp)

- **GPT5.6**

![GPT5.6](https://cdn.nodeimage.com/i/mN2v5XGukYhWlEJ4vOkGj68eL79lh29h.webp)

### cctest.ai，此网站只支持检测Claude

- **Fable5**

![Fable5](https://cdn.nodeimage.com/i/F1HxWysqxiOGdRe4DFElWsQwcMSXfebF.webp)

## 第零步：根据自己的操作系统和使用习惯下载所需的官方软件

- [Code下载链接](https://openai.com/codex/)
![Code下载](https://cdn.nodeimage.com/i/EVhXkKFKDQbRF4gNByXTaHCAdQKpbD68.webp)

- [Claude下载链接](https://claude.com/download)
![Claude下载](https://cdn.nodeimage.com/i/1pRvjuv8O3QpnEtQxoZnnFfvkEXBoMSD.webp)

- [DeepSeek Harness下载链接](https://www.deepseek.com/harness/)
![DSH下载](https://cdn.nodeimage.com/i/omyxz8NEPWuzod25v6SLa8gulwK0XNN5.webp)

## 第一步：下载 Cockpit Tools，方便修改 `Codex` 、 `Claude`、`DeepSeek` 等配置文件

* [Cockpit Tools下载链接](https://github.com/jlcodes99/cockpit-tools/releases/tag/v1.3.61)
* 进入页面后往下滑，找到 **Assets** 下载区域。

![Linux、windows、Mac](https://cdn.nodeimage.com/i/MIWtBz4quYzCzwsCwq4ngaQlQXpXBSq7.webp)

---

## 第二步：配置 `Codex` 、 `Claude`、`Grok`、`DeepSeek`

## 打开 Cockpit Tools 进行配置

### Codex

![添加账号](https://cdn.nodeimage.com/i/cdPOXY9vpjQcVt6Bx0VamPS1435YbCXq.webp)

![记得创建密钥，获取地址+密钥](https://cdn.nodeimage.com/i/Zux6fDoqdaccf49HlY9mEf6tTzsgE0CN.webp)

![填写地址+密钥](https://cdn.nodeimage.com/i/RnpAHvWQ99Q1Br8bgWBW10Xsc2Tc8VHX.webp)

![保存](https://cdn.nodeimage.com/i/PZCWvvenHUMdhIYMYTDfRkHgXoSqgQfA.webp)

![启动](https://cdn.nodeimage.com/i/1oSJwz0voF0rbN3Zy9Z4CT1ZdALNkC1L.webp)

### Claude

![填写地址+密钥](https://cdn.nodeimage.com/i/i4b2zMPLjLTbZbf680hJdtLGxzC1LRtk.webp)


### Grok

![填写地址+密钥](https://cdn.nodeimage.com/i/8RGmupf6xaRHJwxXPSZXZSPt5Ia1Mop1.webp)

## 打开 DeepSeek Harness 进行配置

![添加](https://cdn.nodeimage.com/i/cflXkCAZVJpBEfyPGqU5Q6e6em0xp8ub.webp)

![填写地址+密钥](https://cdn.nodeimage.com/i/VBhH52FS5er63YgmHulzUjEYsbfL0vAY.webp)

![成功使用](https://cdn.nodeimage.com/i/peN6tTdyBoQMWfBYY5pDcw21YaDIeNQ6.webp)

---

## 第三步：打开 Codex 客户端测试和如何开启 Max 推理强度

![可以使用Codex](https://cdn.nodeimage.com/i/64HviLsHZXZJEyeXLxhIPIcvXiZEKVbE.webp)

![开启 Max](https://cdn.nodeimage.com/i/ATN447dWXhX7XABKEk6G8GXSFB1pLjn5.webp)

---

## 第四步：更多使用方式

除了 Codex 客户端，你还可以把冰云AI 用在更多开发工具里，例如：

* VSCode Codex 插件
* VSCode Claude 插件
* Codex 命令行
* Claude Code 命令行

### 安装 Codex CLI

```bash
npm i -g @openai/codex@latest
```

### 安装 Claude Code

```bash
npm i -g @anthropic-ai/claude-code@latest
```

---

## 📌 常见注意事项

> [!WARNING]
> 请不要把 API Key 发给他人，也不要上传到 GitHub、论坛、群聊或公开文档中。

> [!TIP]
> 如果某个客户端无法使用，可以优先检查以下几项：
>
> * API 地址是否填写完整
> * API Key 是否复制正确
> * Cockpit Tools 是否已经启用
> * 当前工具是否支持自定义 API 地址
> * 本地网络是否可以正常连接接口
