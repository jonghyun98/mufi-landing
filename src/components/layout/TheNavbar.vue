<template>
  <nav :class="[
    'navbar',
    { 'navbar-scrolled': isScrolled },
    currentSection
  ]">
    <div class="container">
      <router-link to="/" class="logo">
        <svg width="120" height="40" viewBox="0 0 687 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h687v120H0z" fill="none"/>
          <path d="M0 20.4h45.8l45.8 79.2h2.1l45.8-79.2h45.8v99.2h-36.7V52.9h-1.5l-40.8 66.7h-27.1L37.4 52.9h-1.5v66.7H0V20.4zM229.2 20.4h36.7v99.2h-36.7V20.4zM332.9 121.3c-14.6 0-27.1-3.1-37.7-9.4-10.4-6.2-18.5-15-24.2-26.2-5.6-11.2-8.5-24.4-8.5-39.6 0-15.2 2.9-28.3 8.5-39.6 5.8-11.2 13.8-20 24.2-26.2 10.6-6.2 23.1-9.4 37.7-9.4 14.6 0 27.1 3.1 37.5 9.4 10.6 6.2 18.5 15 24.2 26.2 5.8 11.2 8.7 24.4 8.7 39.6 0 15.2-2.9 28.3-8.7 39.6-5.6 11.2-13.5 20-24.2 26.2-10.4 6.2-22.9 9.4-37.5 9.4zm0-31.2c7.1 0 13.1-1.7 18.1-5 5-3.3 8.7-8.3 11.2-15 2.7-6.7 4-15 4-25s-1.3-18.3-4-25c-2.5-6.7-6.2-11.7-11.2-15-5-3.3-11-5-18.1-5s-13.3 1.7-18.3 5c-4.8 3.3-8.5 8.3-11 15-2.5 6.7-3.7 15-3.7 25s1.2 18.3 3.7 25c2.5 6.7 6.2 11.7 11 15 5 3.3 11.2 5 18.3 5zM687 20.4v99.2h-36.7V52.9h-1.5l-40.8 66.7h-27.1l-40.8-66.7h-1.5v66.7h-36.7V20.4h45.8l45.8 79.2h2.1l45.8-79.2H687z" fill="currentColor"/>
          <circle cx="550" cy="15" r="15" fill="#EA4343"/>
          <circle cx="650" cy="15" r="15" fill="#EA4343"/>
        </svg>
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
    display: flex;
    align-items: center;
    
    svg {
      height: 40px;
      width: auto;
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
    .logo svg {
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

    .logo svg {
      height: 35px;
      color: var(--secondary-color);
    }

    .nav-links a {
      color: var(--secondary-color);
      text-shadow: none;
      &::after {
        background-color: var(--primary-color);
      }
    }
  }

  // features 섹션
  &.section-features {
    .logo svg {
      color: var(--secondary-color);
    }
    .nav-links a {
      color: var(--secondary-color);
      text-shadow: none;
      &::after {
        background-color: var(--primary-color);
      }
    }
  }

  // cases 섹션
  &.section-cases {
    .logo svg {
      color: var(--secondary-color);
    }
    .nav-links a {
      color: var(--secondary-color);
      text-shadow: none;
      &::after {
        background-color: var(--primary-color);
      }
    }
  }

  // contact 섹션
  &.section-contact {
    .logo svg {
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

    .logo svg {
      height: 30px;
    }
  }
}
</style> 