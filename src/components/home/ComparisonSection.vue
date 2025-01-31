<template>
  <div class="comparison-section">
    <div class="comparison-content">
      <h2 class="animate-fadeInDown">왜 MUFI인가요?</h2>
      <p class="section-description animate-fadeInUp">타사 대비 MUFI만의 특별한 장점을 확인하세요</p>
      
      <div class="comparison-table animate-fadeIn" style="animation-delay: 0.2s">
        <table>
          <thead>
            <tr>
              <th>비교 항목</th>
              <th class="highlight">MUFI</th>
              <th>타사 A</th>
              <th>타사 B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>프레임 개수</td>
              <td class="highlight">무제한</td>
              <td>30개</td>
              <td>50개</td>
            </tr>
            <tr>
              <td>QR 저장</td>
              <td class="highlight">무료</td>
              <td>유료</td>
              <td>불가능</td>
            </tr>
            <tr>
              <td>설치 대수</td>
              <td class="highlight">1~13대</td>
              <td>1~5대</td>
              <td>1~3대</td>
            </tr>
            <tr>
              <td>커스텀 프레임</td>
              <td class="highlight">실시간 수정</td>
              <td>3일 소요</td>
              <td>5일 소요</td>
            </tr>
            <tr>
              <td>기술 지원</td>
              <td class="highlight">24/7</td>
              <td>업무시간</td>
              <td>업무시간</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="comparison-features">
        <div class="feature-card animate-fadeInUp" style="animation-delay: 0.3s">
          <i class="fas fa-rocket"></i>
          <h3>빠른 설치</h3>
          <p>신청 즉시 당일 설치 가능</p>
        </div>
        
        <div class="feature-card animate-fadeInUp" style="animation-delay: 0.4s">
          <i class="fas fa-paint-brush"></i>
          <h3>맞춤 디자인</h3>
          <p>행사에 맞는 프레임 무료 제작</p>
        </div>
        
        <div class="feature-card animate-fadeInUp" style="animation-delay: 0.5s">
          <i class="fas fa-shield-alt"></i>
          <h3>안전한 운영</h3>
          <p>전문 엔지니어의 실시간 모니터링</p>
        </div>
        
        <div class="feature-card animate-fadeInUp" style="animation-delay: 0.6s">
          <i class="fas fa-hand-holding-usd"></i>
          <h3>합리적인 가격</h3>
          <p>고품질 서비스를 합리적인 가격에</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for now
</script>

<style scoped lang="scss">
.comparison-section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8) var(--spacing-4);
  background-color: var(--secondary-color);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(234, 67, 67, 0.1) 0%, rgba(234, 67, 67, 0) 100%);
    opacity: 0.1;
    z-index: 0;
  }
}

.comparison-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

h2 {
  font-size: 48px;
  font-weight: 800;
  color: var(--bg-color);
  margin-bottom: var(--spacing-3);
  letter-spacing: -0.02em;
}

.section-description {
  font-size: var(--font-size-xl);
  color: var(--gray-300);
  margin-bottom: var(--spacing-8);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.comparison-table {
  margin-bottom: var(--spacing-8);
  overflow-x: auto;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: var(--bg-color);
    border-radius: 16px;
    overflow: hidden;
  }

  th, td {
    padding: 24px;
    text-align: center;
    border: 1px solid var(--gray-200);
    font-size: var(--font-size-base);
  }

  th {
    background-color: var(--secondary-color);
    color: var(--bg-color);
    font-weight: 700;
    font-size: 18px;
    
    &.highlight {
      background-color: var(--primary-color);
    }
  }

  td {
    color: var(--secondary-color);
    font-weight: 500;
    
    &.highlight {
      background-color: rgba(234, 67, 67, 0.1);
      color: var(--primary-color);
      font-weight: 700;
    }
  }

  tbody tr {
    transition: all 0.3s ease;
    
    &:hover {
      background-color: var(--gray-100);
      
      td.highlight {
        background-color: rgba(234, 67, 67, 0.15);
      }
    }
  }
}

.comparison-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 48px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 32px;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--primary-color);
    
    i {
      color: var(--primary-color);
      transform: scale(1.1);
    }
  }

  i {
    font-size: 32px;
    color: var(--bg-color);
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--bg-color);
    margin-bottom: 12px;
  }

  p {
    font-size: var(--font-size-base);
    color: var(--gray-300);
    line-height: 1.6;
  }
}

@media (max-width: 1024px) {
  .comparison-features {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .comparison-table {
    th, td {
      padding: 20px;
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

  .comparison-features {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .comparison-table {
    font-size: var(--font-size-sm);

    th, td {
      padding: 16px 12px;
      font-size: 14px;
    }

    th {
      font-size: 16px;
    }
  }

  .feature-card {
    padding: 24px;

    i {
      font-size: 28px;
      margin-bottom: 16px;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 8px;
    }
  }
}
</style> 