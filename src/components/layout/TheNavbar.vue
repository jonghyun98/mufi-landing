<template>
  <nav :class="['navbar', currentSection]" :data-scrolled="isScrolled">
    <div class="container">
      <router-link to="/" class="logo">
        <span class="logo-text">MUFI</span>
      </router-link>
      <div class="nav-links">
        <a href="#hero" :class="{ active: currentSection === 'section-hero' }">홈</a>
        <a href="#features" :class="{ active: currentSection === 'section-features' }">특징</a>
        <a href="#cases" :class="{ active: currentSection === 'section-cases' }">설치사례</a>
        <a href="#contact" :class="{ active: currentSection === 'section-contact' }">문의하기</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const currentSection = ref('section-hero')

const sections = [
  { id: 'hero', class: 'section-hero' },
  { id: 'features', class: 'section-features' },
  { id: 'cases', class: 'section-cases' },
  { id: 'contact', class: 'section-contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // 현재 섹션 확인
  const scrollPosition = window.scrollY

  // 모든 섹션을 순회하며 가장 가까운 섹션 찾기
  let closestSection = sections[0]
  let minDistance = Infinity

  sections.forEach(section => {
    const element = document.getElementById(section.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      const distance = Math.abs(rect.top)
      if (distance < minDistance) {
        minDistance = distance
        closestSection = section
      }
    }
  })

  currentSection.value = closestSection.class
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: #1f1f1f;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &[data-scrolled="true"] {
    background: #1f1f1f;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    padding: 0.8rem 0;

    .logo-text {
      color: white !important;
      font-size: 22px;
    }

    .nav-links a {
      color: white !important;
      text-shadow: none !important;
      &::after {
        background-color: var(--primary-color) !important;
      }
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    text-decoration: none;
    
    .logo-text {
      font-size: 24px;
      font-weight: 800;
      transition: all 0.3s ease;
      color: white;
    }
  }

  .nav-links {
    display: flex;
    gap: 2rem;

    a {
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      color: white;
      transition: all 0.3s ease;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--primary-color);
        transition: width 0.3s ease;
      }

      &:hover::after,
      &.active::after {
        width: 100%;
      }

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  &.section-hero,
  &.section-features,
  &.section-cases,
  &.section-contact {
    background: #1f1f1f;
    .logo-text {
      color: white;
    }
    .nav-links a {
      color: white;
      text-shadow: none;
      &::after {
        background-color: var(--primary-color);
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    .nav-links {
      gap: 1rem;
      
      a {
        font-size: 1rem;
      }
    }

    .logo-text {
      font-size: 20px;
    }
  }
}
</style> 