<template>
  <div class="cases-section">
    <div class="cases-content">
      <h2 class="animate-fadeInDown">설치 사례</h2>
      <p class="section-description animate-fadeInUp">다양한 행사에서 빛나는 MUFI의 특별한 순간들</p>
      
      <div class="cases-grid">
        <div class="case-card animate-fadeIn" style="animation-delay: 0.2s">
          <div class="case-image">
            <img src="https://via.placeholder.com/800x600" alt="충북대학교" />
          </div>
          <div class="case-info">
            <h3>충북대학교</h3>
            <p>2023 대동제 축제 기간 동안 3일간 1,500명 이상 이용</p>
            <div class="case-stats">
              <div class="stat-item">
                <span class="stat-value">1,500+</span>
                <span class="stat-label">이용자</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">3일</span>
                <span class="stat-label">기간</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">98%</span>
                <span class="stat-label">만족도</span>
              </div>
            </div>
          </div>
        </div>

        <div class="case-card animate-fadeIn" style="animation-delay: 0.3s">
          <div class="case-image">
            <img src="https://via.placeholder.com/800x600" alt="한국외국어대학교" />
          </div>
          <div class="case-info">
            <h3>한국외국어대학교</h3>
            <p>2023 축제 현장에서 2,000명 이상의 학생들과 함께</p>
            <div class="case-stats">
              <div class="stat-item">
                <span class="stat-value">2,000+</span>
                <span class="stat-label">이용자</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">4일</span>
                <span class="stat-label">기간</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">96%</span>
                <span class="stat-label">만족도</span>
              </div>
            </div>
          </div>
        </div>

        <div class="case-card animate-fadeIn" style="animation-delay: 0.4s">
          <div class="case-image">
            <img src="https://via.placeholder.com/800x600" alt="서울과학기술대학교" />
          </div>
          <div class="case-info">
            <h3>서울과학기술대학교</h3>
            <p>2023 대동제에서 총장님과 함께한 특별한 순간</p>
            <div class="case-stats">
              <div class="stat-item">
                <span class="stat-value">1,800+</span>
                <span class="stat-label">이용자</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">3일</span>
                <span class="stat-label">기간</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">95%</span>
                <span class="stat-label">만족도</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for now
</script>

<style scoped lang="scss">
.cases-section {
  width: 100%;
  padding: var(--spacing-8) 0;
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

.cases-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  position: relative;
  z-index: 1;
}

h2 {
  font-size: 48px;
  font-weight: 800;
  color: var(--secondary-color);
  text-align: center;
  margin-bottom: var(--spacing-3);
  letter-spacing: -0.02em;
}

.section-description {
  font-size: var(--font-size-xl);
  color: var(--gray-600);
  text-align: center;
  margin-bottom: var(--spacing-8);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.case-card {
  background: var(--bg-color);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 20px rgba(31, 31, 31, 0.08);
  transition: all 0.3s ease;
  border: 1px solid var(--gray-200);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 30px rgba(31, 31, 31, 0.12);
    border-color: var(--primary-color);

    .case-image img {
      transform: scale(1.1);
    }
  }
}

.case-image {
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(180deg, rgba(31, 31, 31, 0) 0%, rgba(31, 31, 31, 0.4) 100%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
}

.case-info {
  padding: 32px;

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 12px;
  }

  p {
    color: var(--gray-600);
    margin-bottom: 24px;
    line-height: 1.6;
    font-size: var(--font-size-base);
  }
}

.case-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid var(--gray-200);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .stat-value {
    font-size: 28px;
    font-weight: 800;
    color: var(--primary-color);
    line-height: 1;
  }

  .stat-label {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--secondary-color);
    opacity: 0.8;
  }
}

@media (max-width: 1024px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  .case-card {
    .case-image {
      height: 220px;
    }
    
    .case-info {
      padding: 24px;
      
      h3 {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 36px;
  }

  .section-description {
    font-size: var(--font-size-lg);
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .case-image {
    height: 200px;
  }
  
  .case-info {
    padding: 20px;
    
    h3 {
      font-size: 18px;
    }
  }
  
  .case-stats {
    padding-top: 20px;
    gap: 12px;
    
    .stat-value {
      font-size: 24px;
    }
  }
}
</style> 