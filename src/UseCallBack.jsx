import React,{useCallback,useState} from 'react'
import ChildA from './ChildA'

const UseCallBack = () => {
    
    let [state,setState] = useState(0);
    let [count,setCount] = useState(0);



    let random = useCallback(()=>{
         alert("childA of callBack component")
    },[count])
   

  return (
    <div className='mx-auto w-1/2 p-2 my-4 border-2 border-red-500'> 
        <h1 className='text-red-500 text-center text-3xl'>Use CallBack Component</h1>
        <ChildA random={random} count={count}/>
        <h1>value of state is {state}</h1>
        <button className='border-2 border-red-400 p-2' onClick={()=>{setState(state+1)}}>update state</button>
        <button className='border-2 border-red-400 p-2' onClick={()=>{setCount(count+1)}}>update count</button>
    </div>
  )
}

export default UseCallBack