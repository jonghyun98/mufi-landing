import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const handleScroll = () => {
    const elements = document.querySelectorAll('.animate-fadeIn, .animate-fadeInUp, .animate-fadeInDown')
    
    elements.forEach((element) => {
      const htmlElement = element as HTMLElement
      const elementTop = htmlElement.getBoundingClientRect().top
      const elementBottom = htmlElement.getBoundingClientRect().bottom
      const windowHeight = window.innerHeight
      
      // 요소가 화면에 보이는지 확인 (약간의 오프셋 추가)
      const isVisible = (elementTop < windowHeight - 50) && (elementBottom > 0)
      
      if (isVisible) {
        htmlElement.style.opacity = '1'
        htmlElement.style.transform = 'translateY(0)'
      } else {
        // 화면 밖으로 나갔을 때는 애니메이션 초기 상태로 리셋하지 않음
        if (!htmlElement.style.opacity) {
          htmlElement.style.opacity = '0'
          if (htmlElement.classList.contains('animate-fadeInUp')) {
            htmlElement.style.transform = 'translateY(20px)'
          } else if (htmlElement.classList.contains('animate-fadeInDown')) {
            htmlElement.style.transform = 'translateY(-20px)'
          }
        }
      }
    })
  }
  
  onMounted(() => {
    // 초기 상태 설정
    const elements = document.querySelectorAll('.animate-fadeIn, .animate-fadeInUp, .animate-fadeInDown')
    elements.forEach((element) => {
      const htmlElement = element as HTMLElement
      htmlElement.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
      htmlElement.style.opacity = '0'
      if (htmlElement.classList.contains('animate-fadeInUp')) {
        htmlElement.style.transform = 'translateY(20px)'
      } else if (htmlElement.classList.contains('animate-fadeInDown')) {
        htmlElement.style.transform = 'translateY(-20px)'
      }
    })
    
    handleScroll() // 초기 로드 시 실행
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  return {
    handleScroll
  }
} 