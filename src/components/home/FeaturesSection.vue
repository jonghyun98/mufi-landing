<template>
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title fade-in-up">서비스 특징</h2>
      <div class="features-grid">
        <div class="feature-card fade-in-up delay-1">
          <div class="icon">
            <img src="@/assets/images/feature-1.png" alt="스마트한 운영" />
          </div>
          <h3>스마트한 운영</h3>
          <p>키오스크를 통한 자동화된 운영으로 인건비 절감과 효율적인 관리가 가능합니다.</p>
        </div>
        <div class="feature-card fade-in-up delay-2">
          <div class="icon">
            <img src="@/assets/images/feature-2.png" alt="다양한 이벤트" />
          </div>
          <h3>다양한 이벤트</h3>
          <p>학교 축제, 기업 행사 등 다양한 이벤트에 맞춤형 서비스를 제공합니다.</p>
        </div>
        <div class="feature-card fade-in-up delay-3">
          <div class="icon">
            <img src="@/assets/images/feature-3.png" alt="고품질 출력" />
          </div>
          <h3>고품질 출력</h3>
          <p>최신 프린팅 기술을 통해 선명하고 깨끗한 품질의 사진을 제공합니다.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/_variables' as *;
@use '@/assets/styles/_mixins' as *;

.features {
  padding: 100px 0;
  background-color: #f8f9fa;

  .section-title {
    text-align: center;
    margin-bottom: 60px;
    font-size: 2.5rem;
    color: $text-color;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  .feature-card {
    background: white;
    padding: 40px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    h3 {
      font-size: 1.5rem;
      color: $text-color;
      margin-bottom: 15px;
    }

    p {
      color: rgba($text-color, 0.8);
      line-height: 1.6;
    }
  }
}
</style> 