import { useTranslation } from 'react-i18next'
import langs, { DEFAULT_LANG } from '../consts/langs'
import { useEffect, useState } from 'react'
import { useNavigate, useParams  } from 'react-router-dom'

function WelcomePage() {
  const { t, i18n } = useTranslation('welcome')
  const { lang } = useParams()
  const [selectedLang, setSelectedLang] = useState(lang)
  const navigate = useNavigate ()

  const languageChangeHandle = (newLang) => {
    if (newLang !== selectedLang) {
      setSelectedLang(newLang)
    }
  }

  useEffect(() => {
    i18n.changeLanguage(selectedLang)
    navigate(`/${selectedLang}`)
  }, [selectedLang])

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
