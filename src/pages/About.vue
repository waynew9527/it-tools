<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'About - IT Tools',
  meta: [
    { name: 'description', content: 'Learn about IT Tools — a free, open-source collection of online utilities for developers and IT professionals. All tools run client-side in your browser.' },
    { name: 'robots', content: 'index, follow' },
  ],
});
</script>

<template>
  <c-markdown :markdown="$t('about.content')" mx-auto mt-50px max-w-600px />
</template>
