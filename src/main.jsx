import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { AuthContextProvider } from './app/providers/AuthContextProvider'
import { QueryProvider } from './app/providers/QueryProvider'
import { CartContextProvider } from './app/providers/CartContextProvider'

createRoot(document.getElementById('root')).render(
  <QueryProvider>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </QueryProvider >

)
