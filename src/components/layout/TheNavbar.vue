<template>
  <nav :class="[
    'navbar',
    { 'navbar-scrolled': isScrolled },
    currentSection
  ]">
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
  // 스크롤 여부 확인
  isScrolled.value = window.scrollY > 50

  // 현재 섹션 확인
  const currentScrollPos = window.scrollY + window.innerHeight / 2
  
  for (const section of sections) {
    const element = document.getElementById(section.id)
    if (element) {
      const { top, bottom } = element.getBoundingClientRect()
      const absoluteTop = window.scrollY + top
      const absoluteBottom = window.scrollY + bottom
      
      if (currentScrollPos >= absoluteTop && currentScrollPos <= absoluteBottom) {
        currentSection.value = section.class
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // 초기 상태 설정
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
    }
  }

  .nav-links {
    display: flex;
    gap: 2rem;

    a {
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        transition: width 0.3s ease;
      }

      &:hover::after,
      &.active::after {
        width: 100%;
      }
    }
  }

  // 기본 상태 (hero 섹션)
  &.section-hero {
    background: transparent;
    .logo-text {
      color: white;
    }
    .nav-links a {
      color: white;
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
      &::after {
        background-color: white;
      }
    }
  }

  // 스크롤된 상태의 기본 스타일
  &.navbar-scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 0.8rem 0;

    .logo-text {
      color: #1f1f1f;
      font-size: 22px;
    }

    .nav-links a {
      color: #1f1f1f;
      text-shadow: none;
      &::after {
        background-color: var(--primary-color);
      }
    }
  }

  // features 섹션
  &.section-features {
    .logo-text {
      color: #1f1f1f;
    }
    .nav-links a {
      color: #1f1f1f;
      text-shadow: none;
      &::after {
        background-color: var(--primary-color);
      }
    }
  }

  // cases 섹션
  &.section-cases {
    .logo-text {
      color: #1f1f1f;
    }
    .nav-links a {
      color: #1f1f1f;
      text-shadow: none;
      &::after {
        background-color: var(--primary-color);
      }
    }
  }

  // contact 섹션
  &.section-contact {
    .logo-text {
      color: white;
    }
    .nav-links a {
      color: white;
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
      &::after {
        background-color: white;
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