import { createRoot } from 'react-dom/client'
import { FirebaseProvider } from './context/firebase.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>
)
