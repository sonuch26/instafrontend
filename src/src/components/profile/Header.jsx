import React from 'react'
//import SettingsIcon from '@mui/icons-material/Settings';
const Header = ({myInfo}) => {
    return(
        <div style={{display:"flex",width:'100%',border:'1px solid grey'}}>
        <img style={{width:'20vh',height:"20vh",borderRadius:"50%",objectFit:"cover"}} src={`${myInfo.profilePic}`} alt=""/>
        <div style={{display:"flex",gap:"20px"}}>
            <span>{myInfo.username}</span>
            <span>Edit Profile</span>
            <span>View Archive</span>
            {/*<span>SettingApplicationsIcon</span>*/}
        </div>
        </div>
    )
}
export default Header