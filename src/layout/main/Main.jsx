


import { Outlet } from "react-router-dom"
import PostCard from "../../components/postCard/post-card"
import Profile from "../../pages/profile/Profile"
import "./main.css"
import PostForm from "../../components/postForm/postForm"

const Main =()=> {
    return (
        <section id="main">
           
           <Outlet />
        </section>
    )
}

export default Main