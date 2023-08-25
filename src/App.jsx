import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import WelcomePage from './Pages/welcome-page'
import { getLangFromBrowser } from './utils/lang'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={getLangFromBrowser()} />} />
      <Route path='/:lang' element={<WelcomePage />} />
      <Route path='*' element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
