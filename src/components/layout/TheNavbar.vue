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
      const offsetTop = element.offsetTop - 100 // 네비게이션 바 높이 고려
      const offsetBottom = offsetTop + element.offsetHeight

      // 현재 스크롤 위치가 섹션의 시작과 끝 사이에 있는지 확인
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

// 스크롤 이벤트 디바운스 처리
let scrollTimeout: number | null = null
const debouncedHandleScroll = () => {
  if (scrollTimeout) {
    window.clearTimeout(scrollTimeout)
  }
  scrollTimeout = window.setTimeout(handleScroll, 50)
}

onMounted(() => {
  window.addEventListener('scroll', debouncedHandleScroll)
  // 초기 로드 시 현재 섹션 설정
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
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: rgba(31, 31, 31, 0.95);
  backdrop-filter: blur(10px);

  &[data-scrolled="true"] {
    padding: 0.8rem 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    background: rgba(31, 31, 31, 0.98);

    .logo-text {
      font-size: 22px;
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
    display: flex;
    align-items: center;
    gap: 10px;
    
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
}

// 어두운 배경 섹션 (밝은 텍스트)
.navbar.section-hero,
.navbar.section-cases {
  background: rgba(31, 31, 31, 0.95);
  backdrop-filter: blur(10px);
  
  .logo-text {
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .nav-links a {
    color: rgba(255, 255, 255, 0.9);
    &::after {
      background-color: var(--primary-color);
      box-shadow: 0 0 8px rgba(234, 67, 67, 0.5);
    }
    &:hover {
      color: var(--primary-color);
    }
    &.active {
      color: var(--primary-color);
    }
  }
}

// 밝은 배경 섹션 (어두운 텍스트)
.navbar.section-features,
.navbar.section-contact {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  .logo-text {
    color: #1f1f1f;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  
  .nav-links a {
    color: rgba(31, 31, 31, 0.9);
    &::after {
      background-color: var(--primary-color);
      box-shadow: 0 0 8px rgba(234, 67, 67, 0.3);
    }
    &:hover {
      color: var(--primary-color);
    }
    &.active {
      color: var(--primary-color);
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