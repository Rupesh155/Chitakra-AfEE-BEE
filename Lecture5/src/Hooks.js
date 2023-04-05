import React,{useState} from 'react'
import { useEffect } from 'react';

const Hooks = () => {
    const[count,setcount]=useState(0);
    const[data,setdata]=useState('')
    useEffect(()=>{
        console.log('hello '+data)
    },[data])
  return (
    <div>
    <p>{count}</p>
    <button onClick={()=>setcount(count+1)}>click</button>
    <p>places</p>
    <button onClick={()=>{setdata('delhi')}}>delhi</button>
    <button onClick={()=>{setdata('shimla')}}>shimla</button>
    <button onClick={()=>{setdata('solan')}}>solan</button>
    <p>{data}</p>
    </div>
  )
}

export default Hooks