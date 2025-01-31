<template>
  <div class="service-section">
    <div class="service-content">
      <h2 class="animate-fadeInDown">서비스 소개</h2>
      <p class="section-description animate-fadeInUp">10만 명 이상이 선택한 검증된 포토부스, MUFI와 함께 특별한 순간을 기록하세요</p>
      
      <div class="service-grid">
        <div class="service-card animate-fadeInLeft" style="animation-delay: 0.2s">
          <div class="service-image">
            <img src="https://via.placeholder.com/800x600" alt="대학교 행사" />
          </div>
          <div class="service-info">
            <h3>대학교 행사</h3>
            <ul>
              <li>축제, 입학식, 졸업식</li>
              <li>학과 행사, 동아리 행사</li>
              <li>총장네컷 이벤트</li>
            </ul>
          </div>
        </div>
        
        <div class="service-card animate-fadeInRight" style="animation-delay: 0.3s">
          <div class="service-image">
            <img src="https://via.placeholder.com/800x600" alt="기업 행사" />
          </div>
          <div class="service-info">
            <h3>기업 행사</h3>
            <ul>
              <li>워크샵, 연말 행사</li>
              <li>제품 런칭, 전시회</li>
              <li>팀빌딩, 사내 이벤트</li>
            </ul>
          </div>
        </div>
        
        <div class="service-card animate-fadeInLeft" style="animation-delay: 0.4s">
          <div class="service-image">
            <img src="https://via.placeholder.com/800x600" alt="웨딩" />
          </div>
          <div class="service-info">
            <h3>웨딩・연회</h3>
            <ul>
              <li>결혼식, 돌잔치</li>
              <li>프로포즈, 기념일</li>
              <li>가족 모임, 친목 행사</li>
            </ul>
          </div>
        </div>
        
        <div class="service-card animate-fadeInRight" style="animation-delay: 0.5s">
          <div class="service-image">
            <img src="https://via.placeholder.com/800x600" alt="이벤트" />
          </div>
          <div class="service-info">
            <h3>이벤트・페스티벌</h3>
            <ul>
              <li>지역 축제, 문화 행사</li>
              <li>콘서트, 팬미팅</li>
              <li>플리마켓, 마케팅 행사</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="service-features animate-fadeInUp" style="animation-delay: 0.6s">
        <h3>MUFI만의 특별한 혜택</h3>
        <div class="features-list">
          <div class="feature-item">
            <i class="fas fa-infinity"></i>
            <p>무제한 프레임 제작</p>
          </div>
          <div class="feature-item">
            <i class="fas fa-mobile-alt"></i>
            <p>QR코드로 즉시 저장</p>
          </div>
          <div class="feature-item">
            <i class="fas fa-users"></i>
            <p>1~13대 동시 설치</p>
          </div>
          <div class="feature-item">
            <i class="fas fa-headset"></i>
            <p>24/7 기술 지원</p>
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
.service-section {
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

.service-content {
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

.service-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: var(--spacing-8);
}

.service-card {
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

    .service-image img {
      transform: scale(1.1);
    }
  }

  .service-image {
    width: 100%;
    height: 240px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  .service-info {
    padding: 32px;
    text-align: left;

    h3 {
      font-size: 24px;
      font-weight: 700;
      color: var(--secondary-color);
      margin-bottom: var(--spacing-4);
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
          width: 6px;
          height: 6px;
          background-color: var(--primary-color);
          border-radius: 50%;
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

.service-features {
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
    margin-bottom: var(--spacing-6);
    letter-spacing: -0.02em;
  }

  .features-list {
    display: flex;
    justify-content: center;
    gap: 48px;
    flex-wrap: wrap;
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

    p {
      font-size: var(--font-size-lg);
      font-weight: 600;
      color: var(--secondary-color);
      margin: 0;
    }
  }
}

@media (max-width: 1024px) {
  .service-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .service-features {
    padding: 32px;
    
    .features-list {
      gap: 32px;
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

  .service-card {
    .service-image {
      height: 200px;
    }

    .service-info {
      padding: 24px;

      h3 {
        font-size: 20px;
      }
    }
  }

  .service-features {
    padding: 24px;
    margin: var(--spacing-4);
    
    h3 {
      font-size: 24px;
    }
    
    .feature-item {
      width: calc(50% - 16px);
      
      i {
        font-size: 28px;
      }
      
      p {
        font-size: var(--font-size-base);
      }
    }
  }
}
</style> 