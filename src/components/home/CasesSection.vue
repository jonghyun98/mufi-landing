<template>
  <section class="cases-section">
    <div class="container">
      <h2 class="section-title">설치 사례</h2>
      <p class="section-description">다양한 행사에서 MUFI와 함께한 순간들</p>
      
      <div class="cases-grid">
        <div class="case-card" v-for="(item, index) in cases" :key="index">
          <div class="case-header">
            <h3>{{ item.university }}</h3>
            <p class="event-name">{{ item.event }}</p>
          </div>
          <div class="case-stats">
            <div class="stat-item">
              <div class="stat-value">
                <count-up :end-val="item.users" :duration="2.5" :autoplay="true" separator="," />
                <span class="stat-unit">명+</span>
              </div>
              <div class="stat-label">이용자 수</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">
                <count-up :end-val="item.days" :duration="2.5" :autoplay="true" />
                <span class="stat-unit">일</span>
              </div>
              <div class="stat-label">운영 기간</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">
                <count-up :end-val="item.satisfaction" :duration="2.5" :autoplay="true" />
                <span class="stat-unit">%</span>
              </div>
              <div class="stat-label">만족도</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CountUp from 'vue-countup-v3'

const cases = ref([
  {
    university: '서울과학기술대학교',
    event: '2023 대동제',
    users: 1800,
    days: 3,
    satisfaction: 95
  },
  {
    university: '충북대학교',
    event: '2023 대동제',
    users: 1500,
    days: 3,
    satisfaction: 98
  },
  {
    university: '서원대학교',
    event: '2023 신입생 오리엔테이션',
    users: 1200,
    days: 2,
    satisfaction: 97
  },
  {
    university: '연세대학교 미래캠퍼스',
    event: '2023 채용 박람회',
    users: 2000,
    days: 4,
    satisfaction: 96
  },
  {
    university: '동국대학교',
    event: '2023~2025 동아리 박람회',
    users: 10000,
    days: 3,
    satisfaction: 94
  },
  {
    university: '건국대학교',
    event: '2023 축제 이벤트',
    users: 2200,
    days: 5,
    satisfaction: 99
  },
  {
    university: '건국대학교 글로컬캠퍼스',
    event: '2023 가을 축제',
    users: 1700,
    days: 3,
    satisfaction: 96
  },
  {
    university: '세종대학교',
    event: '2023 신입생 환영회',
    users: 5000,
    days: 2,
    satisfaction: 95
  }
])
</script>

<style scoped lang="scss">
.cases-section {
  padding: 100px 0;
  background-color: var(--bg-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.section-description {
  text-align: center;
  font-size: 1.2rem;
  color: var(--gray-600);
  margin-bottom: 3rem;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.case-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .case-header {
    margin-bottom: 1.5rem;
    
    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--secondary-color);
      margin-bottom: 0.5rem;
    }

    .event-name {
      font-size: 1rem;
      color: var(--primary-color);
      font-weight: 500;
    }
  }

  .case-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .stat-item {
    text-align: center;

    .stat-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--secondary-color);
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      .stat-unit {
        font-size: 1rem;
        color: var(--gray-600);
      }
    }

    .stat-label {
      font-size: 0.875rem;
      color: var(--gray-600);
    }
  }
}

@media (max-width: 768px) {
  .cases-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .case-card {
    padding: 1.5rem;

    .case-header {
      h3 {
        font-size: 1.125rem;
      }
    }

    .stat-item {
      .stat-value {
        font-size: 1.25rem;
      }
    }
  }
}
</style> 