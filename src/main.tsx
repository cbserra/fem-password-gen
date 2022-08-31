import '@/styles/tailwind.css'

import PasswordGeneratorApp from '@/app'

// import '@/index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const element = document.getElementById('__app') as HTMLDivElement

const root = createRoot(element)

root.render(
  <BrowserRouter>
    <PasswordGeneratorApp />
  </BrowserRouter>
)
