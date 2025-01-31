import { ref, onMounted, onUnmounted } from 'vue'

export function useResponsive() {
  const windowWidth = ref(window.innerWidth)
  const windowHeight = ref(window.innerHeight)

  const isMobile = ref(windowWidth.value < 640)
  const isTablet = ref(windowWidth.value >= 640 && windowWidth.value < 1024)
  const isDesktop = ref(windowWidth.value >= 1024)

  const handleResize = () => {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight

    isMobile.value = windowWidth.value < 640
    isTablet.value = windowWidth.value >= 640 && windowWidth.value < 1024
    isDesktop.value = windowWidth.value >= 1024

    // 모바일 브라우저의 100vh 문제 해결
    const vh = windowHeight.value * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize() // 초기값 설정
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    windowWidth,
    windowHeight,
    isMobile,
    isTablet,
    isDesktop,
    handleResize
  }
} 