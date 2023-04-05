import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [data,setData]=useState({
        email:'',
        passWord:""
    })

    const fun1=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        setData({...data,[name]:value})
        console.log(data,"data")

    }

    const handleChange=(e)=>{
        e.preventDefault()
        console.log('hellllllooooooooooooooooooooooooooo')
    
        fetch('http://localhost:3035/login',{
            method:"POST",
            headers:{
              'Content-type':'application/json'},
              body:JSON.stringify(data)

        }).then((res)=>{
            return res.json()
            // console.log('chal gya login page',res.json())

        }).then((resData)=>{
            console.log(resData,"resData")
            localStorage.setItem('myInfo',JSON.stringify(resData.data))
            console.log('ho rha h y kam ')
            navigate('/home')
        })
        .catch((err)=>{
            console.log('err',err)
        })

    }
  

    
  return (
    <div>
        <form>
            <input type='text'  onChange={fun1} name='email' value={data.email} placeholder='enter your email'/>
            <input type="text" onChange={fun1} name='passWord' value={data.passWord} placeholder='Enter your password'/>
            <button  onClick={handleChange}> Submit</button>
            <br/>

            <NavLink to='/'>Sign page</NavLink>
        </form>
    </div>
  )
}

export default Login