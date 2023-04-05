import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
const SignUp = () => {
  const navigate=useNavigate()
   const [input,setInput]=useState({
    firstName:"",
    lastName:"",
    email:"",
    passWord:""
   })
//    const [data,setData]=useState([])
   const fun1=(e)=>{
   const {name,value}=e.target
   setInput({...input,[name]:value})
   console.log(input,'rrrrrrrrrrrr')

   }

  //  connect to server
  const handelChange=()=>{
    fetch('http://localhost:3035/register',{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(input)
    }).then(()=>{
      console.log('chal gya')
      navigate('/login')
      
    }).catch((err)=>{
      console.log(err,"err")

    })

  }

  
   
  return (
    <div>
    <input type='text' onChange={fun1} name='firstName' value={input.firstName} placeholder='Enter your name '/>
    <br/>
    <input type='text' onChange={fun1} name='lastName'  value={input.lastName} placeholder='Enter your lastName '/>
    <br/>
    <input type='email' onChange={fun1} name='email'  value={input.email} placeholder='Enter your email '/>

    <br/>
    <input type='password' onChange={fun1} name='passWord' value={input.passWord
    } placeholder='password'/>
    <br/>
    <button onClick={handelChange} >Submit</button>
    <br/>
    <Link to='/login' >login </Link>
      </div>
  )
}

export default SignUp