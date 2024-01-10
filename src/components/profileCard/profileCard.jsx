
import "./profileCard.css"
import contoh from "../../assets/contoh.jpg"
import { MainStore } from "../../store/store"
import { useEffect, useState } from "react"

const ProfileCard =()=> {

    

    return (
        <div className="profile-card">
            <div className="banner">

            </div>
            <div className="profile-info">
                <div className="detail">
                    <div className="profile-image">
                        <img src={contoh} />
                
                    </div>
                    <div className="profile-detail">
                        <h1 className="username">Ujang Ranger</h1>
                        <p>Tukang bubur main kripto</p>
                        <div className="follow-info">
                            <p>100 Following</p>
                            <p>100 Follower</p>
                        </div>
                    </div>  
                </div>
                <div className="other">
                    <button>Edit Info</button>
                </div>
            </div>

        </div>
    )
}

export default ProfileCard