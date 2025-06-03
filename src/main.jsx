import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/header/header.css'
import './components/sidebar/sidebar.css'
import './components/diagnosisHistory/diagnosisHistory.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
