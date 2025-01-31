<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollAnimation } from './composables/useScrollAnimation'
import { useResponsive } from './composables/useResponsive'

onMounted(() => {
  // 모바일 브라우저의 100vh 문제 해결
  const setVh = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  setVh()
  window.addEventListener('resize', setVh)
})

useScrollAnimation()
useResponsive()
</script>

<style lang="scss">
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

:root {
  /* Colors */
  --primary-color: #{#EA4343};
  --secondary-color: #{#1F1F1F};
  --text-color: #{#1F1F1F};
  --bg-color: #{#FFFFFF};
  --gray-100: #{#F8F9FA};
  --gray-200: #{#E9ECEF};
  --gray-300: #{#DEE2E6};
  --gray-400: #{#CED4DA};
  --gray-500: #{#ADB5BD};
  --gray-600: #{#6C757D};
  --gray-700: #{#495057};
  --gray-800: #{#343A40};
  --gray-900: #{#1F1F1F};
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(31, 31, 31, 0.05);
  --shadow-md: 0 4px 6px rgba(31, 31, 31, 0.1);
  --shadow-lg: 0 10px 15px rgba(31, 31, 31, 0.1);
  
  /* Border Radius */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 1rem;
  
  /* Spacing */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 1rem;
  --spacing-4: 1.5rem;
  --spacing-5: 2rem;
  --spacing-6: 3rem;
  --spacing-7: 4rem;
  --spacing-8: 6rem;
  
  /* Typography */
  --font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  
  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 스크롤바 숨기기 */
html, body, div {
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
}

html, body {
  width: 100%;
  height: 100%;
  font-family: var(--font-family);
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: var(--line-height-normal);
  overflow-x: hidden;
}

.app {
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-color);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: 700;
  line-height: var(--line-height-tight);
  color: var(--secondary-color);
}

p {
  margin: 0;
  color: var(--text-color);
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
    opacity: 0.8;
  }
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--bg-color);

  &:hover {
    background-color: var(--primary-color);
    opacity: 0.9;
    transform: translateY(-2px);
  }
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: var(--bg-color);

  &:hover {
    background-color: var(--secondary-color);
    opacity: 0.9;
    transform: translateY(-2px);
  }
}

/* Container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Section */
.section {
  padding: var(--spacing-8) 0;
}

/* Utilities */
.text-center {
  text-align: center;
}

.text-primary {
  color: var(--primary-color);
}

.text-secondary {
  color: var(--secondary-color);
}

.bg-primary {
  background-color: var(--primary-color);
  color: var(--bg-color);
}

.bg-secondary {
  background-color: var(--secondary-color);
  color: var(--bg-color);
}

.bg-white {
  background-color: var(--bg-color);
  color: var(--text-color);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fadeInDown {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Responsive */
@media (max-width: 1024px) {
  .container {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 14px;
  }

  .section {
    padding: var(--spacing-6) 0;
  }
}

/* Page Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

