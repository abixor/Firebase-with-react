import './App.css'
import SignUp from './pages/SignUp'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'

function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
