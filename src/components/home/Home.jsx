import React from 'react'
import Sidebar from '../common/Sidebar'
import Main from './Main'
import Suggestions from './Suggestions'
const Home = () => {
    return(
        <div style={{display:'flex',justifyContent:"space-between"}}>
            <div>
            <Sidebar/>

            </div>
            <div>
            <Main/>

            </div>
            <div>
               <Suggestions/>
            </div>
            

        </div>
    )
}
export default Home 