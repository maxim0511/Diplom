import { useEffect, useState } from 'react'
import { THEME_DARK, THEME_LIGHT, Nullable, Theme } from 'src/shared'

export const useThemeSwitcher = () => {
  const [theme, setTheme] = useState<Nullable<Theme>>(null)
  useEffect(() => {
    setTheme((localStorage.getItem('theme') as Theme) || 'light')
  }, [])
  useEffect(() => {
    const body = document.querySelector('html')
    theme && localStorage.setItem('theme', theme)
    if (theme === THEME_DARK) body?.classList.add('dark')
    else body?.classList.remove('dark')
  }, [theme])
  return {
    theme,
    setDarkTheme: () => setTheme(THEME_DARK),
    setLightTheme: () => setTheme(THEME_LIGHT),
    onToggle: () =>
      setTheme(theme => (theme === THEME_DARK ? THEME_LIGHT : THEME_DARK)),
  }
}
