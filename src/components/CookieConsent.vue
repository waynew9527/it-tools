<script setup lang="ts">
import { useStorage } from '@vueuse/core';

const hasConsented = useStorage('cookie-consent', false);

const acceptCookies = () => {
  hasConsented.value = true;
};
</script>

<template>
  <transition name="slide-up">
    <div v-if="!hasConsented" class="cookie-banner">
      <div class="cookie-content">
        <p>
          {{ $t('cookieConsent.message', 'We use essential cookies to enhance your experience. We also use Google AdSense, which may use cookies for personalized advertising.') }}
          <router-link to="/privacy" class="privacy-link">{{ $t('cookieConsent.learnMore', 'Learn more') }}</router-link>.
        </p>
      </div>
      <div class="cookie-actions">
        <c-button type="primary" @click="acceptCookies">
          {{ $t('cookieConsent.accept', 'Accept') }}
        </c-button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--n-color);
  border-top: 1px solid var(--n-border-color);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  flex-wrap: wrap;
  gap: 16px;
}

.cookie-content {
  flex: 1;
  min-width: 250px;
}

.cookie-content p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--n-text-color);
}

.privacy-link {
  color: var(--n-primary-color);
  text-decoration: underline;
}

.cookie-actions {
  display: flex;
  gap: 12px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
