import React from 'react'
import { useAuth } from '../auth/AuthContext'



function UserDashboard() {
    const {user,islogged}=useAuth()
    console.log(user)
    
  return (
   <div> {islogged && <div className="w-100 h-100">
   
    </div>}</div>
  )
}

export default UserDashboard
