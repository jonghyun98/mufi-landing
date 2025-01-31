<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1 class="animate-fadeInDown">MUFI와 함께<br>스마트한 매장 운영을 시작하세요</h1>
      <p class="animate-fadeInUp">무인 주문 시스템의 새로운 기준, MUFI가 여러분의 비즈니스를 혁신적으로 변화시킵니다</p>
      <div class="hero-buttons">
        <button class="btn btn-primary animate-fadeInUp" style="animation-delay: 0.2s">시작하기</button>
        <button class="btn btn-secondary animate-fadeInUp" style="animation-delay: 0.4s">더 알아보기</button>
      </div>
      <div class="hero-stats animate-fadeInUp" style="animation-delay: 0.6s">
        <div class="stat-item">
          <h3>1,000+</h3>
          <p>설치 매장</p>
        </div>
        <div class="stat-item">
          <h3>98%</h3>
          <p>고객 만족도</p>
        </div>
        <div class="stat-item">
          <h3>30%</h3>
          <p>매출 증가</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for now
</script>

<style scoped lang="scss">
.hero-section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-8) var(--spacing-4);
  background-color: var(--bg-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(234, 67, 67, 0.05) 0%, rgba(234, 67, 67, 0) 100%);
    z-index: 0;
  }
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

h1 {
  font-size: 64px;
  font-weight: 800;
  color: var(--secondary-color);
  margin-bottom: var(--spacing-4);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

p {
  font-size: var(--font-size-xl);
  color: var(--gray-600);
  margin-bottom: var(--spacing-6);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  margin-bottom: var(--spacing-8);
  
  .btn {
    min-width: 160px;
    height: 52px;
    font-size: var(--font-size-lg);
    
    &-primary {
      background-color: var(--primary-color);
      color: var(--bg-color);
      
      &:hover {
        background-color: darken(#EA4343, 5%);
        transform: translateY(-2px);
      }
    }
    
    &-secondary {
      background-color: transparent;
      color: var(--secondary-color);
      border: 2px solid var(--secondary-color);
      
      &:hover {
        background-color: var(--secondary-color);
        color: var(--bg-color);
        transform: translateY(-2px);
      }
    }
  }
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: var(--spacing-8);
  margin-top: var(--spacing-8);
  padding: var(--spacing-6);
  background-color: var(--bg-color);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
}

.stat-item {
  text-align: center;

  h3 {
    font-size: 48px;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: var(--spacing-2);
    line-height: 1;
  }

  p {
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--secondary-color);
    margin-bottom: 0;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 40px;
  }

  p {
    font-size: var(--font-size-lg);
  }

  .hero-stats {
    flex-direction: column;
    gap: var(--spacing-4);
    margin: var(--spacing-6) var(--spacing-4);
  }

  .hero-buttons {
    flex-direction: column;
    padding: 0 var(--spacing-4);
    
    .btn {
      width: 100%;
    }
  }
}
</style>


