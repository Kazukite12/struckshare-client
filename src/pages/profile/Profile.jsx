
import { BiArrowBack, BiArrowToLeft } from "react-icons/bi"
import "./Profile.css"
import ProfileCard from "../../components/profileCard/profileCard"
import ProfileNav from "../../components/profile-nav/ProfileNav"
import PostCard from "../../components/postCard/post-card"

const Profile =()=> {
    return (
        <section id="profile">
            <div className="profile-header">
                <BiArrowBack/>
                <div className="user-info">
                    <h1>Ujang Ranger</h1>
                    <p>100 Post</p>
                </div>
            </div>
            <ProfileCard/>
            <ProfileNav/>
            <div>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>

        </section>
    )
}

export default Profile