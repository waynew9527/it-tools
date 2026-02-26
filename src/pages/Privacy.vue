<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
useHead({
  title: t('privacy.pageTitle'),
  meta: [
    { name: 'description', content: t('privacy.metaDescription') },
    { name: 'robots', content: 'index, follow' },
  ],
});
</script>

<template>
  <c-markdown :markdown="$t('privacy.content')" mx-auto mt-50px max-w-700px />
</template>
