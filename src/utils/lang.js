export const getLangFromBrowser = () => {
  const lang = navigator.language || navigator.userLanguage

  return lang.split('-')[0]
}