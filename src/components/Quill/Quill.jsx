import ReactQuill from "react-quill"
import "./Quill.css"
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { MainStore } from "../../store/store";

const modules = {
    toolbar: false,
}

const formats = [

]


const QuillForm = () => {

    const [value, setValue]= useState(null)

    const addPost = MainStore((store)=>store.addPost)

    const SubmitPost  =(e)=>{
        e.preventDefault()
        const token = MainStore.getState().GetCookies("token")
        addPost(token, value)
    }


  return (
    <div className="input-container">
        <form className="form-container" onSubmit={SubmitPost}>
            <ReactQuill toolbar={false} modules={modules} placeholder="What Is Happening ?" formats={formats} value={value} onChange={setValue} className="text-input" theme="snow"/>
            <button type="submit">Post</button>
        </form>
         <div dangerouslySetInnerHTML={{__html:value}} />
    </div>
  )
}

export default QuillForm