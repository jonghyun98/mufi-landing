<template>
  <div class="home">
    <TheNavbar />
    <HeroSection id="hero" class="section-hero" />
    <FeaturesSection id="features" class="section-features" />
    <CasesSection id="cases" class="section-cases" />
    <ContactSection id="contact" class="section-contact" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import TheNavbar from '@/components/layout/TheNavbar.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import FeaturesSection from '@/components/home/FeaturesSection.vue'
import CasesSection from '@/components/home/CasesSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1
  })

  document.querySelectorAll('.section-transition').forEach(section => {
    observer.observe(section)
  })

  // 스크롤 이동을 부드럽게 처리
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')?.substring(1)
      const targetElement = document.getElementById(targetId || '')
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  background-color: var(--bg-color);
}

.section-hero,
.section-features,
.section-cases,
.section-contact {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .home {
    padding-top: 60px;
  }
}
</style> 