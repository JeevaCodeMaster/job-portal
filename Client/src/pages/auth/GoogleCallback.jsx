import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import AuthAPI from '../../API/authApi';

function GoogleCallback() {


    const navigate = useNavigate();


    const getUser=async()=>{
        const code = new URLSearchParams(window.location.search).get("code");
        
            if(code){
               await AuthAPI.post("/google/callback",{code})
                .then(()=>{
                    navigate("/common");
                    
                })
                .catch((err)=>{
                    alert(err.message)

                })
            }
    }

    useEffect(()=>{
        
        getUser()
    })


  return (
    <div>
      Loading...
    </div>
  )
}

export default GoogleCallback
