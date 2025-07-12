import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"; // ✅ Use react-router-dom, not just react-router
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster /> {/* ✅ Needed for toast messages to appear */}
    </BrowserRouter>
  </StrictMode>,
);
