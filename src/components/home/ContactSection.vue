<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-header">
        <h2 class="fade-in">지금 바로 무피를 만나보세요</h2>
        <p class="fade-in">궁금하신 점이 있으시다면 언제든 문의해주세요</p>
      </div>
      <div class="contact-content">
        <div class="contact-info fade-in">
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <h3>전화 문의</h3>
            <p>02-1234-5678</p>
            <p class="sub">평일 09:00 - 18:00</p>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <h3>이메일 문의</h3>
            <p>contact@mufi.co.kr</p>
            <p class="sub">24시간 접수 가능</p>
          </div>
          <div class="info-item">
            <i class="fas fa-comment"></i>
            <h3>카카오톡 문의</h3>
            <p>@mufi</p>
            <p class="sub">실시간 상담 가능</p>
          </div>
        </div>
        <form class="contact-form fade-in" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">이름 *</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required 
              placeholder="이름을 입력해주세요"
            />
          </div>
          <div class="form-group">
            <label for="email">이메일 *</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required 
              placeholder="이메일을 입력해주세요"
            />
          </div>
          <div class="form-group">
            <label for="phone">연락처</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="formData.phone" 
              placeholder="연락처를 입력해주세요"
            />
          </div>
          <div class="form-group">
            <label for="type">문의 유형 *</label>
            <select id="type" v-model="formData.type" required>
              <option value="">문의 유형을 선택해주세요</option>
              <option v-for="type in inquiryTypes" :key="type.value" :value="type.value">
                {{ type.label }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">문의 내용 *</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              required 
              placeholder="문의하실 내용을 입력해주세요"
              rows="5"
            ></textarea>
          </div>
          <div class="form-group checkbox">
            <input 
              type="checkbox" 
              id="privacy" 
              v-model="formData.privacy" 
              required
            />
            <label for="privacy">개인정보 수집 및 이용에 동의합니다 *</label>
          </div>
          <button type="submit" class="btn btn-primary">문의하기</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FormData {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  privacy: boolean;
}

interface InquiryType {
  value: string;
  label: string;
}

const inquiryTypes: InquiryType[] = [
  { value: 'rental', label: '키오스크 렌탈 문의' },
  { value: 'purchase', label: '키오스크 구매 문의' },
  { value: 'partnership', label: '제휴 및 협력 문의' },
  { value: 'technical', label: '기술 지원 문의' },
  { value: 'other', label: '기타 문의' }
]

const formData = ref<FormData>({
  name: '',
  email: '',
  phone: '',
  type: '',
  message: '',
  privacy: false
})

const handleSubmit = () => {
  // TODO: Implement form submission logic
  console.log('Form submitted:', formData.value)
  // Reset form after submission
  formData.value = {
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
    privacy: false
  }
}
</script>

<style scoped lang="scss">
.contact {
  min-height: 100vh;
  background-color: var(--bg-color);
  padding: var(--spacing-8) 0;
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

.container {
  position: relative;
  z-index: 1;
}

.contact-header {
  text-align: center;
  margin-bottom: 64px;

  h2 {
    font-size: 48px;
    font-weight: 800;
    color: var(--secondary-color);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  p {
    font-size: var(--font-size-xl);
    color: var(--gray-600);
    line-height: 1.6;
  }
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-item {
  background: var(--bg-color);
  padding: 32px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 2px 20px rgba(31, 31, 31, 0.08);
  border: 1px solid var(--gray-200);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 30px rgba(31, 31, 31, 0.12);
    border-color: var(--primary-color);

    i {
      color: var(--primary-color);
      transform: scale(1.1);
    }
  }

  i {
    font-size: 32px;
    color: var(--secondary-color);
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 12px;
  }

  p {
    color: var(--secondary-color);
    font-size: var(--font-size-base);
    margin-bottom: 4px;
    font-weight: 500;

    &.sub {
      font-size: var(--font-size-sm);
      color: var(--gray-600);
      font-weight: 400;
    }
  }
}

.contact-form {
  background: var(--bg-color);
  padding: 48px;
  border-radius: 16px;
  box-shadow: 0 2px 20px rgba(31, 31, 31, 0.08);
  border: 1px solid var(--gray-200);
}

.form-group {
  margin-bottom: 24px;

  label {
    display: block;
    font-size: var(--font-size-sm);
    color: var(--secondary-color);
    margin-bottom: 8px;
    font-weight: 600;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--gray-200);
    border-radius: 8px;
    font-size: var(--font-size-base);
    color: var(--secondary-color);
    transition: all 0.3s ease;
    background-color: var(--bg-color);

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 4px rgba(234, 67, 67, 0.1);
    }

    &::placeholder {
      color: var(--gray-500);
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  &.checkbox {
    display: flex;
    align-items: center;
    gap: 8px;

    input[type="checkbox"] {
      width: 20px;
      height: 20px;
      border: 2px solid var(--gray-300);
      border-radius: 4px;
      cursor: pointer;

      &:checked {
        background-color: var(--primary-color);
        border-color: var(--primary-color);
      }
    }

    label {
      margin-bottom: 0;
      font-size: var(--font-size-sm);
      color: var(--gray-600);
      cursor: pointer;
    }
  }
}

button[type="submit"] {
  width: 100%;
  padding: 16px;
  font-size: var(--font-size-lg);
  font-weight: 700;
  border-radius: 8px;
  background-color: var(--primary-color);
  color: var(--bg-color);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: darken(#EA4343, 5%);
    transform: translateY(-2px);
  }
}

@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .contact-info {
    flex-direction: row;
    flex-wrap: wrap;
    
    .info-item {
      flex: 1;
      min-width: 250px;
    }
  }

  .contact-form {
    padding: 32px;
  }
}

@media (max-width: 768px) {
  .contact-header {
    margin-bottom: 40px;

    h2 {
      font-size: 36px;
    }

    p {
      font-size: var(--font-size-lg);
    }
  }

  .contact-info {
    flex-direction: column;
    
    .info-item {
      width: 100%;
      padding: 24px;

      i {
        font-size: 28px;
        margin-bottom: 16px;
      }

      h3 {
        font-size: 18px;
      }
    }
  }

  .contact-form {
    padding: 24px;

    .form-group {
      margin-bottom: 20px;
    }

    button[type="submit"] {
      padding: 14px;
      font-size: var(--font-size-base);
    }
  }
}
</style> 