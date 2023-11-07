import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from './Header'
import {myInfo} from '../../data/myinfo';
const Profile = () => {
    return(
        <div style={{display:'flex',gap:'15vw'}}>
            <Sidebar/>
            <Header myInfo = {myInfo}/>
            
        </div>
    )
}
export default Profile