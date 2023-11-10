import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from './Header'
import {myInfo} from '../../data/myinfo';
import MyPost from './Mypost';
const Profile = () => {
    return(
        <div style={{display:'flex',gap:'15vw'}}>
            <Sidebar/>
            <div>
              <Header myInfo = {myInfo}/>
              <MyPost post ={myInfo.posts}/>
            </div>
            
            
        </div>
    )
}
export default Profile