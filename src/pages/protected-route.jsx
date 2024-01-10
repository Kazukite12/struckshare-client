import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { MainStore } from "../store/store";


const ProtectedRoute = (props) => {

   //const [auth, setAuth]= useState(false);
   const auth = MainStore((state)=> state.auth)


    if (!auth) {
      return <Navigate to="/login" />;
    } 
      
    return props.children;
  
}

export default ProtectedRoute