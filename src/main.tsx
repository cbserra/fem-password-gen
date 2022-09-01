import '@/styles/tailwind.css'

import PasswordGeneratorApp from '@/app'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const element = document.getElementById('__app') as HTMLDivElement
const root = createRoot(element)

root.render(
  <StrictMode>
    <PasswordGeneratorApp />
  </StrictMode>
)
