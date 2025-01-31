<template>
  <div class="home">
    <TheNavbar />
    <div class="sections-container">
      <HeroSection class="section-transition" data-section />
      <FeaturesSection id="features" class="section-transition" data-section />
      <ServiceSection id="service" class="section-transition" data-section />
      <KioskSection id="kiosk" class="section-transition" data-section />
      <CasesSection id="cases" class="section-transition" data-section />
      <ReviewsSection id="reviews" class="section-transition" data-section />
      <ComparisonSection id="comparison" class="section-transition" data-section />
      <FaqSection id="faq" class="section-transition" data-section />
      <ContactSection id="contact" class="section-transition" data-section />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import FeaturesSection from '@/components/home/FeaturesSection.vue'
import ServiceSection from '@/components/home/ServiceSection.vue'
import KioskSection from '@/components/home/KioskSection.vue'
import CasesSection from '@/components/home/CasesSection.vue'
import ReviewsSection from '@/components/home/ReviewsSection.vue'
import ComparisonSection from '@/components/home/ComparisonSection.vue'
import FaqSection from '@/components/home/FaqSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  })

  document.querySelectorAll('[data-section]').forEach(section => {
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

.sections-container {
  padding-top: 80px; // 네비게이션 바 높이만큼 여백
}

.section-transition {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
  will-change: opacity, transform;
  scroll-margin-top: 80px; // 네비게이션 바 높이만큼 여백 추가
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .sections-container {
    padding-top: 60px;
  }

  .section-transition {
    scroll-margin-top: 60px;
  }
}
</style> 