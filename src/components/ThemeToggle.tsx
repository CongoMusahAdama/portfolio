import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

const isDarkMode = () =>
  document.documentElement.classList.contains("dark")

export function ThemeToggle({
  className = "relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-c-cream hover:text-on-color",
}: {
  className?: string
}) {
  const { setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(isDarkMode() ? "light" : "dark")
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className}
      aria-label="Toggle light and dark theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
