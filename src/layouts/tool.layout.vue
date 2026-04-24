<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import type { HeadObject } from '@vueuse/head';

import BaseLayout from './base.layout.vue';
import FavoriteButton from '@/components/FavoriteButton.vue';
import type { Tool } from '@/tools/tools.types';

const route = useRoute();

const head = computed<HeadObject>(() => ({
  title: `${route.meta.name} - IT Tools`,
  meta: [
    // 基础Meta标签
    {
      name: 'description',
      content: route.meta?.description as string,
    },
    {
      name: 'keywords',
      content: ((route.meta.keywords ?? []) as string[]).join(','),
    },
    // Open Graph / Facebook
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: `https://it-tools.eu.cc${route.path}`,
    },
    {
      property: 'og:title',
      content: `${route.meta.name} - IT Tools`,
    },
    {
      property: 'og:description',
      content: route.meta?.description as string,
    },
    {
      property: 'og:image',
      content: 'https://it-tools.eu.cc/banner.png?v=2',
    },
    {
      property: 'og:site_name',
      content: 'IT Tools',
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@waynew9527',
    },
    {
      name: 'twitter:creator',
      content: '@waynew9527',
    },
    {
      name: 'twitter:title',
      content: `${route.meta.name} - IT Tools`,
    },
    {
      name: 'twitter:description',
      content: route.meta?.description as string,
    },
    {
      name: 'twitter:image',
      content: 'https://it-tools.eu.cc/banner.png?v=2',
    },
  ],
  link: [
    // Canonical URL
    {
      rel: 'canonical',
      href: `https://it-tools.eu.cc${route.path}`,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': route.meta.name,
        'description': route.meta?.description,
        'url': `https://it-tools.eu.cc${route.path}`,
        'applicationCategory': 'DeveloperApplication',
        'operatingSystem': 'Web Browser',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD',
        },
        'keywords': ((route.meta.keywords ?? []) as string[]).join(', '),
      }),
    },
  ],
}));
useHead(head);
const { t, te } = useI18n();

const i18nKey = computed<string>(() => route.path.trim().replace('/', ''));
const toolTitle = computed<string>(() => t(`tools.${i18nKey.value}.title`, String(route.meta.name)));
const toolDescription = computed<string>(() => t(`tools.${i18nKey.value}.description`, String(route.meta.description)));
const hasArticle = computed<boolean>(() => te(`tools.${i18nKey.value}.article`));
</script>

<template>
  <BaseLayout>
    <div class="tool-layout">
      <div class="tool-header">
        <div flex flex-nowrap items-center justify-between>
          <n-h1>
            {{ toolTitle }}
          </n-h1>

          <div>
            <FavoriteButton :tool="{ name: route.meta.name, path: route.path } as Tool" />
          </div>
        </div>

        <div class="separator" />

        <div class="description">
          {{ toolDescription }}
        </div>
      </div>
    </div>

    <div class="tool-content">
      <slot />
    </div>

    <div v-if="hasArticle" class="tool-article-container">
      <div class="separator-large" />
      <c-markdown :markdown="t(`tools.${i18nKey.value}.article`)" class="tool-article" />
    </div>
  </BaseLayout>
</template>

<style lang="less" scoped>
.tool-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;

  ::v-deep(& > *) {
    flex: 0 1 600px;
  }
}

.tool-layout {
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;

  .tool-header {
    padding: 40px 0;
    width: 100%;

    .n-h1 {
      opacity: 0.9;
      font-size: 40px;
      font-weight: 400;
      margin: 0;
      line-height: 1;
    }

    .separator {
      width: 200px;
      height: 2px;
      background: rgb(161, 161, 161);
      opacity: 0.2;

      margin: 10px 0;
    }

    .description {
      margin: 0;

      opacity: 0.7;
    }
  }
}

.tool-article-container {
  max-width: 800px;
  margin: 60px auto 40px;
  padding: 0 20px;
  box-sizing: border-box;

  .separator-large {
    width: 100%;
    height: 1px;
    background: var(--n-border-color);
    margin-bottom: 40px;
  }

  .tool-article {
    opacity: 0.85;
    line-height: 1.6;
  }
}
</style>
