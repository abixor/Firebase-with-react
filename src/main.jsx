import { createRoot } from 'react-dom/client'
import { FirebaseProvider } from './context/firebase.jsx'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </BrowserRouter>
)
