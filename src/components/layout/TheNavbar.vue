<template>
  <nav :class="[
    'navbar',
    { 'navbar-scrolled': isScrolled },
    currentSection
  ]">
    <div class="container">
      <router-link to="/" class="logo">
        <svg width="140" height="40" viewBox="0 0 700 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40h140l140 120h6l140-120h140v160h-112V92h-4L330 200h-82L128 92h-4v108H0V40z" fill="currentColor"/>
          <path d="M700 40h112v160H700V40zm315 160c-44 0-82-9-115-28-31-19-56-46-73-80-17-34-26-74-26-120 0-46 9-86 26-120 17-34 42-61 73-80 33-19 71-28 115-28s82 9 114 28c32 19 57 46 74 80 17 34 26 74 26 120 0 46-9 86-26 120-17 34-42 61-74 80-32 19-70 28-114 28zm0-95c21 0 40-5 55-15 15-10 26-25 34-45 8-20 12-46 12-76s-4-56-12-76c-8-20-19-35-34-45-15-10-34-15-55-15s-40 5-56 15c-14 10-25 25-33 45-8 20-11 46-11 76s3 56 11 76c8 20 19 35 33 45 16 10 35 15 56 15zM2100 40v160h-112V92h-4l-124 108h-82L1654 92h-4v108h-112V40h140l140 120h6l140-120h136z" fill="currentColor"/>
          <circle cx="1680" cy="25" r="25" fill="#EA4343"/>
          <circle cx="1980" cy="25" r="25" fill="#EA4343"/>
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
      height: 28px;
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
      height: 24px;
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

  // features 섹션
  &.section-features {
    .logo svg {
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
    .logo svg {
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
      height: 20px;
    }
  }
}
</style> 