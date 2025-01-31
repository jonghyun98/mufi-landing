<template>
  <div class="features-section">
    <div class="features-content">
      <h2 class="animate-fadeInDown">주요 기능</h2>
      <p class="section-description animate-fadeInUp">MUFI의 혁신적인 기능으로 매장 운영을 더욱 스마트하게</p>
      
      <div class="features-grid">
        <div class="feature-card animate-fadeInUp" style="animation-delay: 0.2s">
          <i class="fas fa-mobile-alt"></i>
          <h3>모바일 주문</h3>
          <p>QR코드로 간편하게 주문하고 결제까지 한 번에</p>
        </div>
        
        <div class="feature-card animate-fadeInUp" style="animation-delay: 0.3s">
          <i class="fas fa-chart-line"></i>
          <h3>실시간 분석</h3>
          <p>매출과 주문 데이터를 실시간으로 분석하고 관리</p>
        </div>
        
        <div class="feature-card animate-fadeInUp" style="animation-delay: 0.4s">
          <i class="fas fa-sync"></i>
          <h3>자동 업데이트</h3>
          <p>메뉴와 가격을 실시간으로 업데이트</p>
        </div>
        
        <div class="feature-card animate-fadeInUp" style="animation-delay: 0.5s">
          <i class="fas fa-shield-alt"></i>
          <h3>보안 시스템</h3>
          <p>안전한 결제와 데이터 보호 시스템</p>
        </div>
        
        <div class="feature-card animate-fadeInUp" style="animation-delay: 0.6s">
          <i class="fas fa-language"></i>
          <h3>다국어 지원</h3>
          <p>다양한 언어 지원으로 글로벌 고객 응대</p>
        </div>
        
        <div class="feature-card animate-fadeInUp" style="animation-delay: 0.7s">
          <i class="fas fa-headset"></i>
          <h3>24/7 지원</h3>
          <p>연중무휴 기술 지원 및 고객 서비스</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for now
</script>

<style scoped lang="scss">
.features-section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8) var(--spacing-4);
  background-color: var(--bg-color);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(31, 31, 31, 0.02) 0%, rgba(31, 31, 31, 0) 100%);
    z-index: 0;
  }
}

.features-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

h2 {
  font-size: 48px;
  font-weight: 800;
  color: var(--secondary-color);
  margin-bottom: var(--spacing-3);
  letter-spacing: -0.02em;
}

.section-description {
  font-size: var(--font-size-xl);
  color: var(--gray-600);
  margin-bottom: var(--spacing-8);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 0 var(--spacing-4);
}

.feature-card {
  background: var(--bg-color);
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 2px 20px rgba(31, 31, 31, 0.08);
  transition: all 0.3s ease;
  border: 1px solid var(--gray-200);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 30px rgba(31, 31, 31, 0.12);
    border-color: var(--primary-color);
    
    i {
      color: var(--primary-color);
      transform: scale(1.1);
    }
  }

  i {
    font-size: 32px;
    color: var(--secondary-color);
    margin-bottom: var(--spacing-4);
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: var(--spacing-3);
  }

  p {
    font-size: var(--font-size-base);
    color: var(--gray-600);
    line-height: 1.6;
  }
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  .feature-card {
    padding: 32px;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  h2 {
    font-size: 36px;
  }

  .section-description {
    font-size: var(--font-size-lg);
  }
  
  .feature-card {
    padding: 28px;
    
    i {
      font-size: 28px;
    }
    
    h3 {
      font-size: 18px;
    }
  }
}
</style> 