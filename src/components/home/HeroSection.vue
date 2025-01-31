<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="title fade-in-up">
          특별한 순간을<br />
          더욱 특별하게
        </h1>
        <p class="subtitle fade-in-up delay-1">
          스마트한 네컷사진관 플랫폼, 무피
        </p>
        <div class="cta-buttons fade-in-up delay-2">
          <a href="#features" class="primary-button">서비스 알아보기</a>
          <a href="#contact" class="secondary-button">문의하기</a>
        </div>
      </div>
      <div class="hero-image fade-in-up delay-3">
        <img src="@/assets/images/hero-image.png" alt="무피 키오스크 이미지" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/_variables' as *;
@use '@/assets/styles/_mixins' as *;

.hero {
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background-color: $bg-color;
  padding-top: 80px;
  overflow: hidden;

  .container {
    @include container;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    @include mobile {
      flex-direction: column;
      text-align: center;
      padding-top: 40px;
    }
  }

  .hero-content {
    flex: 1;
    max-width: 600px;

    .title {
      font-size: 3.5rem;
      font-weight: 700;
      color: $text-color;
      line-height: 1.2;
      margin-bottom: 1.5rem;

      @include mobile {
        font-size: 2.5rem;
      }
    }

    .subtitle {
      font-size: 1.5rem;
      color: rgba($text-color, 0.8);
      margin-bottom: 2rem;

      @include mobile {
        font-size: 1.25rem;
      }
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;

      @include mobile {
        justify-content: center;
      }
    }
  }

  .hero-image {
    flex: 1;
    max-width: 500px;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    @include mobile {
      max-width: 100%;
    }
  }
}

.primary-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: $primary-color;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

.secondary-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: transparent;
  color: $primary-color;
  text-decoration: none;
  border: 2px solid $primary-color;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: $primary-color;
    color: white;
  }
}

// 애니메이션 클래스
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;

  &.delay-1 {
    animation-delay: 0.2s;
  }
  &.delay-2 {
    animation-delay: 0.4s;
  }
  &.delay-3 {
    animation-delay: 0.6s;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>


