import {create} from 'zustand'
import Cookies from 'universal-cookie'

const initialState = {
    cookies: new Cookies(),
  };


const store =(set)=> ({

    GetCookies: (key)=> {

        const cookies = initialState.cookies

        const value = cookies.get(key)

        console.log(value)

        return value
    },

    
    SetCookies: (access_token)=> {
        const cookies = initialState.cookies

        cookies.set("token",access_token)
    },

    auth: false,

    Register : async(username, profile,fullname,password,email )=> {
        
        const response = await fetch('http://localhost:8080/user/register', {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            credentials:'include',
            body: JSON.stringify ({
                username,
                password,
            })
        })
    },

    Login : async(username, password)=> {


        const response = await fetch('http://localhost:8080/user/login',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            credentials:'include',
            body: JSON.stringify({
                username,
                password,
            })
        })

        if (response.status==200) {
            set({auth:true})
        } else {
            alert("Password Salah")
        }   
        const test = await response.json()

        const token = test.access_token

        return token
    },

    addPost : async(token,caption) => {

        const headers = { 'Authorization': `Bearer ${token}`,'Content-Type':'application/json'};
 // todo fetch post api

        const response = await fetch ('http://localhost:8080/post', {
            method:'POST',
            headers,
            credentials:'include',
            body: JSON.stringify({
                caption:caption,
            })
        })

        if (response.status == 200) {
            alert("post succsess")
        }


    },

    Validate : async(token) => {

        const headers = { 'Authorization': `Bearer ${token}`,'Content-Type':'application/json'};

        const response = await fetch ('http://localhost:8080/validate', {
            method:'GET',
            headers,
            credentials:'include',
        })

        if (response.status == 200) {
            set({auth:true})
        }

        const userData = await response.json()
        
        console.log(userData)

        return userData
    },

    profileDetail : async()=> {
        
    }

    
})


export const MainStore = create(store)