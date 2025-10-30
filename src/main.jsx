import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ForgotPassword from './forgotPassword.jsx'

import AdminDashboard from "./AdminDashboard.jsx";
import AdminProfile from "./AdminProfile.jsx";
import ManagerDashboard from "./ManagerDashboard.jsx";
import ManagerProfile from "./ManagerProfile.jsx";
import Signup from "./signup.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ForgotPassword />
    </BrowserRouter>
  </StrictMode>,
)
