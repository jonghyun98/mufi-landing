<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <span class="logo-text">MUFI</span>
          <p class="company-info">
            주식회사 MUFI<br>
            사업자등록번호: 123-45-67890<br>
            대표: 홍길동
          </p>
        </div>
        
        <div class="footer-links">
          <div class="link-group">
            <h3>서비스</h3>
            <a href="#features">특징</a>
            <a href="#service">서비스</a>
            <a href="#cases">설치사례</a>
          </div>
          
          <div class="link-group">
            <h3>고객지원</h3>
            <a href="#reviews">고객후기</a>
            <a href="#faq">자주묻는질문</a>
            <a href="#contact">문의하기</a>
          </div>
          
          <div class="link-group">
            <h3>연락처</h3>
            <p>서울특별시 강남구 테헤란로 123</p>
            <p>Tel: 02-123-4567</p>
            <p>Email: contact@mufi.com</p>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 MUFI. All rights reserved.</p>
        <div class="social-links">
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
          <a href="#" aria-label="Youtube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 필요한 경우 여기에 스크립트 추가
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--secondary-color);
  color: var(--bg-color);
  padding: var(--spacing-8) 0 var(--spacing-4);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-8);
}

.footer-brand {
  .logo-text {
    display: block;
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: var(--spacing-4);
  }
  
  .company-info {
    color: var(--gray-300);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
}

.link-group {
  h3 {
    color: var(--bg-color);
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-4);
  }
  
  a {
    display: block;
    color: var(--gray-300);
    text-decoration: none;
    margin-bottom: var(--spacing-2);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary-color);
    }
  }
  
  p {
    color: var(--gray-300);
    margin-bottom: var(--spacing-2);
  }
}

.footer-bottom {
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--gray-700);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  p {
    color: var(--gray-400);
    font-size: var(--font-size-sm);
  }
}

.social-links {
  display: flex;
  gap: var(--spacing-4);
  
  a {
    color: var(--gray-300);
    font-size: var(--font-size-xl);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary-color);
    }
  }
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-6) 0 var(--spacing-4);
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-4);
    text-align: center;
  }
}
</style> 