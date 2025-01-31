<template>
  <div class="reviews-section">
    <div class="reviews-content">
      <h2 class="animate-fadeInDown">고객 후기</h2>
      <p class="section-description animate-fadeInUp">MUFI와 함께한 소중한 순간들을 들려드립니다</p>
      
      <div class="reviews-grid">
        <div class="review-card animate-fadeInUp" style="animation-delay: 0.2s">
          <div class="review-profile">
            <img src="https://via.placeholder.com/100x100" alt="프로필" />
            <div class="profile-info">
              <h3>서울대학교 총학생회</h3>
              <p>2023 가을축제</p>
            </div>
          </div>
          <div class="review-text">
            <p>"축제 기간 내내 학생들의 호응이 정말 좋았습니다. 특히 총장님과 함께하는 네컷 이벤트는 대박이었어요! 다음 행사에도 꼭 함께하고 싶습니다."</p>
          </div>
          <div class="review-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>

        <div class="review-card animate-fadeInUp" style="animation-delay: 0.3s">
          <div class="review-profile">
            <img src="https://via.placeholder.com/100x100" alt="프로필" />
            <div class="profile-info">
              <h3>삼성전자 인사팀</h3>
              <p>2024 신년회</p>
            </div>
          </div>
          <div class="review-text">
            <p>"직원들이 정말 즐거워했습니다. QR코드로 바로 저장할 수 있어서 편리했고, 프레임도 우리 회사 특성에 맞게 제작해주셔서 만족도가 높았어요."</p>
          </div>
          <div class="review-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>

        <div class="review-card animate-fadeInUp" style="animation-delay: 0.4s">
          <div class="review-profile">
            <img src="https://via.placeholder.com/100x100" alt="프로필" />
            <div class="profile-info">
              <h3>시그니엘 웨딩홀</h3>
              <p>웨딩 플래너</p>
            </div>
          </div>
          <div class="review-text">
            <p>"하객분들의 반응이 정말 좋았습니다. 고급스러운 디자인과 프리미엄 부스가 저희 웨딩홀의 이미지와 잘 어울렸어요. 지속적으로 협력하고 싶습니다."</p>
          </div>
          <div class="review-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>

        <div class="review-card animate-fadeInUp" style="animation-delay: 0.5s">
          <div class="review-profile">
            <img src="https://via.placeholder.com/100x100" alt="프로필" />
            <div class="profile-info">
              <h3>서울재즈페스티벌</h3>
              <p>행사 기획자</p>
            </div>
          </div>
          <div class="review-text">
            <p>"야외 행사임에도 불구하고 완벽하게 운영해주셨어요. 갑자기 비가 왔을 때도 신속하게 대처해주셔서 정말 감사했습니다. 최고의 파트너십이었어요!"</p>
          </div>
          <div class="review-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
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
.reviews-section {
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

.reviews-content {
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

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.review-card {
  background: var(--bg-color);
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 32px;
  text-align: left;
  transition: all 0.3s ease;
  box-shadow: 0 2px 20px rgba(31, 31, 31, 0.08);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 30px rgba(31, 31, 31, 0.12);
    border-color: var(--primary-color);
  }

  .review-profile {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 16px;
      border: 2px solid var(--primary-color);
    }

    .profile-info {
      h3 {
        font-size: 20px;
        font-weight: 700;
        color: var(--secondary-color);
        margin-bottom: 4px;
      }

      p {
        font-size: var(--font-size-base);
        color: var(--gray-600);
        margin: 0;
        font-weight: 500;
      }
    }
  }

  .review-text {
    margin-bottom: 24px;
    position: relative;

    &::before {
      content: '"';
      position: absolute;
      top: -20px;
      left: -10px;
      font-size: 64px;
      color: var(--primary-color);
      opacity: 0.1;
      font-family: serif;
    }

    p {
      font-size: var(--font-size-lg);
      color: var(--secondary-color);
      line-height: 1.6;
      font-style: italic;
      position: relative;
      z-index: 1;
    }
  }

  .review-rating {
    color: var(--primary-color);
    font-size: 20px;
    display: flex;
    gap: 4px;

    i {
      transition: transform 0.3s ease;
    }

    &:hover i {
      transform: scale(1.2);
    }
  }
}

@media (max-width: 1024px) {
  .reviews-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .review-card {
    padding: 28px;

    .review-profile {
      margin-bottom: 20px;

      img {
        width: 56px;
        height: 56px;
      }

      .profile-info h3 {
        font-size: 18px;
      }
    }

    .review-text {
      margin-bottom: 20px;

      p {
        font-size: var(--font-size-base);
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

  .review-card {
    padding: 24px;

    .review-profile {
      margin-bottom: 16px;

      img {
        width: 48px;
        height: 48px;
        margin-right: 12px;
      }

      .profile-info h3 {
        font-size: 16px;
      }
    }

    .review-text {
      margin-bottom: 16px;

      &::before {
        font-size: 48px;
        top: -16px;
        left: -8px;
      }
    }

    .review-rating {
      font-size: 18px;
    }
  }
}
</style> 