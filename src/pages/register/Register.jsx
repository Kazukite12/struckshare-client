

import { useState } from "react"
import "./register.css"
import { Link } from "react-router-dom"

const Register =()=> {

    const [username, setUserName] = useState('')
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section id="register">
            <form className="login-container">
                <h1>Register To Struck Share</h1>
                <input placeholder="username" value={username} onChange={e =>setUserName(e.target.value)} />
                <input placeholder="fullname" value={fullname} onChange={e => setFullName(e.target.value)} />
                <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Register</button>
                <p>or <Link to="/Login">Login</Link></p>
            </form>
        </section>
    )
}

export default Register