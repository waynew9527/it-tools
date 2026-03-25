<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const isZh = computed(() => locale.value === 'zh');

const pageTitle = computed(() => (isZh.value ? '常见问题' : 'Frequently Asked Questions'));

useHead({
  title: computed(() => `${pageTitle.value} - IT Tools`),
  meta: [
    {
      name: 'description',
      content: computed(() =>
        isZh.value
          ? 'IT Tools 常见问题解答。了解更多关于隐私保护、功能特性以及如何使用开发者工具。'
          : 'Frequently Asked Questions about IT Tools. Learn about privacy, features, and how to use our developer tools.',
      ),
    },
    { name: 'robots', content: 'index, follow' },
  ],
});

const faqSections = computed(() => {
  if (isZh.value) {
    return [
      {
        title: '通用问题',
        items: [
          {
            q: '什么是 IT Tools？',
            a: 'IT Tools 是一个免费、开源的在线工具集合，专为开发者和 IT 专业人员设计。包括编码、解密、加密、转换、生成等多种功能，全部在浏览器中运行。',
          },
          {
            q: 'IT Tools 是免费的吗？',
            a: '是的，IT Tools 完全免费。您可以免费使用所有工具，无需付费。项目是开源的，欢迎贡献。',
          },
          {
            q: '需要安装任何软件吗？',
            a: '不需要。IT Tools 完全在浏览器中运行。只需访问我们的网站，即可立即使用工具。无需注册或安装。',
          },
        ],
      },
      {
        title: '隐私与安全',
        items: [
          {
            q: '我的数据安全吗？',
            a: '是的。所有工具操作都在您的浏览器中本地执行。您的数据不会离开您的设备，也不会发送到我们的服务器。',
          },
          {
            q: '你们使用 cookies 吗？',
            a: '我们仅使用必要的 cookies 来保存您的偏好设置（主题、语言、收藏工具）。我们不使用追踪 cookies 或第三方广告 cookies。',
          },
          {
            q: '可以离线使用 IT Tools 吗？',
            a: '可以。首次加载后，大多数工具都可以离线使用。但部分工具可能需要网络连接。',
          },
        ],
      },
      {
        title: '功能特性',
        items: [
          {
            q: '有哪些类型的工具？',
            a: '我们提供以下类别的工具：加密工具、转换器、生成器、网络工具、数学工具、文本工具等。',
          },
          { q: '如何收藏工具？', a: '点击任意工具上的星标图标即可添加到收藏。您的收藏保存在浏览器的本地存储中。' },
          { q: '可以请求新工具吗？', a: '当然可以。请在我们的 GitHub Issues 页面提交功能请求。' },
        ],
      },
      {
        title: '技术问题',
        items: [
          {
            q: '使用了什么技术？',
            a: 'IT Tools 基于 Vue 3、Naive UI 和 Vite 构建。使用了各种用于加密、解析和格式化的开源库。',
          },
          { q: '源代码可用吗？', a: '可用。项目采用 GNU GPLv3 开源许可证。您可以在我们的 GitHub 仓库查看源代码。' },
          { q: '如何贡献？', a: '您可以通过以下方式贡献：报告错误、建议新功能、改进文档、提交 Pull Request。' },
        ],
      },
      {
        title: '联系我们',
        items: [
          {
            q: '如何获取支持？',
            a: '如需错误报告或功能请求，请使用 GitHub Issues。其他问题请发送邮件至 support@it-tools.eu.cc。',
          },
        ],
      },
    ];
  }

  return [
    {
      title: 'General',
      items: [
        {
          q: 'What is IT Tools?',
          a: 'IT Tools is a free, open-source collection of online utilities designed for developers and IT professionals. It includes tools for encoding, decoding, encryption, conversion, generation, and more - all running entirely in your browser.',
        },
        {
          q: 'Is IT Tools free to use?',
          a: 'Yes, IT Tools is completely free. You can use all tools without any cost. The project is open-source, and contributions are welcome.',
        },
        {
          q: 'Do I need to install anything?',
          a: 'No. IT Tools runs entirely in your browser. Simply visit our website and start using the tools immediately. No registration or installation required.',
        },
      ],
    },
    {
      title: 'Privacy & Security',
      items: [
        {
          q: 'Is my data safe?',
          a: 'Yes. All tool operations are performed client-side in your browser. Your data never leaves your device or gets sent to our servers. We do not store, log, or transmit any personal information you enter into the tools.',
        },
        {
          q: 'Do you use cookies?',
          a: 'We use only essential cookies to save your preferences (theme, language, favorite tools). We do not use tracking cookies or third-party advertising cookies.',
        },
        {
          q: 'Can I use IT Tools offline?',
          a: 'Yes, after the first load, most tools work offline. However, some tools may require an internet connection.',
        },
      ],
    },
    {
      title: 'Features',
      items: [
        {
          q: 'What types of tools are available?',
          a: 'We offer tools in these categories: Crypto, Converters, Generators, Network, Math, Text tools, and more.',
        },
        {
          q: 'How do I save favorite tools?',
          a: 'Click the star icon on any tool to add it to your favorites. Your favorites are saved locally in your browser.',
        },
        { q: 'Can I request a new tool?', a: 'Absolutely. Please open a feature request on our GitHub Issues page.' },
      ],
    },
    {
      title: 'Technical',
      items: [
        {
          q: 'What technologies are used?',
          a: 'IT Tools is built with Vue 3, Naive UI, and Vite. Various open-source libraries are used for crypto, parsing, and formatting.',
        },
        {
          q: 'Is the source code available?',
          a: 'Yes. The project is open-source under the GNU GPLv3 license. You can find the source code on our GitHub repository.',
        },
        {
          q: 'How can I contribute?',
          a: 'You can contribute by reporting bugs, suggesting new features, improving documentation, or submitting pull requests.',
        },
      ],
    },
    {
      title: 'Contact',
      items: [
        {
          q: 'How can I get support?',
          a: 'For bug reports or feature requests, please use GitHub Issues. For other inquiries, email us at support@it-tools.eu.cc.',
        },
      ],
    },
  ];
});
</script>

