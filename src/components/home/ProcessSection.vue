<template>
  <section id="process" class="process">
    <div class="container">
      <h2 class="section-title fade-in-up">이용 방법</h2>
      <div class="process-steps">
        <div class="step fade-in-up delay-1">
          <div class="step-number">01</div>
          <h3>키오스크 선택</h3>
          <p>원하는 스타일의 키오스크를 선택하세요.</p>
        </div>
        <div class="step fade-in-up delay-2">
          <div class="step-number">02</div>
          <h3>촬영 및 편집</h3>
          <p>다양한 필터와 효과로 사진을 편집하세요.</p>
        </div>
        <div class="step fade-in-up delay-3">
          <div class="step-number">03</div>
          <h3>인화 및 저장</h3>
          <p>고품질로 인화하고 디지털 파일로 저장하세요.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProcessSection'
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/_variables' as *;
@use '@/assets/styles/_mixins' as *;

.process {
  padding: 100px 0;
  background-color: white;

  .section-title {
    text-align: center;
    margin-bottom: 60px;
    font-size: 2.5rem;
    color: $text-color;
  }

  .process-steps {
    display: flex;
    justify-content: space-between;
    gap: 30px;

    @include mobile {
      flex-direction: column;
    }
  }

  .step {
    flex: 1;
    text-align: center;
    padding: 30px;

    .step-number {
      font-size: 3rem;
      font-weight: 700;
      color: $primary-color;
      margin-bottom: 20px;
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