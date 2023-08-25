import './App.css'
import { useTranslation } from 'react-i18next'
import langs from './consts/langs'

function App() {
  const { t, i18n } = useTranslation('welcome')

  return (
    <>
      <header className='flex justify-center w-full gap-x-2'>
        {Object.keys(langs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'
            }}
            type='submit'
            onClick={() => i18n.changeLanguage(lng)}
          >
            {langs[lng].nativeName}
          </button>
        ))}
      </header>
      <div className='card'>
        <p>{t('title')}</p>
      </div>
    </>
  )
}

export default App
