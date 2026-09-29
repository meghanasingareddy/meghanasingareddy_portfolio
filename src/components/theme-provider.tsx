import { createContext, useContext, useEffect, useState } from "react"

export type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const STORAGE_KEY = "portfolio-theme"

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

function readStoredTheme(storageKey: string): Theme | null {
  try {
    const stored = localStorage.getItem(storageKey)
    if (stored === "light" || stored === "dark") return stored
  } catch {
    /* ignore */
  }
  return null
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(theme)
  root.style.colorScheme = theme
}

function readInitialTheme(storageKey: string): Theme {
  if (typeof document !== "undefined") {
    if (document.documentElement.classList.contains("light")) return "light"
    if (document.documentElement.classList.contains("dark")) return "dark"
  }
  return readStoredTheme(storageKey) ?? (typeof window !== "undefined" ? getSystemTheme() : "dark")
}

export function ThemeProvider({
  children,
  storageKey = STORAGE_KEY,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => readInitialTheme(storageKey))
  const [followsSystem, setFollowsSystem] = useState(() => !readStoredTheme(storageKey))

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    if (!followsSystem) return
    const mq = window.matchMedia("(prefers-color-scheme: light)")
    const onChange = () => setThemeState(mq.matches ? "light" : "dark")
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [followsSystem])

  const setTheme = (next: Theme) => {
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      /* ignore */
    }
    setFollowsSystem(false)
    setThemeState(next)
  }

  const value: ThemeProviderState = {
    theme,
    setTheme,
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
