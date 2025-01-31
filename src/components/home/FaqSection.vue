<template>
  <section class="faq">
    <div class="container">
      <div class="faq-header">
        <h2 class="fade-in">자주 묻는 질문</h2>
        <p class="fade-in">고객님들이 자주 문의하시는 내용을 모았습니다</p>
      </div>
      <div class="faq-grid">
        <div v-for="(item, index) in faqItems" :key="index" class="faq-item fade-in" :style="{ animationDelay: `${0.2 * (index + 1)}s` }">
          <button class="faq-question" @click="toggleFaq(index)" :class="{ 'active': openIndex === index }">
            {{ item.question }}
            <i class="fas" :class="openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
          </button>
          <div class="faq-answer" :class="{ 'active': openIndex === index }">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
      <div class="faq-cta fade-in">
        <p>더 궁금하신 점이 있으신가요?</p>
        <a href="#contact" class="btn btn-primary">문의하기</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FaqItem {
  question: string;
  answer: string;
}

const openIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqItems: FaqItem[] = [
  {
    question: '무피 키오스크는 어떤 공간에 설치할 수 있나요?',
    answer: '무피 키오스크는 실내외 모든 공간에 설치 가능합니다. 전원 연결이 가능하고 평평한 바닥만 있다면 어디든 설치할 수 있습니다. 대학교, 기업, 행사장 등 다양한 장소에서 활용되고 있습니다.'
  },
  {
    question: '키오스크 렌탈 기간은 어떻게 되나요?',
    answer: '최소 1일부터 장기 계약까지 고객님의 필요에 맞춰 유연하게 조정 가능합니다. 행사 성격과 기간에 따라 맞춤형 견적을 제공해드립니다.'
  },
  {
    question: '프레임 디자인은 직접 제작할 수 있나요?',
    answer: '네, 가능합니다. 무피는 고객님이 직접 프레임을 디자인하고 수정할 수 있는 관리자 페이지를 제공합니다. 또한 전문 디자이너의 도움이 필요하시다면 별도 문의를 통해 제작을 도와드립니다.'
  },
  {
    question: '키오스크 관리는 어떻게 하나요?',
    answer: '무피는 완전한 무인 운영이 가능하도록 설계되었습니다. 실시간 모니터링 시스템을 통해 원격으로 상태를 확인할 수 있으며, 문제 발생 시 즉각적인 기술 지원을 제공합니다.'
  },
  {
    question: '사진 저장은 어떻게 되나요?',
    answer: '촬영된 사진은 QR코드를 통해 즉시 다운로드 받을 수 있으며, 온라인 갤러리에서도 확인 가능합니다. 모든 데이터는 안전하게 암호화되어 저장됩니다.'
  },
  {
    question: '고장이나 문제가 발생하면 어떻게 하나요?',
    answer: '24시간 기술 지원팀이 대기하고 있어 문제 발생 시 신속하게 대응해드립니다. 원격으로 해결이 어려운 경우 현장 방문 서비스를 제공합니다.'
  }
]
</script>

<style>
.faq {
  min-height: 100vh;
  background-color: var(--bg-color);
  padding: var(--spacing-8) 0;
}

.faq-header {
  text-align: center;
  margin-bottom: var(--spacing-8);
}

.faq-header h2 {
  font-size: var(--font-size-4xl);
  color: var(--text-color);
  margin-bottom: var(--spacing-3);
}

.faq-header p {
  font-size: var(--font-size-xl);
  color: var(--text-color);
  opacity: 0.8;
}

.faq-grid {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-8);
}

.faq-item {
  background: white;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.faq-question {
  width: 100%;
  padding: var(--spacing-4) var(--spacing-6);
  background: none;
  border: none;
  text-align: left;
  font-size: var(--font-size-lg);
  font-weight: 500;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: var(--gray-50);
}

.faq-question.active {
  background: var(--primary-color);
  color: white;
}

.faq-question i {
  font-size: var(--font-size-xl);
  transition: transform 0.3s ease;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  background: white;
}

.faq-answer.active {
  max-height: 500px;
  padding: var(--spacing-4) var(--spacing-6);
}

.faq-answer p {
  color: var(--text-color);
  opacity: 0.8;
  line-height: var(--line-height-relaxed);
}

.faq-cta {
  text-align: center;
}

.faq-cta p {
  font-size: var(--font-size-lg);
  color: var(--text-color);
  margin-bottom: var(--spacing-4);
}

@media (max-width: 768px) {
  .faq {
    padding: var(--spacing-6) 0;
  }

  .faq-header h2 {
    font-size: var(--font-size-3xl);
  }

  .faq-question {
    padding: var(--spacing-3) var(--spacing-4);
    font-size: var(--font-size-base);
  }

  .faq-answer.active {
    padding: var(--spacing-3) var(--spacing-4);
  }
}
</style> 