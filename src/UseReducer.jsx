import React,{useReducer} from 'react'

const UseReducer = () => {

    let [state,dispatch]= useReducer((state,action)=>{
        switch(action.type){
            case "increment":
                alert( `hey there i have payload that is  ${action.payload.name}`)
                return  state+1;
            case "decrement":
                alert( `hey there i have payload that is  ${action.payload.name}`)
                return  state-1;
            default:
                throw new Error("not a valid action");
                break;
        }
        
    },0)


  return (
    <div className='bg-black text-white p-2 w-1/2 mx-auto'  >
        <h1 className='text-red-500 text-center text-3xl'>UseReducer Component</h1>
        <button  className="border-2 border-white rounded-full p-2" onClick={()=>{dispatch({type:"increment",payload:{name:"React js"}})}}>increment count</button>
            <div className='p-4'>
                Counter {state}
            </div>
        <button className="border-2 border-white rounded-full p-2" onClick={()=>{dispatch({type:"decrement",payload:{name:"Next js"}})}} >decrement count</button>
    </div>
  )
}

export default UseReducer