import React,{ useState } from "react";
const Counter = () => {
  //count->current value setcount->updated value
    const[count,setcount]=useState(0);//argument mein hmesha initial value dali jati h
    const[count1,setcount1]=useState(0);
    const incre=()=>{
        setcount(count+1);
    }
    const dec=()=>{
      if(count<=0){
        return 0;
      }
      setcount(count-1);
    }
    const[data,setdata]=useState();
    const[data1,setData]=useState();
    const fun1=(e)=>{//e ek object h data fetch krne m kam kr rha h
      setdata(e.target.value)
    }
   const fun2=()=>{
    setData(data)
   }
  return (
    <div>
        <p>{count}</p>
        <input type="text" onChange={fun1} />
        
        <button onClick={fun2}>click</button>
        <p>{data1}</p>
        <p>jo input m add krna h vo show krna h</p>

<button onClick={incre}>click me!!</button>
<button onClick={dec}>dec</button>
{/* <p>{count1}</p> */}
    </div>
  )
}

export default Counter