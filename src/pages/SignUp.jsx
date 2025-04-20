import { React } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    return (
        <div className="SignUp-page">
            <div>
                <div>
                    <h2>Hello, Welcome</h2>
                    <br />
                    <button className="border-0 rounded py-1 px-4" onClick={() => navigate('/')}>Login</button>
                </div>
            </div>
            <div>
                <h2 className="mb-4">SignUp</h2>

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
                    <button className="border-0 rounded py-1 px-4">Register</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp