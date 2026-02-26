<script lang="ts" setup>
import { NIcon, useThemeVars } from 'naive-ui';

import { RouterLink } from 'vue-router';
import { Heart, Home2, Menu2 } from '@vicons/tabler';

import { storeToRefs } from 'pinia';
import HeroGradient from '../assets/hero-gradient.svg?component';
import MenuLayout from '../components/MenuLayout.vue';
import NavbarButtons from '../components/NavbarButtons.vue';
import { useStyleStore } from '@/stores/style.store';
import { config } from '@/config';
import type { ToolCategory } from '@/tools/tools.types';
import { useToolStore } from '@/tools/tools.store';
import { useTracker } from '@/modules/tracker/tracker.services';
import CollapsibleToolMenu from '@/components/CollapsibleToolMenu.vue';

const themeVars = useThemeVars();
const styleStore = useStyleStore();

const { tracker } = useTracker();
const { t } = useI18n();

const toolStore = useToolStore();
const { favoriteTools, toolsByCategory } = storeToRefs(toolStore);

const tools = computed<ToolCategory[]>(() => [
  ...(favoriteTools.value.length > 0 ? [{ name: t('tools.categories.favorite-tools'), components: favoriteTools.value }] : []),
  ...toolsByCategory.value,
]);
</script>

<template>
  <MenuLayout class="menu-layout" :class="{ isSmallScreen: styleStore.isSmallScreen }">
    <template #sider>
      <RouterLink to="/" class="hero-wrapper">
        <HeroGradient class="gradient" />
        <div class="text-wrapper">
          <div class="title">
            <span class="title-it">IT</span><span class="title-dot">·</span><span class="title-tools">TOOLS</span>
          </div>
          <div class="divider" />
          <div class="subtitle">
            {{ $t('home.subtitle') }}
          </div>
        </div>
      </RouterLink>

      <div class="sider-content">
        <div v-if="styleStore.isSmallScreen" flex flex-col items-center>
          <locale-selector w="90%" />

          <div flex justify-center>
            <NavbarButtons />
          </div>
        </div>

        <CollapsibleToolMenu :tools-by-category="tools" />

        <div class="footer">
          <div class="footer-links">
            <RouterLink to="/about" class="footer-link-item">
              About
            </RouterLink>
            <span class="footer-sep">·</span>
            <RouterLink to="/privacy" class="footer-link-item">
              Privacy
            </RouterLink>
            <span class="footer-sep">·</span>
            <RouterLink to="/terms" class="footer-link-item">
              Terms
            </RouterLink>
            <span class="footer-sep">·</span>
            <RouterLink to="/contact" class="footer-link-item">
              Contact
            </RouterLink>
          </div>
          <div class="footer-copy">
            © {{ new Date().getFullYear() }} ·
            <c-link target="_blank" rel="noopener" href="https://it-tools.eu.cc">
              IT-Tools.eu.cc
            </c-link>
          </div>
        </div>
      </div>
    </template>

    <template #content>
      <div flex items-center justify-center gap-2>
        <c-button
          circle
          variant="text"
          :aria-label="$t('home.toggleMenu')"
          @click="styleStore.isMenuCollapsed = !styleStore.isMenuCollapsed"
        >
          <NIcon size="25" :component="Menu2" />
        </c-button>

        <c-tooltip :tooltip="$t('home.home')" position="bottom">
          <c-button to="/" circle variant="text" :aria-label="$t('home.home')">
            <NIcon size="25" :component="Home2" />
          </c-button>
        </c-tooltip>

        <command-palette />

        <locale-selector v-if="!styleStore.isSmallScreen" />

        <div>
          <NavbarButtons v-if="!styleStore.isSmallScreen" />
        </div>

        <c-tooltip position="bottom" :tooltip="$t('home.support')">
          <c-button
            round
            href="https://buymeacoffee.com/waynetalk"
            rel="noopener"
            target="__blank"
            class="support-button"
            :bordered="false"
            @click="() => tracker.trackEvent({ eventName: 'Support button clicked' })"
          >
            {{ $t('home.buyMeACoffee') }}
            <NIcon v-if="!styleStore.isSmallScreen" :component="Heart" ml-2 />
          </c-button>
        </c-tooltip>
      </div>
      <slot />
    </template>
  </MenuLayout>
</template>

<style lang="less" scoped>
// ::v-deep(.n-layout-scroll-container) {
//     @percent: 4%;
//     @position: 25px;
//     @size: 50px;
//     @color: #eeeeee25;
//     background-image: radial-gradient(@color @percent, transparent @percent),
//         radial-gradient(@color @percent, transparent @percent);
//     background-position: 0 0, @position @position;
//     background-size: @size @size;
// }

.support-button {
  background: rgb(0, 82, 204);
  background: linear-gradient(48deg, rgba(0, 82, 204, 1) 0%, rgba(0, 128, 255, 1) 60%, rgba(51, 153, 255, 1) 100%);
  color: #fff !important;
  transition: padding ease 0.2s !important;

  &:hover {
    color: #fff;
    padding-left: 30px;
    padding-right: 30px;
  }
}

.footer {
  text-align: center;
  color: #838587;
  margin-top: 20px;
  padding: 20px 12px 24px;

  .footer-links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px 2px;
    margin-bottom: 10px;

    .footer-link-item {
      position: relative;
      color: #838587;
      text-decoration: none;
      font-size: 11.5px;
      padding: 2px 6px;
      transition: color 0.25s;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 6px;
        right: 6px;
        height: 1px;
        background: v-bind('themeVars.primaryColor');
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.25s ease;
      }

      &:hover {
        color: v-bind('themeVars.primaryColor');
        &::after { transform: scaleX(1); }
      }
    }

    .footer-sep {
      font-size: 14px;
      color: #555;
      line-height: 1;
      user-select: none;
    }
  }

  .footer-copy {
    font-size: 11px;
    opacity: 0.55;
    letter-spacing: 0.03em;
  }
}

.sider-content {
  padding-top: 160px;
  padding-bottom: 200px;
}

.hero-wrapper {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  z-index: 10;
  overflow: hidden;

  .gradient {
    margin-top: -65px;
  }

  .text-wrapper {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    top: 16px;
    color: #fff;

    .title {
      font-size: 22px;
      font-weight: 700;
      letter-spacing: 2px;

      .title-it {
        color: v-bind('themeVars.primaryColor');
      }

      .title-dot {
        color: v-bind('themeVars.primaryColor');
        opacity: 0.6;
        margin: 0 2px;
        font-weight: 300;
      }

      .title-tools {
        color: #fff;
      }
    }

    .divider {
      width: 50px;
      height: 2px;
      border-radius: 4px;
      background-color: v-bind('themeVars.primaryColor');
      margin: 0 auto 5px;
    }

    .subtitle {
      font-size: 16px;
    }
  }
}
</style>
