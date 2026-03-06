import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inicio from './Page/Inicio'
import Registro from './Page/Registro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicio/>
  </StrictMode>,
)
