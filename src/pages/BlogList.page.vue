<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { blogPosts } from '@/blog';

const { t, locale } = useI18n();

const isZh = computed(() => locale.value === 'zh');

const pageTitle = computed(() => (isZh.value ? '博客' : 'Blog'));
const pageSubtitle = computed(() =>
  isZh.value ? '学习使用 IT Tools 的技巧和最佳实践' : 'Learn tips and best practices for using IT Tools',
);

useHead({
  title: computed(() => `${pageTitle.value} - IT Tools`),
  meta: [
    {
      name: 'description',
      content: computed(() =>
        isZh.value
          ? 'IT Tools 博客 - 包含密码安全、JSON 格式化、编码解码等开发教程和技巧。'
          : 'IT Tools Blog - Tutorials and tips for password security, JSON formatting, encoding and decoding.',
      ),
    },
    { name: 'keywords', content: 'IT Tools, 博客, 教程, 开发工具, 密码安全, JSON' },
    { property: 'og:title', content: computed(() => `${pageTitle.value} - IT Tools`) },
    {
      property: 'og:description',
      content: computed(() =>
        isZh.value
          ? 'IT Tools 博客 - 包含密码安全、JSON 格式化、编码解码等开发教程和技巧。'
          : 'IT Tools Blog - Tutorials and tips for password security, JSON formatting, encoding and decoding.',
      ),
    },
  ],
});

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

const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);
</script>

<template>
  <div class="blog-list">
    <div class="blog-header">
      <h1 class="page-title">
        {{ pageTitle }}
      </h1>
      <p class="page-description">
        {{ pageSubtitle }}
      </p>
    </div>

    <div class="posts-grid">
      <RouterLink v-for="post in sortedPosts" :key="post.slug" :to="`/blog/${post.slug}`" class="post-card">
        <div class="post-meta">
          <span class="post-date">{{ formatDate(post.publishedAt) }}</span>
        </div>
        <h2 class="post-title">{{ isZh ? post.title : post.titleEn }}</h2>
        <p class="post-description">{{ isZh ? post.description : post.descriptionEn }}</p>
        <div class="post-keywords">
          <span
            v-for="keyword in (isZh ? post.keywords : post.keywordsEn).slice(0, 3)"
            :key="keyword"
            class="keyword-tag"
          >
            {{ keyword }}
          </span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="less">
.blog-list {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.blog-header {
  text-align: center;
  margin-bottom: 50px;

  .page-title {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--n-text-color);
  }

  .page-description {
    font-size: 16px;
    color: var(--n-text-color-3);
  }
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.post-card {
  display: block;
  background: var(--n-color);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 24px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
    border-color: var(--n-primary-color);
  }
}

.post-meta {
  margin-bottom: 12px;

  .post-date {
    font-size: 13px;
    color: var(--n-text-color);
    opacity: 0.8;
  }
}

.post-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--n-text-color);
  line-height: 1.4;
}

.post-description {
  font-size: 14px;
  color: var(--n-text-color);
  opacity: 0.85;
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .keyword-tag {
    font-size: 12px;
    padding: 4px 10px;
    background: var(--n-color-hover);
    border-radius: 4px;
    color: var(--n-text-color);
    opacity: 0.9;
  }
}
</style>
