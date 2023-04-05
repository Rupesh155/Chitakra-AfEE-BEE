import React,{useState} from 'react'

const Clock = () => {
    const time1=new Date().toLocaleTimeString()
    const[time,settime]=useState('')
setInterval(()=>{
    const time1=new Date().toLocaleTimeString()
    settime(time1);
},1000)
  return (
    <div>
    <h2>{time}</h2>
    </div>
  )
}

export default Clock;