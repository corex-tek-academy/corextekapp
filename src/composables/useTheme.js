import { ref, onMounted } from 'vue'

/**
 * useTheme — enforces premium dark mode across Corex Tek-Academy
 */
const isDark = ref(true)

export function useTheme() {
  onMounted(() => {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
    try {
      localStorage.removeItem('corex-theme')
    } catch {
      /* noop */
    }
  })

  const toggleTheme = () => {}

  return { isDark, toggleTheme }
}
