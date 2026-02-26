<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
useHead({
  title: t('terms.pageTitle'),
  meta: [
    { name: 'description', content: t('terms.metaDescription') },
    { name: 'robots', content: 'index, follow' },
  ],
});
</script>

<template>
  <c-markdown :markdown="$t('terms.content')" mx-auto mt-50px max-w-700px />
</template>
