import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

// Toggles the `.dark` class on <html> and remembers the choice in localStorage.
// The initial class is applied before paint by the inline script in app/layout.tsx.
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    document.documentElement.classList.toggle("dark", next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {}
    setIsDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="p-1.5 rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors"
    >
      {isDark === null ? (
        <span className="block w-4 h-4" />
      ) : isDark ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  )
}
