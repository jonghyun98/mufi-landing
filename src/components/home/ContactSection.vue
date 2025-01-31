<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title fade-in-up">문의하기</h2>
      <div class="contact-content">
        <div class="contact-info fade-in-up delay-1">
          <h3>무피와 함께하세요</h3>
          <p>특별한 순간을 더욱 특별하게 만들어드립니다.</p>
          <div class="info-item">
            <strong>이메일:</strong>
            <a href="mailto:contact@mufi.co.kr">contact@mufi.co.kr</a>
          </div>
          <div class="info-item">
            <strong>전화:</strong>
            <a href="tel:02-1234-5678">02-1234-5678</a>
          </div>
        </div>
        <form class="contact-form fade-in-up delay-2" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">이름</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">이메일</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="message">문의내용</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit" class="submit-button">문의하기</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // 폼 제출 로직 구현
      console.log('Form submitted:', this.form)
      // 폼 초기화
      this.form = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/_variables' as *;
@use '@/assets/styles/_mixins' as *;

.contact {
  padding: 100px 0;
  background-color: #f8f9fa;

  .section-title {
    text-align: center;
    margin-bottom: 60px;
    font-size: 2.5rem;
    color: $text-color;
  }

  .contact-content {
    display: flex;
    gap: 60px;

    @include mobile {
      flex-direction: column;
    }
  }

  .contact-info {
    flex: 1;

    h3 {
      font-size: 2rem;
      color: $text-color;
      margin-bottom: 20px;
    }

    p {
      color: rgba($text-color, 0.8);
      margin-bottom: 30px;
    }

    .info-item {
      margin-bottom: 15px;

      strong {
        display: inline-block;
        width: 80px;
        color: $text-color;
      }

      a {
        color: $primary-color;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .contact-form {
    flex: 1;

    .form-group {
      margin-bottom: 20px;

      label {
        display: block;
        margin-bottom: 8px;
        color: $text-color;
      }

      input,
      textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 1rem;

        &:focus {
          outline: none;
          border-color: $primary-color;
        }
      }

      textarea {
        height: 150px;
        resize: vertical;
      }
    }

    .submit-button {
      width: 100%;
      padding: 1rem;
      background-color: $primary-color;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: darken($primary-color, 10%);
      }
    }
  }
}
</style> 