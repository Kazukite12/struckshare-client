import "./login.css"
import { Link, Navigate} from "react-router-dom"
import { useState } from "react"
import { MainStore } from "../../store/store"

const Login =()=> {
    const [username, setUserName]= useState("")
    const [password, setPassword]= useState("")
    


    const auth = MainStore((state)=> state.auth)

    if (auth == true) {
        return <Navigate to="/" />
    } 


    


    const handleSubmit =async(e)=> {
        e.preventDefault() 
        const response = await MainStore.getState().Login(username,password);

        await MainStore.getState().SetCookies(response);
        console.log(response);  

    }
    return (
        <section id="login">
            <form className="login-container" onSubmit={handleSubmit}>
                <h1>Login To Struck Share</h1>
                <input placeholder="username" value={username} onChange={e=> setUserName(e.target.value)} />
                <input placeholder="password" type="password" value={password} onChange={e=> setPassword(e.target.value)} />

                <button type="submit">Login</button>

                <p>or <span><Link to="/Register">Register</Link></span></p>
            </form>
        </section>
    )
}

export default Login