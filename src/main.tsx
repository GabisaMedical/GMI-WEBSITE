import './styles/main.less'
import './i18n.ts'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