<template>
  <div class="faq-page">
    <div class="faq-header">
      <h1 class="page-title">{{ pageTitle }}</h1>
    </div>

    <div class="faq-sections">
      <div v-for="section in faqSections" :key="section.title" class="faq-section">
        <h2 class="section-title">{{ section.title }}</h2>
        <div class="faq-cards">
          <div v-for="(item, index) in section.items" :key="index" class="faq-card">
            <h3 class="faq-question">{{ item.q }}</h3>
            <p class="faq-answer">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.faq-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.faq-header {
  text-align: center;
  margin-bottom: 40px;

  .page-title {
    font-size: 36px;
    font-weight: 600;
    color: var(--n-text-color);
  }
}

.faq-section {
  margin-bottom: 40px;

  .section-title {
    font-size: 24px;
    font-weight: 600;
    color: var(--n-text-color);
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--n-primary-color);
  }
}

.faq-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-card {
  background: var(--n-color);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    border-color: var(--n-primary-color);
  }

  .faq-question {
    font-size: 16px;
    font-weight: 600;
    color: var(--n-text-color);
    margin-bottom: 12px;
  }

  .faq-answer {
    font-size: 14px;
    color: var(--n-text-color);
    opacity: 0.85;
    line-height: 1.7;
    margin: 0;
  }
}

@media (max-width: 640px) {
  .faq-page {
    padding: 24px 16px;
  }

  .faq-header .page-title {
    font-size: 28px;
  }

  .faq-section .section-title {
    font-size: 20px;
  }

  .faq-card {
    padding: 16px;

    .faq-question {
      font-size: 15px;
    }

    .faq-answer {
      font-size: 13px;
    }
  }
}
</style>
