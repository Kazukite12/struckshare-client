import "./sidebar.css"
import { BiHome, BiSearch, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";


const SideBar =()=> {
    return(
        <section id="sidebar">
            <div className="sidebar-container">
                    <Link to="posts">
                        <p><BiHome /> Home</p>
                    </Link>
                    <p><BiSearch />Explore</p>
                    <Link to="profile">
                        <p><BiUser/>Profile</p>
                    </Link>
                    <Link to="/Login">
                        <p>Post</p>
                    </Link>
            </div>
        </section>
    )
}

export default SideBar