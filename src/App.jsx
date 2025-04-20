import './App.css'
import { useState } from 'react'
import { useFirebase } from './context/firebase'

function App() {

  const Firebase = useFirebase()

  console.log("Firebase", Firebase)


  const [userDetail, setUserDetail] = useState({
    email: "",
    password: ""
  })

  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: ""
  })


  return (
    <>
      <h1>Welcome to Firebase App</h1>

      <h2>Sign Up Form</h2>
      <div>
        <label>Email</label>
        <input type='email' placeholder='Enter your email' value={userDetail.email} onChange={(e) => setUserDetail({ ...userDetail, email: e.target.value })} />
        <br />
        <label>Password</label>
        <input type='password' placeholder='Enter your password' value={userDetail.password} onChange={(e) => setUserDetail({ ...userDetail, password: e.target.value })} />
        <br />
        <br />
        <button onClick={() => Firebase.signInGoogle()}>SignUp with Google</button>
        <button onClick={() => Firebase.signUpUser(userDetail.email, userDetail.password)}>SignUp Here</button>
      </div>

      <h2>Sign In Form</h2>
      <div>
        <label>Email</label>
        <input type='email' placeholder='Enter your email' value={loginDetail.email} onChange={(e) => setLoginDetail({ ...loginDetail, email: e.target.value })} />
        <br />
        <label>Password</label>
        <input type='password' placeholder='Enter your password' value={loginDetail.password} onChange={(e) => setLoginDetail({ ...loginDetail, password: e.target.value })} />
        <br />
        <button onClick={() => signInUser(loginDetail.email, loginDetail.password)}>SignIn Here</button>
      </div>
    </>
  )
}

export default App
