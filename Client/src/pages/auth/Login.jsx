import React, { useEffect, useState } from 'react'
import AuthAPI from '../../API/authApi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';




function Login() {
const navigate=useNavigate()
const {checkAuth} = useAuth();
  const [data,setData]=useState({
    email:"",
    password:""
  })

  const handleData =(e)=>{
const {name,value}=e.target;
    setData({...data,[name]:value})

  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      
      const res= await AuthAPI.post("/login",data);
      await checkAuth();
      if(res){
      
        navigate("/common")
      }
      


    } catch {
      alert(`Please check your Password or Email !`)
    }
  }

  const handleGoogleLogin=async()=>{
    try{
      const res =await AuthAPI.get("/google-login");
window.location.href=res.data.url;
    }catch(error){
      
    }
  }

useEffect(()=>{
document.title="Login"
},[])

  return (
    <div className='container col-12 col-sm-10 p-5 col-md-8  col-xl-4 mt-5'>
    <form   onSubmit={handleSubmit} className='row rounded p-4 bg-white rounded text-start  ' style={{  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.35)"
}}>
        <h2 className='text-center mt-3 mb-4'>Login</h2>
        <div className='mb-3'
        >
            <label className='form-label  mb-2 h4 '>Email</label>
            <input name="email" value={data.email} onChange={handleData} type="email" className='form-control px-4 py-3 rounded' placeholder='example@gmail.com'/>
        </div>
         <div className='mb-3'
        >
            <label className='form-label  mb-2  h4'>Password</label>
            <input name="password" value={data.password} onChange={handleData} type="password" placeholder='Enter Password' className='form-control px-4 py-3 rounded'/>
        </div>
      <div className='d-flex justify-content-center  align-items-center'><button type='submit'  className='btn btn-primary mt-2 rounded-1 mb-4 w-100 px-4 py-3 rounded px-4'>Login</button></div>
    <hr />
    <div onClick={handleGoogleLogin} className='d-flex justify-content-center align-items-center '>  <div className='d-flex border p-3 align-items-center cursor-pointer  rounded'><svg
                // onClick={handleGoogleLogin}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                style={styles.icon}
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg> <h5 className='text-center mt-1 cursor-pointer'>continue with google</h5></div></div>

    </form>
      
    </div>
  )
}

const styles={
   icon: {
    width: "25px",
    height: "25px",

    borderRadius: "5px",
    marginRight:"20px",
    cursor: "pointer",
  
  },
}

export default Login
