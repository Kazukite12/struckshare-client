
import { BiComment, BiHeart, BiSolidUser, BiSolidUserPlus } from "react-icons/bi"
import "../postCard/post-card.css"
import contoh from "../../assets/contoh.jpg";
import contoh2 from "../../assets/contoh2.jpg";

const PostCard =()=> {
    return(
        <div className="post-card">
            <div className="post-head">
                <div className="post-user">
                    <BiSolidUser/>
                     <h1>Ujang Ranger</h1>
                     <p>11h ago</p>
                </div>
                <div className="post-caption">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda.  adipisicin  adipisicin  adipisicin</p>
                </div>
            </div>
            <div className="post-media">
                <img src={contoh2} />
            </div>
            <div className="post-detail">
                <div className="post-likes">
                    <BiHeart />
                    <p>11k</p>
                </div>
                <div className="post-comment">
                    <BiComment />
                    <p>11k</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard
