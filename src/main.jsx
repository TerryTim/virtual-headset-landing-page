import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    offset: 200,
    duration: 600,
    delay: 100,
    once: true
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
