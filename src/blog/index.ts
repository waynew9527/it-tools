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
  {
    slug: 'url-encoder-decoder-guide',
    title: 'URL 编码与解码器的作用与 Q&A',
    titleEn: 'URL Encoder/Decoder Guide & Q&A',
    description: '深入了解为何需要对 URL 进行编码，以及百分号编码的原理。',
    descriptionEn: 'Learn why URL encoding is necessary and the principles of percent-encoding.',
    content: `
# URL 编码与解码器的作用与 Q&A

URL（统一资源定位符）只能通过 ASCII 字符集发送。如果包含特殊字符，必须进行转换。

## 什么是 URL 编码？
URL 编码（百分号编码）用一个或多个字符三元组替换不安全的字符，由 \`%\` 后跟两个十六进制数字组成。

## Q&A

### Q1: 哪些字符是安全的？
**A**: 字母、数字以及 \`-\`、\`_\`、\`.\`、\`~\` 不需要编码。

### Q2: 空格如何编码？
**A**: 通常编码为 \`%20\` 或 \`+\`。

### Q3: 为什么必须编码？
**A**: 如果数据包含 \`&\` 或 \`=\`，服务器会误将其视为参数分隔符，导致数据截断或错误。
`,
    contentEn: `
# URL Encoder/Decoder Guide & Q&A

URLs can only be sent using the ASCII character-set. Special characters must be converted.

## What is URL Encoding?
URL encoding (percent-encoding) replaces unsafe characters with a \`%\` followed by two hex digits.

## Q&A

### Q1: Which characters are safe?
**A**: Alphanumeric characters and \`-\`, \`_\`, \`.\`, \`~\` are safe.

### Q2: How is a space encoded?
**A**: Usually encoded as \`%20\` or \`+\`.

### Q3: Why is encoding mandatory?
**A**: If data contains \`&\` or \`=\`, the server might mistake it for a parameter delimiter, causing data truncation or errors.
`,
    keywords: ["URL 编码","URL 解码","百分号编码"],
    keywordsEn: ["URL encoding","URL decoding","percent-encoding"],
    publishedAt: '2024-03-01',
    author: 'IT Tools Team',
  },
  {
    slug: 'base64-file-converter-guide',
    title: 'Base64 文件转换原理与常见问答',
    titleEn: 'Base64 File Conversion Principles & FAQ',
    description: '为什么要将图片等文件转换为 Base64 文本？了解它的优缺点。',
    descriptionEn: 'Why convert images and files to Base64 text? Understand its pros and cons.',
    content: `
# Base64 文件转换原理与常见问答

在 Web 开发中，我们经常遇到 Data URI，长长的字符串代表了一张图片。这就是 Base64 编码的功劳。

## Q&A

### Q1: 将图片转为 Base64 有什么好处？
**A**: 最直接的好处是**减少 HTTP 请求数量**。通过将小图标直接内联到 HTML 或 CSS 中，可以加快首屏渲染速度。

### Q2: 有什么缺点吗？
**A**: Base64 编码会使文件体积增加约 **33%**。对于大图，会导致 CSS 或 HTML 文件极其庞大，反而拖慢加载速度，且不利于浏览器缓存策略。

### Q3: 除了前端，还有哪些场景用到文件 Base64 编码？
**A**: 在电子邮件协议（MIME）中发送附件，以及在 JSON 格式的 API 接口中传输二进制文件数据。
`,
    contentEn: `
# Base64 File Conversion Principles & FAQ

In Web development, Data URIs (long strings representing images) are very common. This is Base64 encoding in action.

## Q&A

### Q1: What's the benefit of converting images to Base64?
**A**: The main benefit is **reducing HTTP requests**. By inlining small icons into HTML or CSS, you can speed up the initial rendering.

### Q2: Are there any drawbacks?
**A**: Base64 encoding increases file size by about **33%**. For large images, it drastically inflates CSS/HTML files, slowing down loading and breaking browser caching.

### Q3: Where else is Base64 file encoding used?
**A**: It is used in email protocols (MIME) for attachments and in JSON APIs to transfer binary file data.
`,
    keywords: ["Base64","文件转换","Data URI","前端优化"],
    keywordsEn: ["Base64","file converter","Data URI","frontend optimization"],
    publishedAt: '2024-03-02',
    author: 'IT Tools Team',
  },
  {
    slug: 'bcrypt-password-hashing-explained',
    title: 'Bcrypt 密码哈希生成器详解',
    titleEn: 'Bcrypt Password Hashing Explained',
    description: '了解为什么 Bcrypt 是存储密码的最佳选择之一，以及盐值的作用。',
    descriptionEn: 'Learn why Bcrypt is one of the best choices for storing passwords and the role of salts.',
    content: `
# Bcrypt 密码哈希生成器详解

在数据库中明文存储密码是极其危险的。我们需要使用安全的单向散列（哈希）函数，而 Bcrypt 是其中的佼佼者。

## Q&A

### Q1: 为什么不用 MD5 或 SHA-256 存密码？
**A**: MD5 和 SHA-256 是为**速度**设计的（例如用于校验文件完整性）。黑客可以使用带有 GPU 的硬件在一秒内尝试数十亿次计算，轻易通过“彩虹表”或暴力破解找出原密码。

### Q2: 什么是 Bcrypt 的 "Salt" (盐)？
**A**: 盐是与密码一起哈希的随机数据。由于盐是随机的，即使用户设置了相同的密码（如 "123456"），它们生成的哈希值也完全不同，这让彩虹表攻击彻底失效。

### Q3: Bcrypt 的 "Rounds" (轮数) 是什么？
**A**: 轮数（或代价因子）决定了哈希计算的复杂度和耗时。随着计算机硬件性能的提升，开发者可以通过增加轮数来故意“拖慢”哈希速度，从而有效抵御硬件级别的暴力破解。
`,
    contentEn: `
# Bcrypt Password Hashing Explained

Storing passwords in plaintext in a database is extremely dangerous. We need secure one-way hash functions, and Bcrypt is one of the best.

## Q&A

### Q1: Why not use MD5 or SHA-256 for passwords?
**A**: MD5 and SHA-256 are designed for **speed**. Hackers can use GPU-accelerated hardware to compute billions of hashes per second, easily cracking them via brute-force or "rainbow tables."

### Q2: What is a Bcrypt "Salt"?
**A**: A salt is random data hashed alongside the password. Since salts are random, even if two users have the same password, their hashes will be completely different, nullifying rainbow table attacks.

### Q3: What are Bcrypt "Rounds"?
**A**: Rounds (or cost factor) determine the complexity and time required for the hash calculation. As hardware gets faster, developers can increase the rounds to intentionally slow down hashing, resisting hardware brute-force attacks.
`,
    keywords: ["Bcrypt","密码哈希","安全","MD5"],
    keywordsEn: ["Bcrypt","password hashing","security","MD5"],
    publishedAt: '2024-03-03',
    author: 'IT Tools Team',
  },
  {
    slug: 'http-status-codes-guide',
    title: '常见 HTTP 状态码大全及 Q&A',
    titleEn: 'Common HTTP Status Codes & FAQ',
    description: '快速掌握常见的 HTTP 状态码及其在开发和调试中的意义。',
    descriptionEn: 'Quickly master common HTTP status codes and their meaning in debugging.',
    content: `
# 常见 HTTP 状态码大全及 Q&A

当客户端（如浏览器）与服务器交互时，服务器会返回一个三位数字的 HTTP 状态码来表示请求的处理结果。

## 状态码分类
- **1xx**: 信息性响应
- **2xx**: 成功
- **3xx**: 重定向
- **4xx**: 客户端错误
- **5xx**: 服务器错误

## Q&A

### Q1: 401 Unauthorized 和 403 Forbidden 有什么区别？
**A**: 
- **401**: “你是谁？” —— 你还没有通过身份验证（没有登录）。
- **403**: “我知道你是谁，但你不准进。” —— 你已登录，但权限不足。

### Q2: 301 和 302 重定向的区别？
**A**: 
- **301 (Moved Permanently)**: 永久重定向。搜索引擎会将原页面的权重转移到新页面。
- **302 (Found)**: 临时重定向。权重不会转移。

### Q3: 遇到 502 Bad Gateway 该怎么排查？
**A**: 502 通常意味着反向代理服务器（如 Nginx）无法从上游应用服务器（如 Node.js 或 PHP-FPM）获取有效的响应。应检查上游服务是否崩溃或正在重启。
`,
    contentEn: `
# Common HTTP Status Codes & FAQ

When a client communicates with a server, the server returns a three-digit HTTP status code to indicate the result of the request.

## Status Code Categories
- **1xx**: Informational
- **2xx**: Success
- **3xx**: Redirection
- **4xx**: Client Error
- **5xx**: Server Error

## Q&A

### Q1: What's the difference between 401 Unauthorized and 403 Forbidden?
**A**: 
- **401**: "Who are you?" — You haven't authenticated (logged in) yet.
- **403**: "I know who you are, but you're not allowed." — You are logged in, but lack permissions.

### Q2: 301 vs 302 Redirect?
**A**: 
- **301 (Moved Permanently)**: SEO equity is passed to the new URL.
- **302 (Found)**: Temporary redirect. SEO equity remains with the original URL.

### Q3: How to debug 502 Bad Gateway?
**A**: 502 usually means a reverse proxy (like Nginx) failed to get a valid response from an upstream application server (like Node.js). Check if the upstream service has crashed or is restarting.
`,
    keywords: ["HTTP 状态码","404","502","网络开发"],
    keywordsEn: ["HTTP status codes","404","502","web development"],
    publishedAt: '2024-03-04',
    author: 'IT Tools Team',
  },
  {
    slug: 'sql-formatter-guide',
    title: 'SQL 美化与格式化工具指南',
    titleEn: 'SQL Formatter and Prettifier Guide',
    description: '为什么复杂的 SQL 语句需要格式化？提升代码可读性的最佳实践。',
    descriptionEn: 'Why format complex SQL queries? Best practices for code readability.',
    content: `
# SQL 美化与格式化工具指南

在开发和数据分析中，SQL 语句很容易因为多表 JOIN、子查询和复杂的 WHERE 条件变得像一坨“面条代码”，极难阅读和维护。

## Q&A

### Q1: 什么是 SQL 美化？
**A**: SQL 美化（格式化）是指按照统一的缩进、换行和大小写规则重排 SQL 文本。例如，将所有的关键字大写（SELECT, FROM, WHERE），并对每一层子查询进行缩进。

### Q2: 格式化 SQL 对性能有影响吗？
**A**: 绝对没有。数据库的解析引擎（Parser）在执行前会忽略掉所有多余的空格、换行和注释。格式化纯粹是为了“人类”阅读。

### Q3: 什么是参数化查询？
**A**: 格式化代码能防眼花，但不能防注入。无论代码多漂亮，拼接 SQL 都会导致 SQL 注入漏洞，必须使用预编译语句（Prepared Statements）进行参数化查询。
`,
    contentEn: `
# SQL Formatter and Prettifier Guide

In development and data analysis, SQL queries can easily become "spaghetti code" due to multiple JOINs, subqueries, and complex WHERE conditions, making them extremely hard to read.

## Q&A

### Q1: What is SQL Prettifying?
**A**: It involves reorganizing SQL text using consistent indentation, line breaks, and casing rules. For example, capitalizing all keywords (SELECT, FROM, WHERE) and indenting nested subqueries.

### Q2: Does formatting SQL affect performance?
**A**: Absolutely not. The database parser ignores extra spaces, newlines, and comments before execution. Formatting is purely for human readability.

### Q3: What are parameterized queries?
**A**: Beautiful code prevents eye strain, but not SQL injection. No matter how pretty, concatenating SQL strings is vulnerable. Always use Prepared Statements with parameterized queries for security.
`,
    keywords: ["SQL 格式化","SQL 优化","数据库","代码规范"],
    keywordsEn: ["SQL formatter","SQL prettify","database","coding standards"],
    publishedAt: '2024-03-05',
    author: 'IT Tools Team',
  },
  {
    slug: 'git-cheatsheet-faq',
    title: 'Git 常用命令备忘录与问答',
    titleEn: 'Git Cheatsheet & FAQ',
    description: '一网打尽日常开发中最常碰到的 Git 疑难杂症及解决办法。',
    descriptionEn: 'Solve the most common Git issues encountered in daily development.',
    content: `
# Git 常用命令备忘录与问答

Git 是现今最流行的分布式版本控制系统。但在实际操作中，大家总是会遇到各种头疼的问题。

## Q&A

### Q1: 刚刚 commit 了，但是发现漏了一个文件或者写错了 message 怎么办？
**A**: 不要慌，使用 \`git commit --amend\`。如果是漏了文件，先 \`git add\` 那个文件，然后再执行 \`--amend\`，它可以将新的更改合并到最后一次 commit 中。

### Q2: 如何放弃本地所有修改（恢复到未修改状态）？
**A**: 
- 放弃工作区修改（未 add）：\`git checkout -- .\` 或 \`git restore .\`
- 放弃暂存区修改（已 add）：\`git reset HEAD .\`
- 放弃所有（强行覆盖）：\`git reset --hard HEAD\`

### Q3: 什么是 Rebase，和 Merge 有什么区别？
**A**: Merge 会保留两条分支的提交历史，并生成一个新的合并节点（菱形网络结构）。Rebase（变基）会将当前分支的提交“剪切”并“粘贴”到目标分支的顶端，保持提交历史为一条绝对的直线，非常干净。
`,
    contentEn: `
# Git Cheatsheet & FAQ

Git is the most popular distributed version control system today. However, developers often face confusing scenarios during daily use.

## Q&A

### Q1: I just committed but forgot a file or made a typo in the message. What now?
**A**: Don't panic. Use \`git commit --amend\`. If you forgot a file, \`git add\` it first, then run the amend command to merge it into the latest commit.

### Q2: How do I discard all local changes?
**A**: 
- Discard working directory changes (not added): \`git checkout -- .\` or \`git restore .\`
- Unstage changes (already added): \`git reset HEAD .\`
- Discard EVERYTHING (hard reset): \`git reset --hard HEAD\`

### Q3: What is Rebase, and how does it differ from Merge?
**A**: Merge preserves the history of both branches and creates a new merge commit (diamond shape). Rebase "cuts" your commits and "pastes" them on top of the target branch, maintaining a perfectly straight and clean commit history.
`,
    keywords: ["Git 命令","版本控制","GitHub","编程工具"],
    keywordsEn: ["Git commands","version control","GitHub","programming tools"],
    publishedAt: '2024-03-06',
    author: 'IT Tools Team',
  },
  {
    slug: 'url-slug-generator-seo',
    title: 'URL Slug 生成器与 SEO 的关系',
    titleEn: 'URL Slug Generators & SEO',
    description: '什么是 Slug？为什么好的 Slug 对于网站在搜索引擎中的排名至关重要？',
    descriptionEn: 'What is a Slug? Why are good slugs vital for search engine rankings?',
    content: `
# URL Slug 生成器与 SEO 的关系

## 什么是 Slug？
在 Web 开发中，**Slug** 指的是 URL 中标识特定页面的一段可读文本，通常是将文章标题转换成由小写字母、数字和连字符 \`-\` 组成的字符串。例如，本文的 Slug 可能是 \`url-slug-generator-seo\`。

## Q&A

### Q1: 为什么不能直接用中文或空格做 URL？
**A**: URL 标准不支持空格和部分特殊字符，它们会被强行转换为难看的百分号编码（如 \`%E4%BD%A0%E5%A5%BD\`）。全英文字母和连字符的 Slug 兼容性最好，分享时最美观。

### Q2: 连字符 (-) 和下划线 (_) 有区别吗？
**A**: 严重区别！Google 官方明确建议使用连字符 \`-\` 作为单词分隔符。Google 会将 \`my-new-post\` 视为三个单词，而将 \`my_new_post\` 视为一个连体词。

### Q3: 短 Slug 和长 Slug 哪个更有利于 SEO？
**A**: 通常简短且包含核心关键词的 Slug 最好。去掉 "a", "the", "and" 等无意义词汇（停用词），保持在 3-5 个有意义的词内为佳。
`,
    contentEn: `
# URL Slug Generators & SEO

## What is a Slug?
In web development, a **Slug** is the part of a URL that identifies a particular page in an easy-to-read form. It's usually generated by converting a title into a string of lowercase letters, numbers, and hyphens \`-\`. 

## Q&A

### Q1: Why not use spaces or special characters in URLs?
**A**: URL standards don't support spaces; they get encoded into ugly percent-encoded strings (like \`%20\`). Alphanumeric slugs with hyphens offer the best compatibility and look cleanest when shared.

### Q2: Is there a difference between hyphens (-) and underscores (_)?
**A**: Yes, a big one! Google officially recommends hyphens \`-\` as word separators. Google reads \`my-new-post\` as three separate words, but \`my_new_post\` as a single, combined word.

### Q3: Are short slugs or long slugs better for SEO?
**A**: Short slugs containing core keywords are usually best. Remove stop words like "a", "the", and "and". Aim for 3-5 highly relevant words.
`,
    keywords: ["Slug","URL 优化","SEO","搜索引擎优化"],
    keywordsEn: ["Slug","URL optimization","SEO","search engine optimization"],
    publishedAt: '2024-03-07',
    author: 'IT Tools Team',
  },
  {
    slug: 'aes-encryption-decryption-faq',
    title: 'AES/DES 文本加密技术问答',
    titleEn: 'AES/DES Text Encryption FAQ',
    description: '对比 AES 和老旧的 DES 算法，了解对称加密的核心概念。',
    descriptionEn: 'Compare AES with the legacy DES algorithm and understand symmetric encryption.',
    content: `
# AES/DES 文本加密技术问答

在保护敏感文本信息时，对称加密算法是最常用的手段。我们经常听到 AES 和 DES，它们有什么区别？

## Q&A

### Q1: 什么是对称加密？
**A**: 对称加密意味着加密和解密使用的是**同一把钥匙（Key）**。这就好比一个带挂锁的箱子，发件人和收件人必须拥有相同的钥匙才能开锁。

### Q2: 为什么现在没人用 DES 了？
**A**: DES (Data Encryption Standard) 诞生于 70 年代，其密钥长度极短（有效长度仅 56 位）。在现代计算机算力下，DES 可以在几小时内被暴力破解，属于绝对不再安全的过时算法。

### Q3: AES 有多安全？
**A**: AES (Advanced Encryption Standard) 是目前商业和政府领域的全球标准。AES-256 拥有 $2^{256}$ 种可能的密钥组合。即使动用全球现有的所有超级计算机，破解它也需要几十亿年的时间。只要密码不泄露，它被认为是牢不可破的。
`,
    contentEn: `
# AES/DES Text Encryption FAQ

Symmetric encryption algorithms are the most common tools for protecting sensitive text. We often hear about AES and DES. What are the differences?

## Q&A

### Q1: What is Symmetric Encryption?
**A**: Symmetric encryption means the **same key** is used for both encryption and decryption. It's like a physical lockbox where both the sender and receiver must possess identical keys to open it.

### Q2: Why is no one using DES anymore?
**A**: DES (Data Encryption Standard) was created in the 70s and has a very short key length (effectively 56 bits). With modern computing power, DES can be brute-forced in hours. It is completely obsolete and insecure.

### Q3: How secure is AES?
**A**: AES (Advanced Encryption Standard) is the current global standard for commercial and government use. AES-256 has $2^{256}$ possible key combinations. Even with all the supercomputers in the world, cracking it would take billions of years. As long as the key is kept secret, it is considered unbreakable.
`,
    keywords: ["AES 加密","DES","对称加密","信息安全"],
    keywordsEn: ["AES encryption","DES","symmetric encryption","information security"],
    publishedAt: '2024-03-08',
    author: 'IT Tools Team',
  },
  {
    slug: 'random-port-generator-uses',
    title: '随机端口生成器的使用场景',
    titleEn: 'Use Cases for Random Port Generators',
    description: '为什么我们在开发中需要随机端口号？了解网络端口的分配规范。',
    descriptionEn: 'Why do we need random port numbers in development? Learn about port allocation.',
    content: `
# 随机端口生成器的使用场景

在开发微服务或本地运行多个 Docker 容器时，端口冲突（Port in Use）是开发者最头疼的问题之一。

## 端口的基本常识
计算机网络共有 65535 个端口。
- **0 - 1023**: 知名端口（Well-known ports），被保留用于系统和关键服务（如 HTTP的80，HTTPS的443，SSH的22），需要管理员权限才能使用。
- **1024 - 49151**: 注册端口（Registered ports），分配给用户进程或应用程序。
- **49152 - 65535**: 动态或私有端口（Dynamic ports），系统可随时动态分配。

## Q&A

### Q1: 为什么需要生成随机端口？
**A**: 为了避免冲突。假设您同时运行了三个本地 Node.js 爬虫项目，如果都硬编码绑定在 3000 端口，只能启动一个。随机抽取 1024 以上的未占用端口是最佳实践。

### Q2: 如何检查某个随机生成的端口是否被占用？
**A**: 在终端中，Windows 可以使用 \`netstat -ano | findstr <端口号>\`，macOS/Linux 可以使用 \`lsof -i:<端口号>\`。

### Q3: 我能把数据库绑定在动态端口区域（>49152）吗？
**A**: 不建议。临时动态端口通常由操作系统自动分配给客户端程序（如浏览器的出站连接）。为了服务稳定，开发时建议在 1024-49151 之间随机选取固定端口配置。
`,
    contentEn: `
# Use Cases for Random Port Generators

When developing microservices or running multiple Docker containers locally, "Port in Use" conflicts are a major headache.

## Port Basics
There are 65,535 total ports in networking.
- **0 - 1023**: Well-known ports, reserved for system services (80 for HTTP, 443 for HTTPS, 22 for SSH). Root access is required.
- **1024 - 49151**: Registered ports, assigned to user processes or applications.
- **49152 - 65535**: Dynamic/Private ports, used by the OS as ephemeral ports for client connections.

## Q&A

### Q1: Why do we need to generate random ports?
**A**: To avoid conflicts. If you run three local Node.js projects hardcoded to port 3000, only one will start. Picking a random port above 1024 is the best practice for concurrent environments.

### Q2: How do I check if a generated port is currently in use?
**A**: In your terminal, use \`netstat -ano | findstr <port>\` on Windows, or \`lsof -i:<port>\` on macOS/Linux.

### Q3: Should I bind my database to a dynamic port (>49152)?
**A**: Not recommended. The OS automatically assigns these ephemeral ports to outgoing client connections. For stability, randomly pick a fixed port in the 1024-49151 range for your services.
`,
    keywords: ["端口生成器","网络端口","TCP","微服务开发"],
    keywordsEn: ["port generator","network ports","TCP","microservices"],
    publishedAt: '2024-03-09',
    author: 'IT Tools Team',
  },
  {
    slug: 'yaml-vs-json-formatting',
    title: 'YAML 与 JSON 格式的对比与格式化',
    titleEn: 'YAML vs JSON: Formatting and Comparison',
    description: '全面解析 YAML 和 JSON 在配置文件领域的优劣势。',
    descriptionEn: 'A comprehensive look at the pros and cons of YAML vs JSON for configuration files.',
    content: `
# YAML 与 JSON 格式的对比与格式化

在编写项目的配置文件时，我们最常面临的选择就是 JSON 还是 YAML。

## Q&A

### Q1: YAML 和 JSON 最大的区别是什么？
**A**: 
1. **语法噪音**：JSON 充斥着大括号 \`{}\`、方括号 \`[]\` 和双引号。而 YAML 依赖缩进（类似 Python），没有括号，显得极其干净、极简。
2. **注释**：JSON 不支持任何注释，而 YAML 原生支持 \`#\` 注释，这对于配置文件至关重要。

### Q2: 为什么还需要把 YAML 转回 JSON？
**A**: YAML 适合人读写，但对于机器解析来说，YAML 的解析器非常复杂且缓慢，且不同语言生态的解析标准容易存在差异。很多时候我们将 YAML 用作前端配置，但在构建时将其转换为 JSON 供程序高效读取。

### Q3: YAML 中容易踩的坑是什么？
**A**: 缩进错误是最致命的。YAML 严格禁止使用 Tab 键，必须使用空格缩进。一个缩进级别的对齐错误就会导致整个配置解析失败。
`,
    contentEn: `
# YAML vs JSON: Formatting and Comparison

When creating configuration files, the most common dilemma is choosing between JSON and YAML.

## Q&A

### Q1: What is the main difference between YAML and JSON?
**A**: 
1. **Syntax Noise**: JSON is cluttered with braces \`{}\`, brackets \`[]\`, and double quotes. YAML relies on whitespace indentation (like Python) and eliminates braces, looking extremely clean.
2. **Comments**: JSON strictly forbids comments. YAML natively supports \`#\` comments, which is essential for configuration documentation.

### Q2: Why would we convert YAML back to JSON?
**A**: YAML is great for human readability, but machine parsing is complex and slow, sometimes causing discrepancies across different languages. Often, we write configs in YAML but convert them to JSON during build steps for efficient program consumption.

### Q3: What is the biggest trap when writing YAML?
**A**: Indentation errors. YAML strictly forbids Tab characters; you must use spaces. A single misaligned space can break the entire parsing tree.
`,
    keywords: ["YAML","JSON","配置文件","格式转换"],
    keywordsEn: ["YAML","JSON","configuration files","format conversion"],
    publishedAt: '2024-03-10',
    author: 'IT Tools Team',
  },
  {
    slug: 'eta-calculator-principles',
    title: '下载 ETA（预计到达时间）计算原理',
    titleEn: 'ETA (Estimated Time of Arrival) Calculation Principles',
    description: '你知道下载软件上的剩余时间是如何估算出来的吗？揭秘 ETA 计算逻辑。',
    descriptionEn: 'How do download managers estimate remaining time? Uncovering the ETA logic.',
    content: `
# 下载 ETA（预计到达时间）计算原理

无论是下载巨型文件，还是数据迁移进度条，我们总是会盯着 ETA (Estimated Time of Arrival) 倒计时看。

## Q&A

### Q1: 最基础的 ETA 是如何计算的？
**A**: 最简单的公式是：\`剩余时间 = 剩余数据量 / 当前下载速度\`。例如，还剩 100MB，当前速度 10MB/s，那么 ETA 就是 10 秒。

### Q2: 为什么下载进度条的剩余时间经常忽长忽短，像是在骗人？
**A**: 因为网速是剧烈波动的。如果在某一秒网速突然降到 1KB/s，系统套用基础公式就会得出一个极大、极荒谬的剩余时间。

### Q3: 现代优秀的 ETA 算法是如何优化的？
**A**: 为了防止进度条数字乱跳，现在的程序（如 Chrome 浏览器）通常会采用**滑动窗口平均值** (Moving Average) 甚至 EMA（指数移动平均）。它们会结合过去 10 秒到 30 秒的平均速度来进行平滑预测，让给出的时间更加稳定和合理。
`,
    contentEn: `
# ETA (Estimated Time of Arrival) Calculation Principles

Whether downloading massive files or migrating data, we always stare at the ETA countdown.

## Q&A

### Q1: How is the most basic ETA calculated?
**A**: The simplest formula is: \`Remaining Time = Remaining Data / Current Speed\`. For example, with 100MB left at 10MB/s, the ETA is 10 seconds.

### Q2: Why does the remaining time often jump erratically, feeling inaccurate?
**A**: Because network speeds fluctuate wildly. If your speed drops to 1KB/s for just a second, the basic formula will predict an absurdly huge remaining time based solely on that momentary dip.

### Q3: How do modern systems optimize ETA algorithms?
**A**: To prevent erratic jumping, modern programs (like Chrome) use a **Moving Average** or EMA (Exponential Moving Average). They calculate the average speed over the past 10 to 30 seconds to smooth out spikes, providing a much more stable and realistic prediction.
`,
    keywords: ["ETA","计算器","下载进度","算法"],
    keywordsEn: ["ETA","calculator","download progress","algorithm"],
    publishedAt: '2024-03-11',
    author: 'IT Tools Team',
  },
  {
    slug: 'roman-numeral-history-converter',
    title: '罗马数字转换器及历史 Q&A',
    titleEn: 'Roman Numeral Converter & History FAQ',
    description: '探索古罗马的计数系统，学习如何阅读钟表和年份上的罗马数字。',
    descriptionEn: 'Explore the ancient Roman counting system and learn to read clocks and years.',
    content: `
# 罗马数字转换器及历史 Q&A

虽然我们在日常数学运算中使用阿拉伯数字，但罗马数字仍在钟表盘、书籍卷标和重大赛事（如超级碗 Super Bowl LVIII）中广泛使用。

## 符号速记
I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

## Q&A

### Q1: 罗马数字没有“零”吗？
**A**: 是的！古罗马人没有抽象出“零”的数学概念。在遇到需要表示空无一物的情况时，他们会使用拉丁文词汇 "nulla"（无）。

### Q2: 为什么 IV 代表 4，而不是 IIII？
**A**: 罗马数字遵循“减法原则”来缩短书写长度。如果一个较小的数字放在较大的数字左边，代表相减（V - I = 4）。同理，IX 代表 9 (10-1)。不过有趣的是，很多老式钟表盘为了对称美观，仍然坚持使用 IIII 而不是 IV。

### Q3: 罗马数字能表示多大的数字？
**A**: 使用标准的字母（最大为 M），写出几十万的数字会极其冗长。古罗马后来引入了在字母上方画横线的方法（代表乘以 1000），但对于现代天文学或科学计算而言，这种记数法是完全无法使用的。
`,
    contentEn: `
# Roman Numeral Converter & History FAQ

While we use Arabic numerals for daily math, Roman numerals are still widely used on clock faces, book chapters, and major events (like Super Bowl LVIII).

## Quick Symbols
I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

## Q&A

### Q1: Is there no "Zero" in Roman numerals?
**A**: Correct! The ancient Romans did not have a mathematical concept for zero. When they needed to express "nothing," they used the Latin word "nulla" (none).

### Q2: Why is 4 written as IV instead of IIII?
**A**: Roman numerals use subtractive notation to shorten written numbers. Placing a smaller numeral before a larger one means subtraction (V - I = 4). Similarly, IX is 9. Interestingly, many vintage clock faces still use IIII for aesthetic symmetry.

### Q3: How large can Roman numerals get?
**A**: Using standard letters (max M), writing numbers in the hundreds of thousands gets absurdly long. Romans later introduced an overline (vinculum) to multiply a value by 1,000, but it remains completely impractical for modern scientific computing.
`,
    keywords: ["罗马数字","数字转换","历史"],
    keywordsEn: ["Roman numerals","number converter","history"],
    publishedAt: '2024-03-12',
    author: 'IT Tools Team',
  },
  {
    slug: 'hmac-generator-api-security',
    title: 'HMAC 消息认证码生成器详解',
    titleEn: 'HMAC Generator and API Security',
    description: '理解 HMAC 如何在 Webhook 和开放 API 中保障数据防篡改和身份验证。',
    descriptionEn: 'Understand how HMAC guarantees data integrity and authentication in Webhooks and APIs.',
    content: `
# HMAC 消息认证码生成器详解

在第三方支付回调（如微信支付/Stripe Webhook）或调用开放 API 时，我们经常看到需要生成 \`签名(Signature)\`。这个签名通常就是 HMAC。

## Q&A

### Q1: 什么是 HMAC？
**A**: HMAC (Hash-based Message Authentication Code) 是一种结合了**密码学哈希函数**（如 SHA256）和**秘密密钥**的消息认证机制。

### Q2: 为什么光有 Hash（如直接 SHA256）不够，必须加 Key（密钥）？
**A**: 如果只是将数据进行 SHA256 传输，中间人黑客可以拦截请求，篡改里面的金额数据，然后再自己算一个新的 SHA256 附带上去。服务器无法分辨真伪。
加上了只有发件人和服务器才知道的 Secret Key 后（参与哈希运算），黑客由于没有 Key，篡改数据后无法生成对应的正确签名，服务器一验签就会发现数据被动过手脚。

### Q3: HMAC 能防止重放攻击 (Replay Attack) 吗？
**A**: 单纯的 HMAC 只能证明数据没被篡改且来源可信，但**不能**防重放（黑客截获合法请求后原封不动地重复发送）。为了防重放，开发者必须在被签名的消息体重加入 **Timestamp（时间戳）** 或 **Nonce（随机数）**，并在服务器端验证时间戳的有效性。
`,
    contentEn: `
# HMAC Generator and API Security

When handling third-party callbacks (like Stripe Webhooks) or calling open APIs, you often need to generate a \`Signature\`. This signature is usually an HMAC.

## Q&A

### Q1: What is HMAC?
**A**: HMAC (Hash-based Message Authentication Code) is a specific type of message authentication code involving a **cryptographic hash function** (like SHA256) and a **secret cryptographic key**.

### Q2: Why isn't a simple Hash (like plain SHA256) enough? Why the Secret Key?
**A**: If you just send data and its SHA256 hash, a man-in-the-middle attacker could intercept the request, change the data (e.g., transaction amount), generate a new hash for the forged data, and send it. The server wouldn't know it was forged.
By including a Secret Key (known only to the sender and server) in the hash generation, attackers cannot generate a valid signature for their tampered data because they don't know the Key.

### Q3: Does HMAC prevent Replay Attacks?
**A**: A basic HMAC proves data integrity and authenticity, but it **cannot** prevent replay attacks (where an attacker intercepts a valid request and resends it exactly as is). To prevent this, developers must include a **Timestamp** or **Nonce** in the signed message payload and validate its freshness on the server.
`,
    keywords: ["HMAC","API 安全","数字签名","加密"],
    keywordsEn: ["HMAC","API security","digital signature","encryption"],
    publishedAt: '2024-03-13',
    author: 'IT Tools Team',
  },
  {
    slug: 'bip39-seed-phrase-crypto',
    title: 'BIP39 助记词与加密钱包安全',
    titleEn: 'BIP39 Seed Phrases & Crypto Wallet Security',
    description: '“Not your keys, not your coins.” 了解 12 位或 24 位助记词的生成原理。',
    descriptionEn: '"Not your keys, not your coins." Learn how 12/24-word seed phrases are generated.',
    content: `
# BIP39 助记词与加密钱包安全

如果您接触过比特币或 Web3，一定对“助记词”（Seed Phrase）不陌生。它是一串 12 或 24 个毫无关联的英文单词，却能掌控您所有的加密资产。

## Q&A

### Q1: 什么是 BIP39？
**A**: BIP39 是比特币改进提案的第 39 号（Bitcoin Improvement Proposal 39）。它定义了如何从随机生成的熵（Entropy）中推导出一组人类可读的单词，也就是我们常说的助记词。

### Q2: 这 12 个单词是怎么变成私钥的？
**A**: 
1. 系统生成高度随机的二进制数据（熵）。
2. 将数据切分，通过 BIP39 的包含 2048 个单词的字典，映射成 12 个单词。
3. 这 12 个单词再通过 PBKDF2 算法与额外的盐（可选的密码）进行 2048 次哈希计算。
4. 最终生成一个 512 位的种子，通过 BIP32 (分层确定性钱包机制) 可以无限派生出比特币、以太坊等各种币种的私钥。

### Q3: 如果有人猜中了我的 12 个单词怎么办？
**A**: BIP39 字典有 2048 个单词。12 个单词的组合方式有 $2048^{12}$ 种，这是一个天文数字。即使动用全球算力暴力穷举，在宇宙毁灭前也猜不中。唯一能丢失资产的方式是：您把单词截屏保存在了云盘，或者误填入了钓鱼网站。
`,
    contentEn: `
# BIP39 Seed Phrases & Crypto Wallet Security

If you're in Crypto or Web3, you know "Seed Phrases". This string of 12 or 24 seemingly random English words controls all your assets.

## Q&A

### Q1: What is BIP39?
**A**: BIP39 stands for Bitcoin Improvement Proposal 39. It defines an industry-standard way to translate randomly generated entropy into a group of human-readable words, commonly known as a mnemonic phrase.

### Q2: How do 12 words turn into private keys?
**A**: 
1. The system generates highly random binary data (entropy).
2. The data is sliced and mapped to 12 words using the standard BIP39 dictionary of 2048 words.
3. These words are hashed 2048 times using the PBKDF2 algorithm alongside a salt (optional passphrase).
4. This yields a 512-bit seed, which via BIP32 (Hierarchical Deterministic Wallets) can infinitely derive private keys for Bitcoin, Ethereum, and more.

### Q3: What if someone guesses my 12 words?
**A**: The BIP39 dictionary has 2048 words. The total combinations for a 12-word phrase is $2048^{12}$, an astronomical number. Even harnessing all computing power on Earth, it couldn't be guessed before the universe ends. The only way you lose funds is if you screenshot the words, save them to the cloud, or type them into a phishing site.
`,
    keywords: ["BIP39","助记词","加密钱包","区块链","Web3"],
    keywordsEn: ["BIP39","seed phrase","crypto wallet","blockchain","Web3"],
    publishedAt: '2024-03-14',
    author: 'IT Tools Team',
  },
  {
    slug: 'list-converter-data-cleaning',
    title: '列表转换器在数据清洗中的应用',
    titleEn: 'List Converter in Data Cleaning',
    description: '深入了解如何使用列表转换工具快速处理大批量文本，去重、排序与格式化。',
    descriptionEn: 'Learn how to use list converter tools to quickly process bulk text, deduplicate, sort, and format.',
    content: `
# 列表转换器在数据清洗中的应用

在日常办公或开发中，我们经常会拿到一堆杂乱无章的文本列表，比如包含重复行的邮箱地址、需要批量添加前缀的 SQL 字段等。手动处理是非常耗时的。

## Q&A

### Q1: 列表转换器能做什么？
**A**: 它可以将多行文本进行排序（按字母或数字）、反转顺序、转换为大写或小写、批量添加前缀和后缀，最重要的是，它可以**一键去除重复项**。

### Q2: 为什么不直接使用 Excel？
**A**: Excel 确实可以做到大部分功能，但对于纯文本的快速处理，打开一个沉重的电子表格软件往往显得大材小用。在线的列表转换器无需安装任何软件，在浏览器中几秒钟即可完成。

### Q3: 去除重复项的算法是什么？
**A**: 在编程中，通常是利用 \`Set\` 数据结构。\`Set\` 是一种只允许存储唯一值的数据集合。通过将列表转换为 \`Set\` 再转换回数组，可以瞬间完成百万级文本行的去重工作。
`,
    contentEn: `
# List Converter in Data Cleaning

In daily work or development, we often receive messy text lists, like email addresses with duplicates, or SQL fields that need bulk prefixes. Manual processing is incredibly time-consuming.

## Q&A

### Q1: What can a List Converter do?
**A**: It can sort multiline text (alphabetically or numerically), reverse the order, convert cases, bulk add prefixes and suffixes, and most importantly, **remove duplicates with one click**.

### Q2: Why not just use Excel?
**A**: While Excel can do this, opening a heavy spreadsheet application for quick plain-text processing is often overkill. Online list converters require no installation and finish the job in seconds directly in your browser.

### Q3: What is the algorithm behind removing duplicates?
**A**: In programming, this is usually done using the \`Set\` data structure. A \`Set\` only stores unique values. By converting a list to a \`Set\` and back to an array, deduplicating millions of text lines can be done instantly.
`,
    keywords: ["列表转换","数据清洗","去重","排序"],
    keywordsEn: ["list converter","data cleaning","deduplicate","sorting"],
    publishedAt: '2024-03-15',
    author: 'IT Tools Team',
  },
  {
    slug: 'toml-vs-yaml-configuration',
    title: 'TOML 转 YAML 的配置迁移指南',
    titleEn: 'TOML to YAML Configuration Migration Guide',
    description: '随着 Rust 和 Python 生态的崛起，TOML 变得流行。了解如何在 TOML 和 YAML 间迁移。',
    descriptionEn: 'With the rise of Rust and Python ecosystems, TOML is popular. Learn how to migrate between TOML and YAML.',
    content: `
# TOML 转 YAML 的配置迁移指南

在很长一段时间里，YAML 是配置文件的霸主（比如 Kubernetes 和 Docker Compose）。但近年来，**TOML** (Tom's Obvious, Minimal Language) 开始崛起，成为了 Rust (Cargo.toml) 和 Python (pyproject.toml) 的官方选择。

## Q&A

### Q1: 为什么有的人更喜欢 TOML 而不是 YAML？
**A**: YAML 的“缩进地狱”让很多人抓狂。而 TOML 的语法更接近传统的 \`.ini\` 文件，完全不依赖缩进。这使得 TOML 文件对于深层嵌套的数据结构来说，虽然有时会显得啰嗦，但绝不会因为多敲了一个空格而导致整个程序崩溃。

### Q2: 为什么需要将 TOML 转换为 YAML？
**A**: 有时你需要将一个基于 TOML 的现代项目集成到依赖 YAML 的遗留系统（如某些 CI/CD 管道或 K8s 集群）中，这时候自动化转换工具就显得尤为重要。

### Q3: 转换过程中会丢失注释吗？
**A**: 大多数基础的格式转换器（基于序列化库）在解析时会忽略注释，因此转换出来的 YAML 通常不包含原 TOML 的注释。如果您需要保留注释，需要使用特殊的具备 AST（抽象语法树）解析能力的转换工具。
`,
    contentEn: `
# TOML to YAML Configuration Migration Guide

For a long time, YAML dominated configuration files (like Kubernetes and Docker Compose). However, **TOML** (Tom's Obvious, Minimal Language) has recently surged in popularity, becoming the official choice for Rust (Cargo.toml) and Python (pyproject.toml).

## Q&A

### Q1: Why do some prefer TOML over YAML?
**A**: YAML's "indentation hell" frustrates many. TOML's syntax resembles traditional \`.ini\` files and doesn't rely on whitespace. While TOML can be verbose for deeply nested structures, it will never crash your entire program just because you typed one extra space.

### Q2: Why would you need to convert TOML to YAML?
**A**: Sometimes you need to integrate a modern TOML-based project into a legacy system that relies exclusively on YAML (like certain CI/CD pipelines or K8s clusters). Automated conversion tools are essential here.

### Q3: Do comments get lost during conversion?
**A**: Most basic format converters (based on serialization libraries) ignore comments during parsing, so the resulting YAML usually lacks the original TOML's comments. If you must preserve comments, you need a specialized converter with AST (Abstract Syntax Tree) parsing capabilities.
`,
    keywords: ["TOML","YAML","格式转换","配置文件"],
    keywordsEn: ["TOML","YAML","format conversion","config files"],
    publishedAt: '2024-03-16',
    author: 'IT Tools Team',
  },
  {
    slug: 'math-evaluator-advanced-usage',
    title: '数学表达式计算器的进阶用法',
    titleEn: 'Advanced Usage of Math Evaluator',
    description: '超越传统的按钮计算器，学习如何直接输入复杂数学表达式并获取结果。',
    descriptionEn: 'Go beyond traditional button calculators. Learn to evaluate complex math expressions directly.',
    content: `
# 数学表达式计算器的进阶用法

传统的操作系统自带计算器通常需要用鼠标点击数字和符号，对于输入长串包含括号的复杂公式非常不友好。数学表达式计算器 (Math Evaluator) 则允许你像写代码一样直接输入公式。

## Q&A

### Q1: 表达式计算器支持哪些高级功能？
**A**: 优秀的表达式计算器不仅支持基础的加减乘除和括号改变优先级，还内置了大量数学函数，比如 \`sin()\`, \`cos()\`, \`sqrt()\` (平方根), \`abs()\` (绝对值)，甚至对数和指数运算。

### Q2: 在计算器中输入 0.1 + 0.2 会得到 0.3 吗？
**A**: 如果计算器底层直接使用 JavaScript 原生的浮点数机制，结果会是 \`0.30000000000000004\`。但优秀的数学求值库（如 \`math.js\`）会使用高精度（BigNumber）或分数机制来处理这些精度丢失问题，从而给出准确的 \`0.3\`。

### Q3: 这在实际开发中有什么用？
**A**: 当您在开发电商平台促销引擎或游戏伤害计算公式时，经常需要将后台配置的字符串公式（如 \`price * 0.8 + shipping\`）动态计算出结果。熟悉表达式求值器有助于您理解 AST 解析和安全的沙箱计算。
`,
    contentEn: `
# Advanced Usage of Math Evaluator

Traditional OS calculators require clicking buttons, which is incredibly unfriendly for inputting long, complex formulas with parentheses. A Math Evaluator allows you to type formulas directly, just like writing code.

## Q&A

### Q1: What advanced features do expression evaluators support?
**A**: A good evaluator goes beyond basic arithmetic and parentheses. It includes built-in functions like \`sin()\`, \`cos()\`, \`sqrt()\` (square root), \`abs()\` (absolute value), and even logarithmic and exponential operations.

### Q2: If I input 0.1 + 0.2, will I get exactly 0.3?
**A**: If the evaluator uses raw JavaScript floating-point math, you'll get \`0.30000000000000004\`. However, quality math libraries (like \`math.js\`) use BigNumber or fraction mechanisms to handle these precision issues and correctly return \`0.3\`.

### Q3: How is this useful in actual development?
**A**: When developing an e-commerce promotion engine or a game's damage calculator, you often need to dynamically evaluate string formulas configured in the backend (e.g., \`price * 0.8 + shipping\`). Familiarity with evaluators helps you understand AST parsing and safe sandboxed execution.
`,
    keywords: ["数学计算","表达式","浮点数精度","AST"],
    keywordsEn: ["math evaluator","expressions","floating point precision","AST"],
    publishedAt: '2024-03-17',
    author: 'IT Tools Team',
  },
  {
    slug: 'json-to-yaml-best-practices',
    title: 'JSON 转 YAML 的最佳实践',
    titleEn: 'JSON to YAML Best Practices',
    description: '为什么我们需要将臃肿的 JSON 转换为 YAML？在转换过程中应注意什么。',
    descriptionEn: 'Why do we need to convert bloated JSON to YAML? What to watch out for during conversion.',
    content: `
# JSON 转 YAML 的最佳实践

在云原生时代，几乎所有的编排工具（Kubernetes, Ansible, GitHub Actions）都偏爱 YAML，而大量 API 和日志吐出的却是 JSON。将 JSON 转为 YAML 是高频操作。

## Q&A

### Q1: 将 JSON 转换为 YAML 的主要目的是什么？
**A**: 为了**人类可读性**。一份包含深层嵌套的 500 行 JSON 配置文件阅读起来十分困难，到处都是引号和花括号。转换为 YAML 后，代码行数可能缩减 20%，并且结构通过缩进一目了然，更容易进行人工代码审查 (Code Review)。

### Q2: JSON 是 YAML 的子集吗？
**A**: 是的！从 YAML 1.2 规范开始，任何合法的 JSON 文件本身就是一个合法的 YAML 文件。这意味着 YAML 解析器可以直接解析纯 JSON 文本。但是我们仍然习惯将其转换为无括号、无引号的标准 YAML 格式以提升阅读体验。

### Q3: 转换时遇到超大数字会丢失精度吗？
**A**: 有可能。有些转换工具内部依然使用 JS 标准数字类型，遇到长达 20 位的 Snowflake ID 等超出 MAX_SAFE_INTEGER 的数字时，尾数可能会变成 0。最好将其先在 JSON 中转为字符串再行转换。
`,
    contentEn: `
# JSON to YAML Best Practices

In the cloud-native era, orchestration tools (Kubernetes, Ansible, GitHub Actions) prefer YAML, while APIs and logs predominantly output JSON. Converting JSON to YAML is a highly frequent operation.

## Q&A

### Q1: What is the main purpose of converting JSON to YAML?
**A**: **Human readability**. A 500-line deeply nested JSON config is hard to read, cluttered with quotes and braces. Converted to YAML, the line count might shrink by 20%, and the structure is instantly clear through indentation, making Code Reviews much easier.

### Q2: Is JSON a subset of YAML?
**A**: Yes! As of the YAML 1.2 specification, any valid JSON file is natively a valid YAML file. A YAML parser can parse raw JSON text directly. However, we still convert it to standard braceless, quoteless YAML format to improve the reading experience.

### Q3: Can large numbers lose precision during conversion?
**A**: Possibly. Some converters use standard JS number types internally. If they encounter numbers exceeding MAX_SAFE_INTEGER (like 20-digit Snowflake IDs), the trailing digits might turn into zeros. It's safer to ensure these are strings in the JSON before converting.
`,
    keywords: ["JSON","YAML","数据转换","云原生"],
    keywordsEn: ["JSON","YAML","data conversion","cloud native"],
    publishedAt: '2024-03-18',
    author: 'IT Tools Team',
  },
  {
    slug: 'url-parser-structure-guide',
    title: 'URL 解析器：深入理解 URL 结构',
    titleEn: 'URL Parser: Deep Dive into URL Structure',
    description: '通过 URL 解析工具，拆解并理解协议、主机名、路径和查询字符串等关键组成部分。',
    descriptionEn: 'Dissect and understand key components like protocol, hostname, path, and query strings using a URL parser.',
    content: `
# URL 解析器：深入理解 URL 结构

每天我们都在浏览器中输入 URL，但作为一个开发者，我们需要精确地知道 URL 中的每一段字符串代表什么含义，以及如何通过代码提取它们。

## Q&A

### Q1: 一个标准的 URL 由哪些部分组成？
**A**: 以 \`https://user:pass@www.example.com:8080/path/to/page?id=123#section1\` 为例：
- \`https\` = Protocol (协议)
- \`user:pass\` = Auth (身份验证，现已少用)
- \`www.example.com\` = Hostname (主机名)
- \`8080\` = Port (端口号)
- \`/path/to/page\` = Pathname (路径)
- \`?id=123\` = Search / Query String (查询字符串)
- \`#section1\` = Hash / Fragment (锚点/哈希片段)

### Q2: 为什么在前端代码中获取不到 Hash (#) 后面的内容？
**A**: Hash 片段（即 \`#\` 及其后面的内容）是**不会发送到服务器**的。它仅由浏览器在本地处理，通常用于单页应用（SPA）的路由控制，或者跳转到页面的特定位置。

### Q3: JavaScript 中如何解析 URL？
**A**: 现代浏览器和 Node.js 都原生支持 \`URL\` 接口。您可以直接 \`new URL(urlString)\`，返回的对象会自动帮您拆解好所有的部分，还可以通过 \`url.searchParams\` 方便地获取查询参数。
`,
    contentEn: `
# URL Parser: Deep Dive into URL Structure

We type URLs into browsers every day, but as a developer, you need to know exactly what every segment of a URL represents and how to extract it programmatically.

## Q&A

### Q1: What are the components of a standard URL?
**A**: Take \`https://user:pass@www.example.com:8080/path/to/page?id=123#section1\`:
- \`https\` = Protocol
- \`user:pass\` = Auth (rarely used now)
- \`www.example.com\` = Hostname
- \`8080\` = Port
- \`/path/to/page\` = Pathname
- \`?id=123\` = Search / Query String
- \`#section1\` = Hash / Fragment

### Q2: Why doesn't the server receive anything after the Hash (#)?
**A**: The Hash fragment (everything after the \`#\`) is **never sent to the server**. It is handled strictly locally by the browser, commonly used for routing in Single Page Applications (SPAs) or jumping to a specific anchor on a page.

### Q3: How do I parse a URL in JavaScript?
**A**: Modern browsers and Node.js natively support the \`URL\` interface. You can simply call \`new URL(urlString)\`. The returned object automatically dissects all parts, and you can easily read parameters using \`url.searchParams\`.
`,
    keywords: ["URL 解析","URL 结构","前端路由","JavaScript"],
    keywordsEn: ["URL parser","URL structure","frontend routing","JavaScript"],
    publishedAt: '2024-03-19',
    author: 'IT Tools Team',
  },
  {
    slug: 'iban-validator-explanation',
    title: 'IBAN 国际银行账户号码验证与 Q&A',
    titleEn: 'IBAN Validator & FAQ',
    description: '什么是 IBAN？为什么国际汇款需要它？了解它的结构和校验机制。',
    descriptionEn: 'What is IBAN? Why is it needed for international transfers? Learn its structure and validation mechanism.',
    content: `
# IBAN 国际银行账户号码验证与 Q&A

在进行跨境汇款时，您经常会被要求提供 IBAN (International Bank Account Number)。输入错误的 IBAN 会导致汇款失败并产生高额退汇手续费。

## Q&A

### Q1: IBAN 是什么？
**A**: IBAN 是一个国际公认的用于识别银行账户的系统，主要用于欧洲以及中东、北非和加勒比地区的一些国家。它最长可达 34 个字母数字字符。

### Q2: IBAN 的结构是怎样的？
**A**: 
1. 前两位是国家代码（如 \`DE\` 代表德国，\`GB\` 代表英国）。
2. 接下来的两位是**校验码 (Check Digits)**。
3. 剩余的部分是 BBAN (基本银行账户号码)，包含了银行代码、分行代码和具体的账号信息。

### Q3: 验证器是如何知道 IBAN 是否有效的？
**A**: 验证器不连接真实的银行数据库！它利用的是数学算法。IBAN 设计包含了一个基于 **MOD 97-10** 算法的校验码。验证器会将字母转换为数字，进行大规模的模运算。如果结果不是 1，则说明您输入的内容肯定有拼写错误。
`,
    contentEn: `
# IBAN Validator & FAQ

When making cross-border wire transfers, you are often asked to provide an IBAN (International Bank Account Number). A typo can result in failed transfers and hefty return fees.

## Q&A

### Q1: What is an IBAN?
**A**: IBAN is an internationally agreed system of identifying bank accounts, heavily used in Europe and parts of the Middle East, North Africa, and the Caribbean. It can consist of up to 34 alphanumeric characters.

### Q2: What is the structure of an IBAN?
**A**: 
1. The first two characters are the Country Code (e.g., \`DE\` for Germany, \`GB\` for the UK).
2. The next two are the **Check Digits**.
3. The remaining part is the BBAN (Basic Bank Account Number), containing the bank identifier, branch code, and account number.

### Q3: How does a validator know if an IBAN is valid?
**A**: It doesn't connect to a real bank database! It uses math. The IBAN is designed with check digits based on the **MOD 97-10** algorithm. The validator converts letters to numbers and performs a large modulo operation. If the result is not 1, you definitely made a typo.
`,
    keywords: ["IBAN","银行账户","校验码","国际汇款"],
    keywordsEn: ["IBAN","bank account","check digits","international wire"],
    publishedAt: '2024-03-20',
    author: 'IT Tools Team',
  },
  {
    slug: 'user-agent-parser-web-dev',
    title: '用户代理 (User-Agent) 解析器原理解密',
    titleEn: 'User-Agent Parser Principles Unveiled',
    description: '通过解析 User-Agent 字符串，服务器如何判断您是在用 iPhone 还是在用 Windows。',
    descriptionEn: 'How servers determine if you are using an iPhone or Windows by parsing the User-Agent string.',
    content: `
# 用户代理 (User-Agent) 解析器原理解密

在 Web 开发中，服务器往往需要知道客户端使用的设备和浏览器类型，以便返回最适合的网页版本（PC 端或移动端），这全靠 \`User-Agent\` 字符串。

## Q&A

### Q1: User-Agent 是一串什么样的文本？
**A**: 它是浏览器在每次发送 HTTP 请求时，附带在请求头中的一段标识自己身份的字符串。例如：\`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36\`。

### Q2: 为什么所有的浏览器都以 "Mozilla/5.0" 开头？
**A**: 这是一个历史遗留的谎言。在早期的浏览器大战中，很多网站只允许当时最先进的 Netscape (代号 Mozilla) 浏览器访问。为了能访问这些网站，IE 等后起之秀开始在自己的 User-Agent 中伪装成 Mozilla。时至今日，所有的现代浏览器依然保留了这个毫无意义的前缀以保证网站兼容性。

### Q3: User-Agent 解析器准确吗？
**A**: 它是通过庞大的正则表达式库进行匹配的，并不 100% 准确，而且可以被轻易伪造（比如爬虫经常伪装成 Google 浏览器）。现在 Web 标准正在推进 \`Client Hints\` API 来逐渐替代笨重的 User-Agent 字符串。
`,
    contentEn: `
# User-Agent Parser Principles Unveiled

In web development, servers often need to know the client's device and browser type to return the best optimized page (desktop or mobile). This relies entirely on the \`User-Agent\` string.

## Q&A

### Q1: What does a User-Agent string look like?
**A**: It's an identity string attached by the browser to the headers of every HTTP request. For example: \`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36\`.

### Q2: Why do all browsers start with "Mozilla/5.0"?
**A**: It's a historical lie. During the early browser wars, many sites only allowed access to the advanced Netscape browser (codenamed Mozilla). To gain access, competitors like IE started spoofing their User-Agents to pretend to be Mozilla. Today, all modern browsers still keep this meaningless prefix for backward compatibility with legacy sites.

### Q3: Are User-Agent parsers accurate?
**A**: They use massive libraries of Regular Expressions to match patterns. They are not 100% accurate and can be easily spoofed (crawlers frequently pretend to be Google Chrome). Web standards are currently pushing for the \`Client Hints\` API to eventually replace the clunky User-Agent string.
`,
    keywords: ["User-Agent","UA 解析","浏览器","Web 开发"],
    keywordsEn: ["User-Agent","UA parser","browsers","Web development"],
    publishedAt: '2024-03-21',
    author: 'IT Tools Team',
  },
  {
    slug: 'numeronym-i18n-k8s',
    title: 'i18n 等数字缩写 (Numeronym) 词典',
    titleEn: 'Numeronyms Dictionary: i18n, K8s and more',
    description: '揭秘科技圈常见的字母+数字缩写黑话，如 a11y、k8s、i18n。',
    descriptionEn: 'Demystifying common tech slang like a11y, k8s, i18n using numeronyms.',
    content: `
# i18n 等数字缩写 (Numeronym) 词典

在阅读技术文档或逛 GitHub 时，您一定经常看到 \`i18n\`, \`k8s\`, \`a11y\` 这样的词。它们被称为 **Numeronym (数字缩写)**。

## Q&A

### Q1: 这种缩写的规则是什么？
**A**: 最常见的规则是：取长单词的**第一个字母**和**最后一个字母**，然后算出**中间省略了多少个字母**，用这个数字代替。

### Q2: 能列举几个最常见的技术 Numeronym 吗？
**A**: 
- **i18n** = Internationalization (国际化)：i 和 n 之间有 18 个字母。
- **a11y** = Accessibility (无障碍性)：a 和 y 之间有 11 个字母。
- **l10n** = Localization (本地化)
- **k8s** = Kubernetes：k 和 s 之间有 8 个字母。

### Q3: 为什么我们要用这种奇怪的缩写？
**A**: 主要是为了**懒**。像 \`Internationalization\` 这样的词不仅拼写极长，而且经常被程序员拼错。使用 \`i18n\` 既简短，又能保证在全球开发者沟通中不出现拼写错误，现已成为一种约定俗成的极客黑话。
`,
    contentEn: `
# Numeronyms Dictionary: i18n, K8s and more

While reading tech docs or browsing GitHub, you've definitely seen terms like \`i18n\`, \`k8s\`, and \`a11y\`. These are known as **Numeronyms**.

## Q&A

### Q1: What is the rule behind this abbreviation?
**A**: The most common rule is: take the **first letter** and the **last letter** of a long word, count **how many letters are omitted in between**, and replace them with that number.

### Q2: What are the most common tech Numeronyms?
**A**: 
- **i18n** = Internationalization: 18 letters between i and n.
- **a11y** = Accessibility: 11 letters between a and y.
- **l10n** = Localization
- **k8s** = Kubernetes: 8 letters between k and s.

### Q3: Why do we use these strange abbreviations?
**A**: Mostly out of laziness and efficiency. Words like \`Internationalization\` are not only exhaustingly long but highly prone to typos by programmers. Using \`i18n\` is brief and ensures consistent spelling across global developer communications. It has become accepted geek slang.
`,
    keywords: ["数字缩写","Numeronym","i18n","k8s"],
    keywordsEn: ["numeronym","i18n","k8s","tech slang"],
    publishedAt: '2024-03-22',
    author: 'IT Tools Team',
  },
  {
    slug: 'case-converter-camelcase-snakecase',
    title: '驼峰命名等大小写转换工具指南',
    titleEn: 'Case Converter: camelCase, snake_case & More',
    description: '不同的编程语言有不同的命名规范。了解各种 Case 以及如何在它们之间快速转换。',
    descriptionEn: 'Different languages have different naming conventions. Understand various cases and convert them.',
    content: `
# 驼峰命名等大小写转换工具指南

无论是写代码、建数据库表，还是写 JSON 接口，命名规范 (Naming Convention) 是团队协作的底线。

## 常见的 Case 风格
1. **camelCase (小驼峰)**：\`myVariableName\`。首字母小写，其余单词首字母大写。JavaScript 和 Java 最爱。
2. **PascalCase (大驼峰)**：\`MyClassName\`。所有单词首字母大写。常用于类名或组件名。
3. **snake_case (蛇形命名)**：\`my_variable_name\`。全小写，下划线分隔。Python 和数据库字段的标配。
4. **kebab-case (烤肉串命名)**：\`my-css-class\`。全小写，连字符分隔。常用于 CSS 类名和 URL。

## Q&A

### Q1: 为什么 URL 和 CSS 类名偏爱 kebab-case？
**A**: 在早期的搜索引擎和系统中，下划线 \`_\` 有时不被当作单词分隔符。使用连字符 \`-\` 可以确保搜索引擎和双击选中功能完美分离单词。

### Q2: 后端给的 JSON 是 snake_case，前端要 camelCase 怎么办？
**A**: 这是很常见的摩擦。成熟的方案是在发送请求前使用全局拦截器和转换工具（Case Converter），在网络边界处自动将所有的 snake_case 键转为前端习惯的 camelCase。

### Q3: 数据库表名可以用驼峰吗？
**A**: 非常不建议！有些操作系统或数据库系统（如 MySQL 在 Windows 下）默认是不区分表名大小写的。使用驼峰可能导致在 Linux 生产环境和 Windows 开发环境下行为不一致。数据库请老老实实使用 \`snake_case\`。
`,
    contentEn: `
# Case Converter: camelCase, snake_case & More

Whether writing code, creating database tables, or designing JSON APIs, Naming Conventions are the baseline of team collaboration.

## Common Case Styles
1. **camelCase**: \`myVariableName\`. First letter lowercase, subsequent words capitalized. Standard in JavaScript and Java.
2. **PascalCase**: \`MyClassName\`. All words capitalized. Used for Classes and React components.
3. **snake_case**: \`my_variable_name\`. All lowercase, separated by underscores. Standard for Python and DB columns.
4. **kebab-case**: \`my-css-class\`. All lowercase, separated by hyphens. Standard for CSS and URLs.

## Q&A

### Q1: Why do URLs and CSS prefer kebab-case?
**A**: In older search engines and systems, underscores \`_\` were sometimes not treated as word separators. Using hyphens \`-\` guarantees that SEO bots and double-click selection mechanisms separate the words perfectly.

### Q2: The backend JSON uses snake_case, but the frontend needs camelCase. What do we do?
**A**: This is a common friction point. A mature solution is to use a global interceptor and a Case Converter at the network boundary to automatically convert all snake_case keys to camelCase before the frontend consumes them.

### Q3: Can I use camelCase for database table names?
**A**: Highly discouraged! Some OS or database systems (like MySQL on Windows) are case-insensitive for table names by default. Using camelCase might work locally but break when deployed to a case-sensitive Linux server. Stick to \`snake_case\` for databases.
`,
    keywords: ["大小写转换","驼峰命名","命名规范","代码风格"],
    keywordsEn: ["case converter","camelCase","snake_case","coding style"],
    publishedAt: '2024-03-23',
    author: 'IT Tools Team',
  },
  {
    slug: 'html-entities-xss-prevention',
    title: 'HTML 实体转义防范 XSS 攻击',
    titleEn: 'HTML Entities & XSS Prevention',
    description: '了解为什么需要将特殊字符转义为 HTML 实体，以及它如何保护您的网站免受跨站脚本攻击。',
    descriptionEn: 'Learn why escaping special characters to HTML entities protects your site from Cross-Site Scripting.',
    content: `
# HTML 实体转义防范 XSS 攻击

当用户在您的网站评论区输入 \`<script>alert(1)</script>\` 并提交时，如果您的网站没有任何防范，这段代码会在所有看到这条评论的用户的浏览器中执行。这就是恶名昭彰的 **XSS (跨站脚本) 攻击**。

## Q&A

### Q1: 什么是 HTML 实体 (Entities)？
**A**: 它是用一段以 \`&\` 开头、以 \`;\` 结尾的文本串来表示一个特殊字符。例如，小于号 \`<\` 的 HTML 实体是 \`&lt;\` (less than)。

### Q2: HTML 实体如何防止 XSS 攻击？
**A**: 当您将用户输入的所有特殊字符都转义为 HTML 实体后，输入内容就变成了 \`&lt;script&gt;alert(1)&lt;/script&gt;\`。浏览器在渲染时，只会把它当作纯文本显示在页面上，而不会把它当成可执行的 HTML 标签去运行。

### Q3: 哪些字符是必须转义的？
**A**: 至少要转义这 5 个“魔鬼字符”：
- \`<\` 转换为 \`&lt;\`
- \`>\` 转换为 \`&gt;\`
- \`&\` 转换为 \`&amp;\`
- \`"\` 转换为 \`&quot;\`
- \`'\` 转换为 \`&#39;\`
`,
    contentEn: `
# HTML Entities & XSS Prevention

When a user types \`<script>alert(1)</script>\` into your website's comment section, if your site has no defenses, this code will execute in the browsers of everyone viewing that comment. This is the notorious **XSS (Cross-Site Scripting) attack**.

## Q&A

### Q1: What are HTML Entities?
**A**: An entity is a string of text starting with \`&\` and ending with \`;\` that represents a special character. For example, the less-than sign \`<\` is represented by the HTML entity \`&lt;\`.

### Q2: How do HTML Entities prevent XSS attacks?
**A**: By escaping all special characters in user input into HTML entities, the payload becomes \`&lt;script&gt;alert(1)&lt;/script&gt;\`. When the browser renders the page, it treats this purely as display text, rather than executing it as HTML tags.

### Q3: Which characters MUST be escaped?
**A**: At minimum, escape these 5 "dangerous" characters:
- \`<\` becomes \`&lt;\`
- \`>\` becomes \`&gt;\`
- \`&\` becomes \`&amp;\`
- \`"\` becomes \`&quot;\`
- \`'\` becomes \`&#39;\`
`,
    keywords: ["HTML 实体","XSS 防御","Web 安全","前端开发"],
    keywordsEn: ["HTML entities","XSS prevention","web security","frontend"],
    publishedAt: '2024-03-24',
    author: 'IT Tools Team',
  },
  {
    slug: 'docker-run-to-compose-guide',
    title: 'Docker Run 转 Docker Compose 教程',
    titleEn: 'Docker Run to Docker Compose Tutorial',
    description: '为什么要从繁琐的 docker run 命令行转向优雅的 docker-compose.yml 文件？',
    descriptionEn: 'Why transition from cumbersome docker run CLI to elegant docker-compose.yml files?',
    content: `
# Docker Run 转 Docker Compose 教程

在刚接触 Docker 时，大家都在终端里敲又臭又长的 \`docker run -d -p 80:80 -v /path:/path --env KEY=VAL nginx\`。但当项目变大时，这种方式简直是噩梦。

## Q&A

### Q1: 为什么推荐使用 Docker Compose？
**A**: 
1. **基础设施即代码 (IaC)**：将启动参数固化在 \`docker-compose.yml\` 文件中，可以提交到 Git 进行版本管理。
2. **批量管理**：通过一条 \`docker-compose up -d\` 命令，就能按照依赖顺序同时启动数据库、后端、前端多个容器。
3. **可维护性**：直观的 YAML 格式，比一长串 Bash 命令好懂一万倍。

### Q2: docker run 中的 -v 参数在 Compose 中对应什么？
**A**: 对应 \`volumes\` 指令。它可以将宿主机的目录挂载到容器内，实现数据持久化。

### Q3: 转换器能转换所有的 docker run 参数吗？
**A**: 绝大多数常用的参数（如 -p 端口映射，-e 环境变量，-v 卷挂载，--name 容器名，--network 网络）都可以完美转换。但一些极其冷门或与 Docker Swarm 相关的参数可能需要手动调整。
`,
    contentEn: `
# Docker Run to Docker Compose Tutorial

When first learning Docker, everyone types out long, ugly commands like \`docker run -d -p 80:80 -v /path:/path --env KEY=VAL nginx\`. But as projects grow, this approach becomes a nightmare.

## Q&A

### Q1: Why is Docker Compose recommended?
**A**: 
1. **Infrastructure as Code (IaC)**: Startup parameters are defined in a \`docker-compose.yml\` file, which can be committed to Git for version control.
2. **Bulk Management**: A single \`docker-compose up -d\` command brings up your database, backend, and frontend containers simultaneously in the correct dependency order.
3. **Maintainability**: An intuitive YAML file is infinitely easier to read than a massive Bash command.

### Q2: What does the -v parameter in 'docker run' map to in Compose?
**A**: It maps to the \`volumes\` directive. It mounts a host directory into the container, ensuring data persistence.

### Q3: Can a converter translate ALL docker run arguments?
**A**: The vast majority of common arguments (-p ports, -e env vars, -v volumes, --name, --network) convert perfectly. However, extremely obscure flags or those specific to Docker Swarm might require manual tweaking in the YAML.
`,
    keywords: ["Docker","Docker Compose","容器化","运维"],
    keywordsEn: ["Docker","Docker Compose","containerization","DevOps"],
    publishedAt: '2024-03-25',
    author: 'IT Tools Team',
  },
  {
    slug: 'mac-address-lookup-networking',
    title: 'MAC 地址查找与网络设备识别',
    titleEn: 'MAC Address Lookup & Device Identification',
    description: '揭秘设备的物理身份证。为什么通过 MAC 地址可以查出设备的制造厂商？',
    descriptionEn: 'Unveil the physical ID card of devices. How can a MAC address reveal the manufacturer?',
    content: `
# MAC 地址查找与网络设备识别

如果 IP 地址是设备在网络上的“住址”，那么 MAC 地址（媒体访问控制地址）就是设备的“身份证号”或“指纹”。它被烧录在网卡的只读存储器中，全球唯一。

## Q&A

### Q1: 为什么通过 MAC 地址能查出厂商是谁？
**A**: 标准的 MAC 地址长度为 48 位（6 个字节），通常表示为 \`00:1A:2B:3C:4D:5E\`。其中，**前 3 个字节**（如 00:1A:2B）被称为 OUI (组织唯一标识符)。这个 OUI 是由 IEEE 统一分配给各大硬件厂商（如苹果、思科、华为）的。查找工具就是通过比对这前 3 个字节的公开数据库，瞬间认出设备的“娘家”。

### Q2: 既然 MAC 是唯一的，它会暴露我的隐私吗？
**A**: 过去会的。以前手机去商场，商场的免费 WiFi 探针可以通过记录 MAC 地址追踪您的行动轨迹。为了保护隐私，现在 iOS 和 Android 在连接非受信任的公共 WiFi 时，都会默认使用**随机生成的虚拟 MAC 地址**。

### Q3: MAC 地址在路由器设置里有什么用？
**A**: 常用于“白名单限制”（只有特定的 MAC 地址允许联网）或“静态 IP 绑定”（让 DHCP 服务器每次都给这个 MAC 分配固定的内网 IP）。
`,
    contentEn: `
# MAC Address Lookup & Device Identification

If an IP address is a device's "home address" on the network, the MAC (Media Access Control) address is its "ID card" or "fingerprint". It is hardcoded into the network card's ROM and is globally unique.

## Q&A

### Q1: How can a MAC address reveal the manufacturer?
**A**: A standard MAC address is 48 bits (6 bytes) long, usually written as \`00:1A:2B:3C:4D:5E\`. The **first 3 bytes** (e.g., 00:1A:2B) are known as the OUI (Organizationally Unique Identifier). The IEEE assigns these OUIs to hardware manufacturers (like Apple, Cisco, Huawei). A lookup tool simply matches these first 3 bytes against a public database to identify the creator.

### Q2: Since it's unique, does it expose my privacy?
**A**: It used to. In the past, mall WiFi trackers logged your MAC address to track your physical movement across stores. To combat this, iOS and Android now default to using **randomized, fake MAC addresses** when probing or connecting to public WiFi networks.

### Q3: What is a MAC address useful for in a router?
**A**: It's commonly used for "MAC Filtering" (whitelisting only specific devices to access the internet) or "Static IP Binding" (forcing the DHCP server to always assign the same local IP to a specific MAC).
`,
    keywords: ["MAC 地址","网络设备","OUI","网络安全"],
    keywordsEn: ["MAC address","network devices","OUI","cybersecurity"],
    publishedAt: '2024-03-26',
    author: 'IT Tools Team',
  },
  {
    slug: 'mime-types-file-extensions',
    title: 'MIME 类型大全及文件扩展名 Q&A',
    titleEn: 'MIME Types & File Extensions FAQ',
    description: '在网络世界中，浏览器如何知道下载的后缀为 .xyz 的文件到底是图片还是视频？',
    descriptionEn: 'In the web world, how does a browser know if a downloaded .xyz file is an image or video?',
    content: `
# MIME 类型大全及文件扩展名 Q&A

在 Windows 系统里，双击一个 \`.jpg\` 文件，系统就知道用看图软件打开，这依靠的是文件扩展名。但在 HTTP 互联网中，仅仅依靠扩展名是不够的，甚至是不安全的。

## Q&A

### Q1: 什么是 MIME 类型？
**A**: MIME (Multipurpose Internet Mail Extensions) 是一种互联网标准。当服务器向浏览器发送文件时，会在 HTTP 响应头中包含一个 \`Content-Type\` 字段（如 \`Content-Type: image/jpeg\`）。这就是 MIME 类型，它明确告诉浏览器这到底是个什么玩意儿。

### Q2: 为什么不直接使用扩展名而要用 MIME 类型？
**A**: URL 并不总是以扩展名结尾的（比如 \`https://api.example.com/avatar/user123\`）。没有后缀，浏览器就只能抓瞎。而有了 MIME 头，浏览器立刻就知道这是一张图片并进行渲染。此外，基于 MIME 类型也更利于安全防范，防止恶意代码伪装成正常文件扩展名。

### Q3: 如果服务器返回错误的 MIME 会怎样？
**A**: 浏览器会强行按照错误的 MIME 去处理。比如，如果您本该提供一个供用户下载的 \`.zip\` 文件，但服务器将 MIME 设置为了 \`text/plain\`，浏览器不会弹出下载框，而会把一堆乱码像天书一样直接显示在网页上。
`,
    contentEn: `
# MIME Types & File Extensions FAQ

In Windows, double-clicking a \`.jpg\` tells the system to open an image viewer, relying on the file extension. But on the HTTP internet, relying solely on extensions is insufficient and insecure.

## Q&A

### Q1: What is a MIME Type?
**A**: MIME (Multipurpose Internet Mail Extensions) is an internet standard. When a server sends a file to a browser, it includes a \`Content-Type\` header (e.g., \`Content-Type: image/jpeg\`). This MIME type explicitly tells the browser exactly what kind of data it's receiving.

### Q2: Why use MIME types instead of just file extensions?
**A**: URLs don't always end with extensions (like \`https://api.example.com/avatar/user123\`). Without an extension, the browser would be guessing. With a MIME header, it instantly knows it's an image and renders it. It also prevents security issues where malicious scripts disguise themselves with fake extensions.

### Q3: What happens if the server returns the wrong MIME type?
**A**: The browser will forcefully process it according to the incorrect MIME. For example, if you serve a \`.zip\` download but the server sets the MIME to \`text/plain\`, the browser won't trigger a file download; instead, it will display a page full of gibberish binary text to the user.
`,
    keywords: ["MIME 类型","Content-Type","文件扩展名","HTTP"],
    keywordsEn: ["MIME types","Content-Type","file extensions","HTTP"],
    publishedAt: '2024-03-27',
    author: 'IT Tools Team',
  },
  {
    slug: 'toml-to-json-parsing',
    title: 'TOML 转 JSON 的自动化转换',
    titleEn: 'Automated Conversion from TOML to JSON',
    description: '如何将适合人类阅读的 TOML 配置文件低成本地转换为机器最爱的 JSON 数据格式。',
    descriptionEn: 'How to efficiently convert human-readable TOML configurations into machine-loved JSON.',
    content: `
# TOML 转 JSON 的自动化转换

我们已经知道 TOML 是为了让人类写配置写得舒服而发明的，但到了机器解析环节，JSON 才是真正的一等公民。

## Q&A

### Q1: 为什么要将 TOML 转成 JSON？
**A**: 几乎所有的现代编程语言标准库中都内置了闪电般快速的 JSON 解析器（如 \`JSON.parse()\`, \`json.loads()\`）。而解析 TOML 往往需要引入庞大的第三方库。在构建流程 (CI/CD) 或 Webpack 打包中，把 TOML 提前编译为 JSON，可以让运行时应用程序更轻巧、加载更快。

### Q2: TOML 表 (Tables) 对应 JSON 的什么？
**A**: TOML 中的表（由方括号包围的标题，如 \`[database]\`）在转换为 JSON 时，会完美映射为一个嵌套的 JSON 对象（Object）。

### Q3: 转换过程中遇到日期时间类型会怎样？
**A**: TOML 原生支持一等公民的日期时间类型（如 RFC 3339 格式）。但 JSON 规范里其实是**没有**日期类型的。因此在转换时，TOML 的时间通常会被降级转换为普通的 JSON 字符串。
`,
    contentEn: `
# Automated Conversion from TOML to JSON

We know TOML was invented to make writing configuration comfortable for humans, but when it comes to machine parsing, JSON is the absolute first-class citizen.

## Q&A

### Q1: Why convert TOML to JSON?
**A**: Almost every modern programming language has a lightning-fast, built-in JSON parser (like \`JSON.parse()\`, \`json.loads()\`). Parsing TOML usually requires heavy third-party libraries. By pre-compiling TOML into JSON during your build process (CI/CD), your runtime application stays lightweight and loads faster.

### Q2: What do TOML Tables map to in JSON?
**A**: TOML tables (headers enclosed in square brackets, like \`[database]\`) map perfectly to nested JSON Objects during conversion.

### Q3: What happens to DateTime types during conversion?
**A**: TOML natively supports first-class Datetime types (like RFC 3339 formats). However, the JSON specification **does not** have a native date type. Therefore, during conversion, TOML dates are downgraded and converted into standard JSON strings.
`,
    keywords: ["TOML","JSON","配置解析","数据转换"],
    keywordsEn: ["TOML","JSON","config parsing","data conversion"],
    publishedAt: '2024-03-28',
    author: 'IT Tools Team',
  },
  {
    slug: 'lorem-ipsum-generator-history',
    title: '乱数假文 (Lorem Ipsum) 的排版历史',
    titleEn: 'The Typographical History of Lorem Ipsum',
    description: '为什么全世界的设计师都在用一段看不懂的拉丁文作为占位符？',
    descriptionEn: 'Why do designers worldwide use an incomprehensible Latin text as a placeholder?',
    content: `
# 乱数假文 (Lorem Ipsum) 的排版历史

当您打开任何一个 UI 模板或 WordPress 主题，您总会看到 "Lorem ipsum dolor sit amet..." 这段文字。这被称为乱数假文 (Dummy Text)。

## Q&A

### Q1: 这段文字到底是什么意思？
**A**: 它其实是一段被故意打乱的古典拉丁文，取自公元前 45 年西塞罗的名著《善恶之尽》。原文的意思是探讨痛苦与快乐的哲学，但在打乱后，它就变成了一堆毫无语法和意义的废话。

### Q2: 为什么不用 "测试测试测试" 或者 "Hello World" 来占位？
**A**: 因为英文字母具有不同的宽度和字距。如果通篇使用重复的单词，排版出来的段落看起来会非常不自然，产生“河流效应”（行间留白连成一条线）。Lorem Ipsum 拥有近乎正态分布的字母出现频率，能够最真实地模拟自然英语段落的视觉质感。

### Q3: 这种做法是从什么时候开始的？
**A**: 早在 16 世纪，一位不知名的印刷工为了展示各种字体的排版效果，就把一页文字打乱排版，发明了这种做法，一直沿用到今天的数字时代。
`,
    contentEn: `
# The Typographical History of Lorem Ipsum

Whenever you open a UI template or WordPress theme, you inevitably see "Lorem ipsum dolor sit amet...". This is known as dummy text or placeholder text.

## Q&A

### Q1: What does this text actually mean?
**A**: It is a scrambled piece of classical Latin literature from 45 BC, taken from Cicero's "De finibus bonorum et malorum". The original text discusses the philosophy of pain and pleasure, but scrambled, it is grammatically meaningless nonsense.

### Q2: Why not just use "Test test test" or "Hello World" as placeholders?
**A**: Because English letters have varying widths and kerning. If you use repeating words, the typographical distribution looks highly unnatural, creating a visual "river" effect. Lorem Ipsum has a more-or-less normal distribution of letters, perfectly simulating the visual texture of natural English text.

### Q3: When did this practice start?
**A**: It has been used since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It survived the centuries and made the leap into electronic typesetting.
`,
    keywords: ["Lorem Ipsum","排版设计","UI 占位符","前端设计"],
    keywordsEn: ["Lorem Ipsum","typography","UI placeholder","frontend design"],
    publishedAt: '2024-03-29',
    author: 'IT Tools Team',
  },
  {
    slug: 'qr-code-generation-principles',
    title: '二维码 (QR Code) 生成原理与问答',
    titleEn: 'QR Code Generation Principles & FAQ',
    description: '每天扫几百次的二维码，它是如何将网址和信息变成黑白方块的？',
    descriptionEn: 'How do the QR codes we scan daily turn URLs and info into black and white squares?',
    content: `
# 二维码 (QR Code) 生成原理与问答

如今我们生活在“扫码时代”，加好友、付款、看菜单都要扫二维码。QR Code（Quick Response Code，快速响应矩阵码）是最流行的一种二维条码。

## Q&A

### Q1: 为什么二维码缺了一个角也能扫出来？
**A**: 这得益于二维码内置的 **Reed-Solomon 纠错算法**。根据生成时设置的容错级别（L, M, Q, H），二维码最高可以容忍 **30%** 的图像污损或缺失。这也是为什么很多公司可以把 Logo 堂而皇之地放在二维码正中间，而不影响扫码。

### Q2: 二维码的三个大方块是干什么的？
**A**: 它们叫做**定位图案 (Position Detection Patterns)**。不管您正着扫、倒着扫还是歪着扫，手机相机一看到这三个方块，就能立刻在空间中确定二维码的坐标系和旋转角度。

### Q3: 二维码能存多少东西？
**A**: 它比传统的一维条形码强大得多。最大版本的二维码可以存储 7089 个数字，或 4296 个英文字母，甚至是两千多个汉字。
`,
    contentEn: `
# QR Code Generation Principles & FAQ

We live in a "scan-and-go" era. Adding friends, paying, and reading menus all require scanning a QR Code (Quick Response Code), the most popular type of 2D barcode.

## Q&A

### Q1: Why can a QR code still be scanned even if part of it is torn or covered?
**A**: This is due to the built-in **Reed-Solomon error correction algorithm**. Depending on the error correction level chosen during generation (L, M, Q, H), a QR code can sustain up to **30%** damage and still be perfectly readable. This is why you can safely place a company logo right in the middle of a QR code.

### Q2: What are those three large squares in the corners for?
**A**: They are called **Position Detection Patterns**. Whether you scan it upside down or at an angle, your phone's camera instantly recognizes these three squares to determine the orientation and correct angle of the code.

### Q3: How much data can a QR code hold?
**A**: Much more than traditional 1D barcodes. The largest version can store up to 7,089 numeric characters, 4,296 alphanumeric characters, or over 2,000 Kanji characters.
`,
    keywords: ["二维码","QR Code","纠错算法","扫码"],
    keywordsEn: ["QR Code","barcode","error correction","scanning"],
    publishedAt: '2024-03-30',
    author: 'IT Tools Team',
  },
  {
    slug: 'wifi-qr-code-how-it-works',
    title: 'WiFi 二维码生成器：扫码连网原理',
    titleEn: 'WiFi QR Code Generator: How Scan-to-Connect Works',
    description: '家里来客人的时候，不用再报那串极其复杂的 WiFi 密码了。',
    descriptionEn: 'When guests arrive, stop spelling out that horribly complex WiFi password.',
    content: `
# WiFi 二维码生成器：扫码连网原理

每次有朋友来家里，都要经历“密码是多少”、“大写还是小写”的痛苦。使用 WiFi 二维码生成器可以制作一张“扫一扫连网”的卡片贴在桌上。

## Q&A

### Q1: 扫码连 WiFi 是怎么做到的？
**A**: WiFi 二维码其实并不神秘，它只是在二维码里存了一串固定格式的纯文本。格式通常是：\`WIFI:T:WPA;S:MyNetworkName;P:MyPassword;;\`。iOS 和 Android 的相机系统在识别到这种特定前缀后，会自动唤起系统的网络设置，执行连接操作。

### Q2: 生成 WiFi 二维码安全吗？
**A**: 是绝对安全的，因为生成过程是在您的浏览器本地完全离线进行的。网络名称 (SSID) 和密码只存在于您电脑的内存中，变成图片后直接展示，不会上传到任何服务器。

### Q3: 隐藏的网络 (Hidden SSID) 能用二维码吗？
**A**: 可以。在生成格式中加入 \`H:true\` 标志即可。例如 \`WIFI:T:WPA;S:MyHiddenNet;P:Password;H:true;;\`，手机扫码后会知道这是一个隐藏网络并尝试连接。
`,
    contentEn: `
# WiFi QR Code Generator: How Scan-to-Connect Works

Every time a friend visits, you endure the "What's the password?" and "Is that a capital letter?" routine. A WiFi QR Code generator creates a scan-to-connect card you can stick on your desk.

## Q&A

### Q1: How does scanning a code connect me to WiFi?
**A**: There's no deep magic. A WiFi QR code simply stores a plain text string in a standardized format. It usually looks like this: \`WIFI:T:WPA;S:MyNetworkName;P:MyPassword;;\`. When iOS and Android cameras read this specific prefix, they automatically trigger the system's network settings to initiate the connection.

### Q2: Is it safe to generate a WiFi QR code online?
**A**: It is perfectly safe because the generation happens entirely offline locally within your browser. The SSID and password only exist in your computer's RAM, are drawn onto an image, and are never uploaded to any server.

### Q3: Does this work for hidden networks (Hidden SSID)?
**A**: Yes. You simply include the \`H:true\` flag in the string format. For example: \`WIFI:T:WPA;S:MyHiddenNet;P:Password;H:true;;\`. The phone will parse this and know it must actively search for a hidden network.
`,
    keywords: ["WiFi","二维码","网络连接","实用工具"],
    keywordsEn: ["WiFi","QR Code","network connection","utility tools"],
    publishedAt: '2024-03-31',
    author: 'IT Tools Team',
  },
  {
    slug: 'xml-formatter-legacy-data',
    title: 'XML 格式化：解析传统数据交换格式',
    titleEn: 'XML Formatter: Parsing Legacy Data Formats',
    description: '虽然 JSON 统治了现代 Web，但 XML 依然在企业级应用和遗留系统中扮演着核心角色。',
    descriptionEn: 'While JSON rules the modern Web, XML still plays a core role in enterprise apps and legacy systems.',
    content: `
# XML 格式化：解析传统数据交换格式

在 JSON 崛起之前，**XML** (eXtensible Markup Language，可扩展标记语言) 是 Web Services (特别是 SOAP 协议) 和配置文件绝对的统治者。

## Q&A

### Q1: 为什么现代 Web 开发越来越少用 XML？
**A**: XML 被很多人诟病为“过于沉重”。因为它是基于标签闭合的（如 \`<name>John</name>\`），导致数据在传输时，有一半的体积被用于描述结构的标签占据，严重浪费带宽。相比之下 JSON 要轻量得多。

### Q2: XML 已经被淘汰了吗？
**A**: 绝对没有。在银行系统、医疗数据交换（如 HL7）、RSS 订阅、甚至 Android UI 布局文件中，XML 依然是标准。它支持强大的 Schema 验证和 XPath 查询，这是基础 JSON 无法做到的。

### Q3: 为什么压缩的 XML 必须使用格式化工具？
**A**: 机器交互的 XML 通常删除了所有换行和缩进，变成毫无破绽的“一坨”标签。不用说阅读了，普通文本编辑器甚至会因为单行字符数百万行而直接卡死。XML Formatter 可以将其解析为优美的树状结构。
`,
    contentEn: `
# XML Formatter: Parsing Legacy Data Formats

Before the rise of JSON, **XML** (eXtensible Markup Language) was the absolute ruler of Web Services (especially the SOAP protocol) and configuration files.

## Q&A

### Q1: Why is XML used less in modern web development?
**A**: XML is heavily criticized for being "too bloated." Because it relies on opening and closing tags (like \`<name>John</name>\`), up to half the payload size is often just structural overhead, wasting bandwidth. JSON is much lighter in comparison.

### Q2: Is XML completely obsolete?
**A**: Absolutely not. It remains the gold standard in banking systems, healthcare data exchange (like HL7), RSS feeds, and even Android UI layout files. XML natively supports robust Schema validation and powerful XPath querying, things basic JSON struggles with.

### Q3: Why is a formatting tool essential for minified XML?
**A**: Machine-generated XML strips all whitespace and newlines, resulting in an impenetrable wall of tags. It's unreadable, and standard text editors might even freeze when attempting to open a single line with millions of characters. An XML Formatter parses this into a beautiful, readable tree structure.
`,
    keywords: ["XML","格式化","数据交换","SOAP"],
    keywordsEn: ["XML","formatter","data exchange","SOAP"],
    publishedAt: '2024-04-01',
    author: 'IT Tools Team',
  },
  {
    slug: 'temperature-converter-celsius-fahrenheit',
    title: '温度转换器：摄氏度、华氏度与开尔文',
    titleEn: 'Temperature Converter: Celsius, Fahrenheit & Kelvin',
    description: '探索世界各地的温度测量标准，轻松在三大温标之间进行转换。',
    descriptionEn: 'Explore global temperature measurement standards and easily convert between the three major scales.',
    content: `
# 温度转换器：摄氏度、华氏度与开尔文

气象应用、科学论文或者国际航班的广播里，温度单位总是让人一头雾水。温度转换器是我们日常必备的小工具。

## Q&A

### Q1: 世界上主要有哪些温标？
**A**: 
1. **摄氏度 (Celsius, °C)**：世界上绝大多数国家使用的标准，以水的冰点为 0 度，沸点为 100 度。
2. **华氏度 (Fahrenheit, °F)**：主要在美国使用。水的冰点为 32 度，沸点为 212 度。
3. **开尔文 (Kelvin, K)**：国际单位制中的温度热力学单位，常用于科学研究。

### Q2: 摄氏度和华氏度的换算公式是什么？
**A**: \`°F = °C × 1.8 + 32\`。如果您想快速心算：把摄氏度乘以 2 再加上 30，能得出一个大致准确的华氏度。

### Q3: 什么是“绝对零度”？
**A**: 绝对零度是热力学理论中的最低可能温度，即开尔文 0 度（0 K）。在这个温度下，所有粒子的热运动完全停止。换算成日常单位，绝对零度是摄氏 -273.15 °C 或华氏 -459.67 °F。
`,
    contentEn: `
# Temperature Converter: Celsius, Fahrenheit & Kelvin

Whether in weather apps, scientific papers, or international flight announcements, temperature units can be confusing. A temperature converter is an essential daily utility.

## Q&A

### Q1: What are the main temperature scales in the world?
**A**: 
1. **Celsius (°C)**: The standard for most of the world. Water freezes at 0 degrees and boils at 100.
2. **Fahrenheit (°F)**: Used primarily in the United States. Water freezes at 32 degrees and boils at 212.
3. **Kelvin (K)**: The thermodynamic temperature scale in the International System of Units (SI), used heavily in science.

### Q2: What is the formula to convert Celsius to Fahrenheit?
**A**: \`°F = °C × 1.8 + 32\`. A quick mental math trick: multiply the Celsius temperature by 2 and add 30 to get a rough estimate of the Fahrenheit equivalent.

### Q3: What is "Absolute Zero"?
**A**: Absolute zero is the lowest possible temperature in thermodynamics, defined as 0 Kelvin (0 K). At this temperature, all thermal motion of particles stops completely. In daily units, absolute zero is -273.15 °C or -459.67 °F.
`,
    keywords: ["温度转换","摄氏度","华氏度","科学计算"],
    keywordsEn: ["temperature conversion","Celsius","Fahrenheit","scientific calculator"],
    publishedAt: '2024-04-02',
    author: 'IT Tools Team',
  },
  {
    slug: 'linux-chmod-permissions-calculator',
    title: 'Linux Chmod 权限计算器图解',
    titleEn: 'Linux Chmod Permissions Calculator Explained',
    description: '还在头疼 rwxr-xr-x 和 755 是什么意思吗？这篇帮你彻底搞懂 Linux 文件权限。',
    descriptionEn: 'Still confused by rwxr-xr-x and 755? This will help you fully understand Linux file permissions.',
    content: `
# Linux Chmod 权限计算器图解

在部署服务器时，我们经常要运行 \`chmod 755 script.sh\` 或 \`chmod 644 config.yml\`。这些神仙数字究竟是怎么算出来的？

## Q&A

### Q1: Linux 文件权限分为哪几类人？
**A**: 权限被严格划分为三组（UGO）：
1. **User (u)**：文件的所有者。
2. **Group (g)**：文件所属的用户组中的成员。
3. **Others (o)**：全网其他所有人。

### Q2: 数字 7, 5, 4 代表什么？
**A**: 这是基于八进制的二进制位运算 (Bitwise)：
- **4 (读, Read, r)**：100（二进制）
- **2 (写, Write, w)**：010（二进制）
- **1 (执行, Execute, x)**：001（二进制）

把它们加起来！比如：\`读(4) + 写(2) + 执行(1) = 7\`。\`读(4) + 执行(1) = 5\`。所以著名的 \`755\` 就是：所有者全权(7)，组员只读和执行(5)，其他人只读和执行(5)。

### Q3: 为什么文件夹权限通常是 755，而文件是 644？
**A**: 对于一个文件夹，所谓的“执行权限(x)”代表着**“能否进入该目录 (cd)”**。如果一个目录没有 x 权限，任何人都进不去！所以目录通常带有奇数 (含1) 权限。而普通文本文件不需要当作脚本去运行，所以剥夺执行权限，给 644 最安全。
`,
    contentEn: `
# Linux Chmod Permissions Calculator Explained

When deploying servers, we constantly run \`chmod 755 script.sh\` or \`chmod 644 config.yml\`. How exactly are these magical numbers calculated?

## Q&A

### Q1: Who do Linux file permissions apply to?
**A**: Permissions are strictly grouped into three categories (UGO):
1. **User (u)**: The owner of the file.
2. **Group (g)**: Members of the group the file belongs to.
3. **Others (o)**: Everyone else on the system.

### Q2: What do the numbers 7, 5, and 4 mean?
**A**: It's based on octal representation of binary bitwise operations:
- **4 (Read, r)**: 100 (binary)
- **2 (Write, w)**: 010 (binary)
- **1 (Execute, x)**: 001 (binary)

Add them up! For example: \`Read(4) + Write(2) + Execute(1) = 7\`. \`Read(4) + Execute(1) = 5\`. So, the famous \`755\` means: Owner has all rights (7), Group can read/execute (5), Others can read/execute (5).

### Q3: Why are directories usually 755, but files are 644?
**A**: For a directory, the "Execute (x)" permission actually means **"Can enter the directory (cd)"**. If a directory lacks the x permission, no one can enter it! So directories usually have odd-numbered permissions (including 1). Normal text files don't need to be run as scripts, so stripping the execute permission leaving \`644\` is the safest.
`,
    keywords: ["Linux 权限","Chmod","运维","服务器部署"],
    keywordsEn: ["Linux permissions","Chmod","DevOps","server deployment"],
    publishedAt: '2024-04-03',
    author: 'IT Tools Team',
  },
  {
    slug: 'otp-generator-2fa-security',
    title: 'OTP (一次性密码) 生成器与 2FA 安全',
    titleEn: 'OTP (One-Time Password) Generator & 2FA Security',
    description: '扫个二维码就能每分钟生成不同的六位密码，Google Authenticator 背后的原理是什么？',
    descriptionEn: 'Scan a QR code and generate a different 6-digit PIN every minute. How does Google Authenticator work?',
    content: `
# OTP (一次性密码) 生成器与 2FA 安全

如今，为了账号安全，我们通常会开启 2FA（双因素认证）。登录时除了输密码，还要打开手机上的 Google Authenticator 看一下随时间变换的 6 位数字。这就是 TOTP。

## Q&A

### Q1: 手机没有网络，为什么也能生成正确的验证码？
**A**: 这是 TOTP (Time-Based One-Time Password) 最神奇的地方。算法只依赖两样东西：**双方共享的秘钥（您扫的那个二维码里藏的字符串）** 和 **当前的时间（通常精确到 30 秒）**。只要您的手机系统时间和服务器的时间是一致的，不需要任何网络通信，两边独立算出来的 6 位数必然一样。

### Q2: 如果有人截获了我当前的 6 位数密码，他能登录吗？
**A**: 如果在 30 秒内，他能登录。但只要过了这 30 秒的窗口期，验证码就会刷新并失效。这就是为什么一次性密码极大提升了抗钓鱼和抗密码泄露的能力。

### Q3: 手机丢了，验证码应用也进不去了怎么办？
**A**: 灾难！如果您没有在开启 2FA 时保存下那串初始的 Backup Codes (备用恢复码) 或者二维码密钥，您将很难再找回账号。所以，备份最初始的 2FA 密钥极其重要。
`,
    contentEn: `
# OTP (One-Time Password) Generator & 2FA Security

To secure our accounts today, we enable 2FA (Two-Factor Authentication). Besides the password, we open Google Authenticator on our phones to read a constantly changing 6-digit number. This is TOTP.

## Q&A

### Q1: How does my phone generate the correct code even in airplane mode without internet?
**A**: This is the magic of TOTP (Time-Based One-Time Password). The algorithm relies on only two things: **a shared secret key (hidden in the QR code you scanned initially)** and **the current time (usually truncated to 30-second intervals)**. As long as your phone's clock matches the server's clock, both sides independently calculate the exact same 6 digits without any network communication.

### Q2: If a hacker intercepts my current 6-digit code, can they log in?
**A**: Within that 30-second window, yes. But once the window passes, the code refreshes and the intercepted code becomes permanently invalid. This is why OTPs are incredibly resilient against phishing and password leaks.

### Q3: What happens if I lose my phone and can't access the authenticator app?
**A**: Disaster! If you did not save the Backup Codes or the initial QR secret key provided when you set up 2FA, it can be nearly impossible to recover the account. Always securely back up the initial 2FA key!
`,
    keywords: ["OTP","2FA","两步验证","信息安全","密码学"],
    keywordsEn: ["OTP","2FA","two-factor auth","cybersecurity","cryptography"],
    publishedAt: '2024-04-04',
    author: 'IT Tools Team',
  },
];




export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
