import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './ManagerDashboard.jsx'
import Profile from './ManagerProfile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Profile />
  </StrictMode>,
)
