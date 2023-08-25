import { useTranslation } from 'react-i18next'
import langs, { DEFAULT_LANG } from '../consts/langs'
import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'

function WelcomePage() {
  const { t, i18n } = useTranslation('welcome')
  const [selectedLang, setSelectedLang] = useState(i18n.language || DEFAULT_LANG)
  const navigate = useNavigate ()

  const languageChangeHandle = (newLang) => {
    if (newLang !== selectedLang) {
      setSelectedLang(newLang)
      i18n.changeLanguage(newLang)
      navigate(`/${newLang}`)
    }
  }

  return (
    <>
      <header className='flex justify-center w-full gap-x-2'>
        {Object.keys(langs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.language === lng ? 'bold' : 'normal'
            }}
            type='submit'
            onClick={() => languageChangeHandle(lng)}
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

export default WelcomePage
