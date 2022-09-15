import type { NextPage } from 'next'
import { useThemeSwitcher, useTranslate } from 'src/shared'

const Home: NextPage = () => {
  const { t, onToggleLanguage } = useTranslate()
  const { theme, onToggle } = useThemeSwitcher()
  return (
    <div className='App'>
        <button onClick={() => onToggleLanguage('ru')}>EN</button>
      <button onClick={() => onToggleLanguage('en')}>RU</button>
      <div className='text-red-500'>{t('Welcome to React')}</div>
      <button onClick={onToggle}>Change theme</button>
    {theme}
    </div>
  )
}

export default Home