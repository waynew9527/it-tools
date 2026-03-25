<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useHead } from '@vueuse/head';
import { getBlogPost } from '@/blog';

const route = useRoute();
const router = useRouter();

const slug = route.params.slug as string;
const post = getBlogPost(slug);

if (!post) {
  router.replace('/blog');
}

const { t, locale } = useI18n();

const isZh = computed(() => locale.value === 'zh');

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isZh.value) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  }
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

useHead({
  title: post ? `${isZh ? post.title : post.titleEn} - IT Tools 博客` : '博客 - IT Tools',
  meta: [
    {
      name: 'description',
      content: post ? (isZh ? post.description : post.descriptionEn) : 'IT Tools 博客 - 开发教程和技巧。',
    },
    {
      name: 'keywords',
      content: post ? (isZh ? post.keywords : post.keywordsEn).join(', ') : 'IT Tools, 博客, 教程, 开发工具',
    },
    {
      property: 'og:title',
      content: post ? `${isZh ? post.title : post.titleEn} - IT Tools 博客` : '博客 - IT Tools',
    },
    {
      property: 'og:description',
      content: post ? (isZh ? post.description : post.descriptionEn) : 'IT Tools 博客 - 开发教程和技巧。',
    },
  ],
});
</script>

<template>
  <div v-if="post" class="blog-post">
    <div class="post-header">
      <RouterLink to="/blog" class="back-link"> ← {{ t('blog.backToList', '返回博客列表') }} </RouterLink>
      <div class="post-meta">
        <span class="post-date">{{ formatDate(post.publishedAt) }}</span>
        <span class="post-author">{{ post.author }}</span>
      </div>
      <h1 class="post-title">{{ isZh ? post.title : post.titleEn }}</h1>
      <p class="post-description">{{ isZh ? post.description : post.descriptionEn }}</p>
      <div class="post-keywords">
        <span v-for="keyword in isZh ? post.keywords : post.keywordsEn" :key="keyword" class="keyword-tag">
          {{ keyword }}
        </span>
      </div>
    </div>

    <div class="post-content">
      <c-markdown :markdown="isZh ? post.content : post.contentEn" />
    </div>
  </div>
</template>

<style scoped lang="less">
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.post-header {
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--n-border-color);

  .back-link {
    display: inline-block;
    margin-bottom: 20px;
    color: var(--n-primary-color);
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }

  .post-meta {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    font-size: 14px;
    color: var(--n-text-color);
    opacity: 0.8;
  }

  .post-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--n-text-color);
    line-height: 1.3;
  }

  .post-description {
    font-size: 18px;
    color: var(--n-text-color);
    opacity: 0.9;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .post-keywords {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .keyword-tag {
      font-size: 13px;
      padding: 4px 12px;
      background: var(--n-color-hover);
      border-radius: 4px;
      color: var(--n-text-color);
      opacity: 0.9;
    }
  }
}

.post-content {
  font-size: 16px;
  line-height: 1.8;
  color: var(--n-text-color);

  :deep(h1) {
    font-size: 28px;
    font-weight: 700;
    margin: 40px 0 20px;
  }

  :deep(h2) {
    font-size: 22px;
    font-weight: 600;
    margin: 32px 0 16px;
  }

  :deep(h3) {
    font-size: 18px;
    font-weight: 600;
    margin: 24px 0 12px;
  }

  :deep(p) {
    margin: 16px 0;
  }

  :deep(ul),
  :deep(ol) {
    margin: 16px 0;
    padding-left: 24px;
  }

  :deep(li) {
    margin: 8px 0;
  }

  :deep(code) {
    background: var(--n-color-hover);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 14px;
    font-family: monospace;
  }

  :deep(pre) {
    background: var(--n-color-hover);
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 16px 0;

    code {
      background: none;
      padding: 0;
    }
  }

  :deep(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;

    th,
    td {
      padding: 12px;
      border: 1px solid var(--n-border-color);
      text-align: left;
    }

    th {
      background: var(--n-color-hover);
      font-weight: 600;
    }
  }

  :deep(a) {
    color: var(--n-primary-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
