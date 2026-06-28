
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"

const isDarkMode = () =>
  document.documentElement.classList.contains("dark")

export function ThemeToggle() {
  const { setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(isDarkMode() ? "light" : "dark")
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-10 w-10 shrink-0 rounded-full text-foreground hover:bg-muted/60"
      aria-label="Toggle light and dark theme"
    >
      <Sun className="h-[1.15rem] w-[1.15rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.15rem] w-[1.15rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
