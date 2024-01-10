
import { BiSolidUser } from "react-icons/bi"
import "./postForm.css"
import 'react-quill/dist/quill.snow.css';
import QuillForm from "../Quill/Quill";



const PostForm =()=> {
    return (
        <div className="post-form">
            <div className="form-head">
                <BiSolidUser/>
                <QuillForm/>
            </div>
            <div className="form-nav">

            </div>
        </div>
    )
}

export default PostForm