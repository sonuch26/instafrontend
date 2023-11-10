import React from 'react'
import "../../styles/header.css"
import SettingsIcon from '@mui/icons-material/Settings';
const Header = ({myInfo}) => {
    return(
        <div style={{display:"flex",justifyContent:"center",gap:"10vh",marginTop:"10vh",width:'100%',border:'1px solid grey'}}>
        <img style={{width:'20vh',height:"20vh",borderRadius:"50%",objectFit:"cover"}} src={`${myInfo.profilePic}`} alt=""/>
        <div>
            <div style={{border:"1px solid grey",display:"flex",gap:"20px"}}>
            <span style={{fontSize:'20px'}}>{myInfo.username}</span>
            <span class="profile_header_buttons">Edit Profile</span>
            <span class="profile_header_buttons">View Archive</span>
            <span><SettingsIcon/></span>
            </div>
            <div style={{display:'flex',justifyContent:'space-around',marginTop:"20px"}}>
                <span>{myInfo.post} posts</span>
                <span>{myInfo.followers} followers</span>
                <span>{myInfo.following} following</span>
            </div>
            <div style={{marginTop:"20px",marginLeft:"20px"}}>
                {myInfo.name}
            </div>
            <p style={{marginLeft:"20px"}}>
                {myInfo.Bio}
            </p>

        </div>
    </div>
    )
}
export default Header