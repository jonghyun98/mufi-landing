<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <router-link to="/" class="navbar-brand">
          <span class="logo-text">MUFI</span>
        </router-link>
        
        <div class="navbar-menu" :class="{ 'active': isMenuOpen }">
          <a href="#features" class="navbar-link" @click="closeMenu">특징</a>
          <a href="#service" class="navbar-link" @click="closeMenu">서비스</a>
          <a href="#cases" class="navbar-link" @click="closeMenu">설치사례</a>
          <a href="#reviews" class="navbar-link" @click="closeMenu">후기</a>
          <a href="#contact" class="btn btn-primary" @click="closeMenu">문의하기</a>
        </div>
        
        <button class="navbar-toggle" :class="{ 'active': isMenuOpen }" @click="toggleMenu" aria-label="메뉴 토글">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: transparent;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &.navbar-scrolled {
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  }
}

.navbar-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  
  .logo-text {
    font-size: 24px;
    font-weight: 800;
    color: var(--primary-color);
    letter-spacing: -0.5px;
  }
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 40px;
}

.navbar-link {
  color: var(--secondary-color);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding: 6px 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--primary-color);
    
    &::after {
      width: 100%;
    }
  }

  &.btn {
    padding: 10px 24px;
    border-radius: 8px;
    
    &::after {
      display: none;
    }
  }
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--secondary-color);
    transition: all 0.3s ease;
    transform-origin: center;
  }
  
  &.active {
    span {
      &:first-child {
        transform: translateY(8px) rotate(45deg);
      }
      
      &:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }
      
      &:last-child {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    height: 60px;
    background-color: var(--bg-color);
  }
  
  .navbar-brand .logo-text {
    font-size: 20px;
  }
  
  .navbar-menu {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    flex-direction: column;
    gap: 24px;
    background-color: var(--bg-color);
    padding: 40px 0;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    
    &.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
      box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    }
  }
  
  .navbar-link {
    font-size: 18px;
    width: 100%;
    text-align: center;
    padding: 12px 20px;
    
    &::after {
      display: none;
    }
    
    &.btn {
      width: auto;
      margin: 8px auto 0;
    }
  }
  
  .navbar-toggle {
    display: flex;
  }
}
</style> 