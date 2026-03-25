export interface BlogPost {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  content: string;
  contentEn: string;
  keywords: string[];
  keywordsEn: string[];
  publishedAt: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-generate-strong-password',
    title: '如何生成强密码',
    titleEn: 'How to Generate Strong Passwords',
    description: '学习如何创建安全且难以破解的强密码，保护您的在线账户安全。',
    descriptionEn: 'Learn how to create secure and hard-to-crack passwords to protect your online accounts.',
    content: `
# 如何生成强密码

在当今数字时代，拥有一个强密码是保护您在线账户安全的第一步。本文将教您如何创建安全且难以破解的强密码。

## 什么是强密码？

强密码应具备以下特点：
- 长度至少 12 个字符
- 包含大写字母、小写字母、数字和特殊字符
- 不包含个人信息（如生日、姓名）
- 不使用常见单词或短语

## 如何生成强密码？

### 方法一：使用密码生成器

IT Tools 提供了强大的密码生成器工具，可以帮助您创建随机且安全的密码。

### 方法二：使用助记符

选择一个容易记住的句子，取每个单词的首字母，并添加数字和特殊字符。

例如："我喜欢在早上喝咖啡！" -> "Wxh@ZcHkf1!"

## 密码管理建议

1. **使用密码管理器** - 不要在多个网站使用相同密码
2. **启用双因素认证** - 为您的账户添加额外的安全层
3. **定期更换密码** - 特别是重要账户的密码

## 立即体验

使用我们的 [密码生成器](/token-generator) 工具创建安全的随机密码，或使用 [密码强度分析器](/password-strength-analyser) 检查您现有密码的安全性。
    `,
    contentEn: `
# How to Generate Strong Passwords

In today's digital age, having a strong password is the first step in protecting your online accounts. This article will teach you how to create secure and hard-to-crack passwords.

## What is a Strong Password?

A strong password should have:
- At least 12 characters
- Include uppercase letters, lowercase letters, numbers, and special characters
- Not contain personal information (like birthdays, names)
- Not use common words or phrases

## How to Generate Strong Passwords?

### Method 1: Use a Password Generator

IT Tools provides a powerful password generator to help you create random and secure passwords.

### Method 2: Use a Mnemonic

Choose an easy-to-remember sentence, take the first letter of each word, and add numbers and special characters.

Example: "I love drinking coffee in the morning!" -> "Wxh@Dc1tM!"

## Password Management Tips

1. **Use a Password Manager** - Don't use the same password across multiple sites
2. **Enable Two-Factor Authentication** - Add an extra layer of security to your accounts
3. **Change Passwords Regularly** - Especially for important accounts

## Try It Now

Use our [Password Generator](/token-generator) to create secure random passwords, or use the [Password Strength Analyzer](/password-strength-analyser) to check your existing passwords.
    `,
    keywords: ['强密码', '密码生成', '网络安全', '账户安全', '密码强度'],
    keywordsEn: ['password', 'password generator', 'cybersecurity', 'account security', 'password strength'],
    publishedAt: '2024-01-15',
    author: 'IT Tools Team',
  },
  {
    slug: 'json-formatting-tips',
    title: 'JSON 格式化技巧',
    titleEn: 'JSON Formatting Tips',
    description: '掌握 JSON 格式化的最佳实践，提高开发效率。',
    descriptionEn: 'Master JSON formatting best practices to improve your development efficiency.',
    content: `
# JSON 格式化技巧

JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，广泛应用于 Web 开发中。本文将分享一些 JSON 格式化的实用技巧。

## 为什么需要格式化 JSON？

- 提高代码可读性
- 便于调试和排错
- 符合编码规范

## 基础格式化

### 使用在线工具

IT Tools 提供了多种 JSON 处理工具：
- [JSON 查看器](/json-viewer) - 美化显示 JSON
- [JSON 最小化](/json-minify) - 压缩 JSON
- [JSON 差异比较](/json-diff) - 比较两个 JSON 的区别

## 常见问题解决

### 1. JSON 解析错误

最常见的问题是缺少逗号、引号不匹配或多余的逗号。使用 [JSON 查看器](/json-viewer) 可以快速定位问题。

### 2. 大型 JSON 性能问题

对于大型 JSON 文件，建议：
- 使用分页加载
- 使用流式解析
- 考虑使用 JSON 压缩

## 最佳实践

1. **保持一致性** - 使用统一的缩进（2 或 4 空格）
2. **使用 UTF-8 编码** - 避免字符编码问题
3. **验证后再使用** - 使用 JSON 验证器检查语法
4. **移除注释** - JSON 不支持注释，编译前需移除

## 相关工具

- [JSON 转 YAML](/json-to-yaml-converter)
- [JSON 转 CSV](/json-to-csv)
- [JSON 转 XML](/json-to-xml)
    `,
    contentEn: `
# JSON Formatting Tips

JSON (JavaScript Object Notation) is a lightweight data interchange format widely used in Web development. This article shares practical tips for JSON formatting.

## Why Format JSON?

- Improve code readability
- Easier debugging and troubleshooting
- Follow coding standards

## Basic Formatting

### Use Online Tools

IT Tools provides various JSON processing tools:
- [JSON Viewer](/json-viewer) - Pretty print JSON
- [JSON Minify](/json-minify) - Compress JSON
- [JSON Diff](/json-diff) - Compare two JSON files

## Common Issues

### 1. JSON Parse Errors

Common issues include missing commas, mismatched quotes, or trailing commas. Use [JSON Viewer](/json-viewer) to quickly locate problems.

### 2. Large JSON Performance

For large JSON files:
- Use pagination
- Use streaming parsing
- Consider JSON compression

## Best Practices

1. **Be Consistent** - Use uniform indentation (2 or 4 spaces)
2. **Use UTF-8** - Avoid character encoding issues
3. **Validate Before Use** - Use JSON validator to check syntax
4. **Remove Comments** - JSON doesn't support comments

## Related Tools

- [JSON to YAML](/json-to-yaml-converter)
- [JSON to CSV](/json-to-csv)
- [JSON to XML](/json-to-xml)
    `,
    keywords: ['JSON', 'JSON 格式化', 'JSON 工具', 'Web 开发', '数据格式'],
    keywordsEn: ['JSON', 'JSON formatting', 'JSON tools', 'Web development', 'data format'],
    publishedAt: '2024-01-20',
    author: 'IT Tools Team',
  },
  {
    slug: 'base64-encoding-guide',
    title: 'Base64 编码完全指南',
    titleEn: 'Complete Guide to Base64 Encoding',
    description: '深入了解 Base64 编码原理及其在实际开发中的应用。',
    descriptionEn: 'Deep dive into Base64 encoding principles and its applications in real-world development.',
    content: `
# Base64 编码完全指南

Base64 是一种常见的编码方式，用于将二进制数据转换为可打印的 ASCII 字符。本文将详细介绍 Base64 的原理和使用方法。

## 什么是 Base64？

Base64 是一种基于 64 个可打印字符来表示二进制数据的编码方式。这 64 个字符包括：
- 大写字母 A-Z（26个）
- 小写字母 a-z（26个）
- 数字 0-9（10个）
- + 和 /（2个）

## Base64 的应用场景

### 1. 数据传输

在 HTTP 请求中传输二进制数据（如图片、文件）

### 2. 数据存储

在 JSON 或 XML 中存储二进制数据

### 3. 电子邮件

电子邮件协议支持 Base64 编码的附件

## 使用 IT Tools 的 Base64 工具

- [Base64 字符串转换器](/base64-string-converter) - 编解码字符串
- [Base64 文件转换器](/base64-file-converter) - 处理文件

## 注意事项

1. Base64 编码会增加约 33% 的数据大小
2. 不适合加密敏感数据
3. 解码时需注意安全性
    `,
    contentEn: `
# Complete Guide to Base64 Encoding

Base64 is a common encoding method that converts binary data into printable ASCII characters. This article provides a detailed explanation of Base64 principles and usage.

## What is Base64?

Base64 is an encoding method that represents binary data using 64 printable characters:
- Uppercase letters A-Z (26)
- Lowercase letters a-z (26)
- Numbers 0-9 (10)
- + and / (2)

## Base64 Use Cases

### 1. Data Transmission

Transmit binary data (like images, files) in HTTP requests

### 2. Data Storage

Store binary data in JSON or XML

### 3. Email

Email protocols support Base64-encoded attachments

## Base64 Tools on IT Tools

- [Base64 String Converter](/base64-string-converter) - Encode/decode strings
- [Base64 File Converter](/base64-file-converter) - Process files

## Considerations

1. Base64 encoding increases data size by ~33%
2. Not suitable for encrypting sensitive data
3. Pay attention to security when decoding
    `,
    keywords: ['Base64', '编码', '解码', '数据转换', '二进制'],
    keywordsEn: ['Base64', 'encoding', 'decoding', 'data conversion', 'binary'],
    publishedAt: '2024-02-01',
    author: 'IT Tools Team',
  },
  {
    slug: 'uuid-vs-ulid',
    title: 'UUID 与 ULID：分布式 ID 生成方案对比',
    titleEn: 'UUID vs ULID: Distributed ID Generation Comparison',
    description: '深入比较 UUID 和 ULID 两种分布式 ID 生成方案的优缺点。',
    descriptionEn: 'In-depth comparison of UUID and ULID distributed ID generation solutions.',
    content: `
# UUID 与 ULID：分布式 ID 生成方案对比

在分布式系统中，需要生成唯一的标识符来区分不同的实体。本文将比较两种流行的 ID 生成方案。

## UUID（通用唯一标识符）

UUID 是 128 位数字，通常表示为 36 个字符（带连字符）。

### 优点
- 无需中心节点
- 全球唯一性
- 广泛支持

### 缺点
- 字符串较长（36 字符）
- 不是单调递增
- 随机性可能导致索引性能下降

## ULID（通用唯一排序标识符）

ULID 也是 128 位，但设计为可排序。

### 优点
- 时间戳前缀，可排序
- 唯一性保证
- 更短的字符串（26 字符）

### 缺点
- 相对较新，支持较少

## 使用 IT Tools 生成 ID

- [UUID 生成器](/uuid-generator)
- [ULID 生成器](/ulid-generator)

## 何时选择哪种方案？

- 需要高性能排序 → ULID
- 需要广泛兼容性 → UUID
- 日志系统 → ULID（时间戳有意义）
    `,
    contentEn: `
# UUID vs ULID: Distributed ID Generation Comparison

In distributed systems, unique identifiers are needed to distinguish different entities. This article compares two popular ID generation solutions.

## UUID (Universally Unique Identifier)

UUID is a 128-bit number, typically represented as 36 characters (with hyphens).

### Pros
- No central node needed
- Globally unique
- Wide support

### Cons
- Long string (36 characters)
- Not monotonically increasing
- Randomness may affect index performance

## ULID (Universally Unique Lexicographically Sortable Identifier)

ULID is also 128-bit but designed to be sortable.

### Pros
- Timestamp prefix, sortable
- Uniqueness guaranteed
- Shorter string (26 characters)

### Cons
- Relatively new, less support

## Generate IDs with IT Tools

- [UUID Generator](/uuid-generator)
- [ULID Generator](/ulid-generator)

## When to Choose Which?

- Need high-performance sorting → ULID
- Need broad compatibility → UUID
- Logging systems → ULID (timestamp is meaningful)
    `,
    keywords: ['UUID', 'ULID', '分布式', 'ID 生成', '唯一标识符'],
    keywordsEn: ['UUID', 'ULID', 'distributed', 'ID generation', 'unique identifier'],
    publishedAt: '2024-02-10',
    author: 'IT Tools Team',
  },
  {
    slug: 'cron-expression-guide',
    title: 'Cron 表达式完全指南',
    titleEn: 'Complete Guide to Cron Expressions',
    description: '学习如何编写和使用 Cron 定时任务表达式。',
    descriptionEn: 'Learn how to write and use Cron scheduling expressions.',
    content: `
# Cron 表达式完全指南

Cron 是一种定时任务调度工具，广泛用于服务器自动化。本文将帮助您理解和使用 Cron 表达式。

## 什么是 Cron 表达式？

Cron 表达式由 5 个字段组成：
\`\`\`
* * * * *
│ │ │ │ │
│ │ │ │ └── 星期 (0-7)
│ │ │ └──── 月份 (1-12)
│ │ └────── 日期 (1-31)
│ └──────── 小时 (0-23)
└────────── 分钟 (0-59)
\`\`\`

## 特殊字符

- \`*\` - 任意值
- \`,\` - 值列表（如 1,3,5）
- \`-\` - 范围（如 1-5）
- \`/\` - 步进（如 \*/5）

## 常见示例

| 表达式 | 含义 |
|--------|------|
| \`0 * * * *\` | 每小时 |
| \`0 0 * * *\` | 每天午夜 |
| \`0 0 * * 0\` | 每周日 |
| \`0 0 1 * *\` | 每月1日 |
| \`*/5 * * * *\` | 每5分钟 |

## 使用工具验证

使用 [Crontab 生成器](/crontab-generator) 来创建和验证您的 Cron 表达式。

## 最佳实践

1. 测试表达式功能
2. 记录任务目的
3. 设置合理的执行时间
4. 考虑时区问题
    `,
    contentEn: `
# Complete Guide to Cron Expressions

Cron is a task scheduling tool widely used for server automation. This article will help you understand and use Cron expressions.

## What is a Cron Expression?

A Cron expression consists of 5 fields:
\`\`\`
* * * * *
│ │ │ │ │
│ │ │ │ └── Day of week (0-7)
│ │ │ └──── Month (1-12)
│ │ └────── Day (1-31)
│ └──────── Hour (0-23)
└────────── Minute (0-59)
\`\`\`

## Special Characters

- \`*\` - Any value
- \`,\` - List of values (e.g., 1,3,5)
- \`-\` - Range (e.g., 1-5)
- \`/\` - Step (e.g., */5)

## Common Examples

| Expression | Meaning |
|------------|---------|
| \`0 * * * *\` | Every hour |
| \`0 0 * * *\` | Every day at midnight |
| \`0 0 * * 0\` | Every Sunday |
| \`0 0 1 * *\` | First day of every month |
| \`*/5 * * * *\` | Every 5 minutes |

## Use Tools to Validate

Use the [Crontab Generator](/crontab-generator) to create and validate your Cron expressions.

## Best Practices

1. Test expression functionality
2. Document task purpose
3. Set reasonable execution times
4. Consider timezone issues
    `,
    keywords: ['Cron', '定时任务', '任务调度', '自动化', 'Crontab'],
    keywordsEn: ['Cron', 'scheduled task', 'task scheduling', 'automation', 'Crontab'],
    publishedAt: '2024-02-15',
    author: 'IT Tools Team',
  },
  {
    slug: 'regex-cheat-sheet',
    title: '正则表达式速查表',
    titleEn: 'Regular Expression Cheat Sheet',
    description: '常用正则表达式模式和示例，帮助您快速匹配和验证文本。',
    descriptionEn: 'Common regex patterns and examples to help you quickly match and validate text.',
    content: `
# 正则表达式速查表

正则表达式是处理文本的强大工具。本文提供常用模式的速查表。

## 字符类

| 模式 | 含义 |
|------|------|
| \`. \` | 任意单个字符 |
| \`\\d\` | 数字 [0-9] |
| \`\\D\` | 非数字 |
| \`\\w\` | 字母、数字、下划线 |
| \`\\W\` | 非单词字符 |
| \`\\s\` | 空白字符 |
| \`\\S\` | 非空白字符 |

## 量词

| 模式 | 含义 |
|------|------|
| \`*\` | 0次或多次 |
| \`+\` | 1次或多次 |
| \`?\` | 0次或1次 |
| \`{n}\` | 恰好 n 次 |
| \`{n,}\` | 至少 n 次 |
| \`{n,m}\` | n 到 m 次 |

## 锚点

| 模式 | 含义 |
|------|------|
| \`^\` | 字符串开始 |
| \`$\` | 字符串结束 |
| \`\\b\` | 单词边界 |

## 常用验证

- 邮箱：\`^[\\w.-]+@[\\w.-]+\\.\\w+$\`
- 手机号：\`^1[3-9]\\d{9}$\`
- URL：\`^https?://[\\w.-]+(/\\S*)?$\`
- IP 地址：\`^(\\d{1,3}\\.){3}\\d{1,3}$\`

## 在线测试

使用 [Regex 测试器](/regex-tester) 来测试您的正则表达式。

## 最佳实践

1. 从简单开始，逐步添加复杂度
2. 使用正则测试工具验证
3. 考虑性能，避免过度贪婪匹配
4. 做好注释，便于维护
    `,
    contentEn: `
# Regular Expression Cheat Sheet

Regular expressions are powerful tools for text processing. This article provides a cheat sheet of common patterns.

## Character Classes

| Pattern | Meaning |
|---------|---------|
| \`. \` | Any single character |
| \`\\d\` | Digit [0-9] |
| \`\\D\` | Non-digit |
| \`\\w\` | Word character |
| \`\\W\` | Non-word character |
| \`\\s\` | Whitespace |
| \`\\S\` | Non-whitespace |

## Quantifiers

| Pattern | Meaning |
|---------|---------|
| \`*\` | 0 or more |
| \`+\` | 1 or more |
| \`?\` | 0 or 1 |
| \`{n}\` | Exactly n times |
| \`{n,}\` | At least n times |
| \`{n,m}\` | Between n and m times |

## Anchors

| Pattern | Meaning |
|---------|---------|
| \`^\` | Start of string |
| \`$\` | End of string |
| \`\\b\` | Word boundary |

## Common Validations

- Email: \`^[\\w.-]+@[\\w.-]+\\.\\w+$\`
- Phone: \`^1[3-9]\\d{9}$\`
- URL: \`^https?://[\\w.-]+(/\\S*)?$\`
- IP: \`^(\\d{1,3}\\.){3}\\d{1,3}$\`

## Test Online

Use the [Regex Tester](/regex-tester) to test your regular expressions.

## Best Practices

1. Start simple, add complexity gradually
2. Use regex testing tools
3. Consider performance, avoid over-greedy matching
4. Add comments for maintainability
    `,
    keywords: ['正则表达式', 'Regex', '模式匹配', '文本验证', '字符串处理'],
    keywordsEn: ['Regular Expression', 'Regex', 'Pattern Matching', 'Text Validation', 'String Processing'],
    publishedAt: '2024-02-20',
    author: 'IT Tools Team',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
