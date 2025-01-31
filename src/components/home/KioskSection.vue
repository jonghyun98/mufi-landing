<template>
  <div class="kiosk-section">
    <div class="kiosk-content">
      <h2 class="animate-fadeInDown">포토부스 소개</h2>
      <p class="section-description animate-fadeInUp">젊고 트렌디한 디자인의 MUFI 포토부스로 특별한 순간을 더욱 특별하게</p>
      
      <div class="kiosk-showcase">
        <div class="kiosk-model animate-fadeInLeft" style="animation-delay: 0.2s">
          <div class="kiosk-image">
            <img src="https://via.placeholder.com/800x600" alt="스탠다드 모델" />
          </div>
          <div class="kiosk-info">
            <h3>스탠다드 모델</h3>
            <p>가장 인기있는 기본형 포토부스</p>
            <ul>
              <li>32인치 터치스크린</li>
              <li>DSLR 카메라 탑재</li>
              <li>고품질 포토 프린터</li>
              <li>LED 라이트 시스템</li>
            </ul>
          </div>
        </div>

        <div class="kiosk-model animate-fadeInRight" style="animation-delay: 0.3s">
          <div class="kiosk-image">
            <img src="https://via.placeholder.com/800x600" alt="프리미엄 모델" />
          </div>
          <div class="kiosk-info">
            <h3>프리미엄 모델</h3>
            <p>더 넓은 공간, 더 높은 퀄리티</p>
            <ul>
              <li>43인치 대형 터치스크린</li>
              <li>미러리스 카메라 탑재</li>
              <li>듀얼 프린터 시스템</li>
              <li>프로페셔널 조명 장비</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="kiosk-features animate-fadeInUp" style="animation-delay: 0.4s">
        <h3>포토부스 주요 기능</h3>
        <div class="features-grid">
          <div class="feature-item">
            <i class="fas fa-camera"></i>
            <h4>고화질 촬영</h4>
            <p>전문가급 카메라로 선명한 사진 촬영</p>
          </div>
          <div class="feature-item">
            <i class="fas fa-edit"></i>
            <h4>실시간 편집</h4>
            <p>필터, 스티커로 사진 꾸미기</p>
          </div>
          <div class="feature-item">
            <i class="fas fa-print"></i>
            <h4>즉시 인화</h4>
            <p>고품질 프린터로 바로 출력</p>
          </div>
          <div class="feature-item">
            <i class="fas fa-qrcode"></i>
            <h4>QR 저장</h4>
            <p>스마트폰으로 바로 저장</p>
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
.kiosk-section {
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
    background: linear-gradient(180deg, rgba(234, 67, 67, 0.02) 0%, rgba(234, 67, 67, 0) 100%);
    z-index: 0;
  }
}

.kiosk-content {
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

.kiosk-showcase {
  display: flex;
  gap: 32px;
  margin-bottom: var(--spacing-8);
}

.kiosk-model {
  flex: 1;
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

    .kiosk-image img {
      transform: scale(1.1);
    }
  }

  .kiosk-image {
    width: 100%;
    height: 360px;
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

  .kiosk-info {
    padding: 32px;
    text-align: left;

    h3 {
      font-size: 24px;
      font-weight: 700;
      color: var(--secondary-color);
      margin-bottom: 12px;
    }

    p {
      color: var(--gray-600);
      margin-bottom: 24px;
      font-size: var(--font-size-lg);
      font-weight: 500;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        color: var(--gray-600);
        margin-bottom: 12px;
        font-size: var(--font-size-base);
        display: flex;
        align-items: center;
        
        &:before {
          content: "";
          width: 20px;
          height: 20px;
          background-color: var(--primary-color);
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'/%3E%3C/svg%3E");
          margin-right: 12px;
          flex-shrink: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

.kiosk-features {
  margin-top: var(--spacing-8);
  padding: 48px;
  background-color: var(--bg-color);
  border-radius: 16px;
  box-shadow: 0 2px 20px rgba(31, 31, 31, 0.08);
  border: 1px solid var(--gray-200);

  h3 {
    font-size: 32px;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 40px;
    letter-spacing: -0.02em;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  .feature-item {
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      
      i {
        color: var(--primary-color);
        transform: scale(1.1);
      }
    }

    i {
      font-size: 32px;
      color: var(--secondary-color);
      margin-bottom: var(--spacing-3);
      transition: all 0.3s ease;
    }

    h4 {
      font-size: 20px;
      font-weight: 700;
      color: var(--secondary-color);
      margin-bottom: 12px;
    }

    p {
      font-size: var(--font-size-base);
      color: var(--gray-600);
      line-height: 1.6;
    }
  }
}

@media (max-width: 1024px) {
  .kiosk-showcase {
    flex-direction: column;
    gap: 24px;
  }

  .kiosk-model {
    .kiosk-image {
      height: 300px;
    }
  }

  .kiosk-features {
    padding: 32px;
    
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
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

  .kiosk-model {
    .kiosk-image {
      height: 240px;
    }

    .kiosk-info {
      padding: 24px;

      h3 {
        font-size: 20px;
      }

      p {
        font-size: var(--font-size-base);
        margin-bottom: 20px;
      }
    }
  }

  .kiosk-features {
    padding: 24px;
    margin: var(--spacing-4);
    
    h3 {
      font-size: 24px;
      margin-bottom: 24px;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .feature-item {
      i {
        font-size: 28px;
      }
      
      h4 {
        font-size: 18px;
      }
    }
  }
}
</style> 