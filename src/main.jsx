import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EVAAP from './EVAAP'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <EVAAP />
  </StrictMode>,
)
