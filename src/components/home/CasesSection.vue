<template>
  <div id="cases" class="cases-section section-animation section-cases">
    <div class="container">
      <h2 class="section-title fade-in-up">설치 사례</h2>
      <p class="section-description fade-in-up delay-1">다양한 행사에서 MUFI와 함께한 순간들</p>
      
      <div class="cases-grid">
        <div v-for="(item, index) in cases" 
             :key="index" 
             class="case-card fade-in-up"
             :class="`delay-${index + 2}`">
          <div class="case-image">
            <img :src="getImageUrl(item.imageFolder)" :alt="`${item.university} 행사 사진`" />
          </div>
          <div class="case-content">
            <h3>{{ item.university }}</h3>
            <p class="event-description">{{ item.description }}</p>
            <div class="case-stats">
              <div class="stat-item">
                <div class="stat-value">
                  <count-up :end-val="item.users" :duration="2.5" :autoplay="true" separator="," />+
                </div>
                <div class="stat-label">이용자</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">{{ item.days }}일</div>
                <div class="stat-label">기간</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">{{ item.satisfaction }}%</div>
                <div class="stat-label">만족도</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CountUp from 'vue-countup-v3'

const cases = ref([
  {
    university: '서울과학기술대학교',
    description: '2023 대동제에서 총장님과 함께한 특별한 순간',
    users: 1800,
    days: 3,
    satisfaction: 95,
    imageFolder: 'seoultech'
  },
  {
    university: '충북대학교',
    description: '2023 대동제 축제 기간 동안 3일간 1,500명 이상 이용',
    users: 1500,
    days: 3,
    satisfaction: 98,
    imageFolder: 'chungbuk'
  },
  {
    university: '서원대학교',
    description: '2023 신입생 오리엔테이션에서 1,200명 이상의 신입생과 함께',
    users: 1200,
    days: 2,
    satisfaction: 97,
    imageFolder: 'seowon'
  },
  {
    university: '연세대학교 미래캠퍼스',
    description: '2023 채용 박람회에서 2,000명 이상의 학생들과 소통',
    users: 2000,
    days: 4,
    satisfaction: 96,
    imageFolder: 'yonsei'
  },
  {
    university: '동국대학교',
    description: '2023~2025 동아리 박람회에서 10,000명 이상의 학생들과 함께',
    users: 10000,
    days: 3,
    satisfaction: 94,
    imageFolder: 'dongguk'
  },
  {
    university: '건국대학교',
    description: '2023 축제 이벤트에서 2,200명 이상의 참여자와 함께한 순간',
    users: 2200,
    days: 5,
    satisfaction: 99,
    imageFolder: 'konkuk'
  },
  {
    university: '건국대학교 글로컬캠퍼스',
    description: '2023 가을 축제에서 1,700명 이상의 학생들과 즐거운 시간',
    users: 1700,
    days: 3,
    satisfaction: 96,
    imageFolder: 'konkuk-glocal'
  },
  {
    university: '세종대학교',
    description: '2023 신입생 환영회에서 5,000명 이상의 신입생들과 함께',
    users: 5000,
    days: 2,
    satisfaction: 95,
    imageFolder: 'sejong'
  }
])

const getImageUrl = (folder: string) => {
  try {
    return new URL(`../../assets/images/cases/${folder}/main.png`, import.meta.url).href
  } catch {
    return new URL(`../../assets/images/cases/placeholder.png`, import.meta.url).href
  }
}
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.case-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .case-image {
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .case-content {
    padding: 2rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--secondary-color);
      margin-bottom: 1rem;
    }

    .event-description {
      font-size: 1rem;
      color: var(--gray-600);
      margin-bottom: 2rem;
      line-height: 1.5;
    }
  }

  .case-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .stat-item {
    text-align: center;
    flex: 1;

    .stat-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--secondary-color);
      margin-bottom: 0.5rem;
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
    .case-content {
      padding: 1.5rem;

      h3 {
        font-size: 1.25rem;
      }

      .event-description {
        font-size: 0.875rem;
        margin-bottom: 1.5rem;
      }
    }

    .stat-item {
      .stat-value {
        font-size: 1.25rem;
      }

      .stat-label {
        font-size: 0.75rem;
      }
    }
  }
}
</style> 