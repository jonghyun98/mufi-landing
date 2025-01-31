<template>
  <div class="home">
    <TheNavbar />
    <div class="sections-container">
      <HeroSection id="hero" class="section"/>
      <FeaturesSection id="features" class="section"/>
      <ServiceSection id="service" class="section"/>
      <KioskSection id="kiosk" class="section"/>
      <CasesSection id="cases" class="section"/>
      <ReviewsSection id="reviews" class="section"/>
      <ComparisonSection id="comparison" class="section"/>
      <FaqSection id="faq" class="section"/>
      <ContactSection id="contact" class="section"/>
    </div>
    <TheFooter />
  </div>
</template>

<script>
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

export default {
  name: 'HomeView',
  components: {
    TheNavbar,
    TheFooter,
    HeroSection,
    FeaturesSection,
    ServiceSection,
    KioskSection,
    CasesSection,
    ReviewsSection,
    ComparisonSection,
    FaqSection,
    ContactSection
  }
}
</script> 