<template>
  <nav class="navbar" :class="currentSection" :data-scrolled="isScrolled">
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

  // 현재 스크롤 위치 (네비게이션 바 높이를 고려)
  const scrollPosition = window.scrollY + 100

  // 현재 보이는 섹션 찾기
  let currentSectionFound = false
  
  for (const section of sections) {
    const element = document.getElementById(section.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      const offsetTop = element.offsetTop - 100
      const offsetBottom = offsetTop + element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        currentSection.value = section.class
        currentSectionFound = true
        break
      }
    }
  }

  // 페이지 맨 위일 때 첫 번째 섹션으로 설정
  if (window.scrollY < 100) {
    currentSection.value = sections[0].class
    return
  }

  // 페이지 맨 아래일 때 마지막 섹션으로 설정
  if (!currentSectionFound && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
    currentSection.value = sections[sections.length - 1].class
  }
}

// 스크롤 이벤트 디바운스
let scrollTimeout: number | null = null
const debouncedHandleScroll = () => {
  if (scrollTimeout) {
    window.clearTimeout(scrollTimeout)
  }
  scrollTimeout = window.setTimeout(handleScroll, 50)
}

onMounted(() => {
  window.addEventListener('scroll', debouncedHandleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll)
  if (scrollTimeout) {
    window.clearTimeout(scrollTimeout)
  }
})
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  mix-blend-mode: difference;

  &[data-scrolled="true"] {
    padding: 1rem 0;
    backdrop-filter: blur(8px);
    
    .logo-text {
      font-size: 22px;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
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
      letter-spacing: -0.5px;
    }
  }

  .nav-links {
    display: flex;
    gap: 3rem;

    a {
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      color: white;
      transition: all 0.3s ease;
      position: relative;
      letter-spacing: -0.3px;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--primary-color);
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      &:hover::after,
      &.active::after {
        width: 100%;
      }

      &:hover {
        color: var(--primary-color);
      }

      &.active {
        color: var(--primary-color);
      }
    }
  }
}

// 어두운 배경 섹션
.navbar.section-hero,
.navbar.section-cases {
  .logo-text,
  .nav-links a {
    color: white;
  }
}

// 밝은 배경 섹션
.navbar.section-features,
.navbar.section-contact {
  .logo-text,
  .nav-links a {
    color: black;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 0;

    .container {
      padding: 0 1.5rem;
    }

    .nav-links {
      gap: 1.5rem;
      
      a {
        font-size: 0.9rem;
      }
    }

    .logo-text {
      font-size: 20px;
    }

    &[data-scrolled="true"] {
      padding: 0.8rem 0;
      
      .logo-text {
        font-size: 18px;
      }
    }
  }
}
</style> 