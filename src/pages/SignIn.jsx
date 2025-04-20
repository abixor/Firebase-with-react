import { React } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()
    return (
        <div className="SignUp-page">
            <div>
                <div>
                    <h2>Hello, Welcome</h2>
                    <br />
                    <button className="border-0 rounded py-1 px-4" onClick={() => navigate('/sign-up')}>Register</button>
                </div>
            </div>
            <div>
                <h2 className="mb-4">SignIn</h2>

                <div>
                    <input
                        type="email"
                        className="border-0 rounded py-1 px-3 mb-3"
                        placeholder="Username"
                    />
                    <br />
                    <input
                        type="password"
                        className="border-0 rounded py-1 px-3 mb-3"
                        placeholder="Password"
                    />
                    <br />
                    <button className="mb-2 py-1 border-0 rounded-circle">
                        <img src="/images/google.png" className="img-fluid" width="20"
                        />
                    </button>
                    <br />
                    <button className="border-0 rounded py-1 px-4">Login</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn