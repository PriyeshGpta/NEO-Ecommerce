import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { AuthContextProvider } from './app/providers/AuthContextProvider'
import { QueryProvider } from './app/providers/QueryProvider'

createRoot(document.getElementById('root')).render(
  <QueryProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </QueryProvider>

)
