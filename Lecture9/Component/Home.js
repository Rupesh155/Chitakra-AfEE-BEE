import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
const user=localStorage.getItem('myInfo')
console.log(user,'rrrrrrrr')
if(user){
  const userObject =JSON.parse(user)
  return(<div>
     <h2>hii,{userObject.userData.firstName}</h2>
     <button onClick={()=>{

      localStorage.removeItem('myInfo')  
      navigate('/login')
       } }>clear</button>

     </div>)
  
}
  
  return (
    // <div>home file hi hai!!!</div>
    <div>
      <button onClick={()=>{navigate('/')}}>SignUp</button>
      <button onClick={()=>{navigate('/login')}}>Login</button>

    </div>
  )
}

export default Home