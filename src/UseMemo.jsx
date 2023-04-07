import React,{useMemo,useState} from 'react'

const UseMemo = () => {
    
        let [state,setState] = useState(0);
        let [num,setNum] = useState(0);
        
        let memoHtml = useMemo(()=>{
            return <div className='bg-black text-white p-2'>
                        <h2>hey there i am Num Div </h2>
                        <p className='text-red-500 text-lg'>i will  rerender only when num state is updated </p>

                        {alert("rendering Num div for useMemo")}
                        <p> i display value of Num which is {num}</p>
                        <button className="border-2 border-cyan-500 p-2 m-2" onClick={()=>{setNum(num+1)}}>update value of Num state </button>
                    </div>
        },[num])

        let complexCalculation = useMemo(()=>{
            let i=0;
            while(i<10000000){
                i++;
            }
            alert("complex calculation completed for use Memo")

            return i;
        },[])
  
    return (
    <div className='mx-auto w-1/2 p-2 my-4 border-2 border-red-500'>
        <h1 className='text-red-500 text-center text-3xl'>Use Memo Component</h1>
        {memoHtml}
        
        <div className='bg-green-500 text-white p-2 my-2'>
            <p>i am a complex calculation that should not be calculated on every rerender with value =  {complexCalculation}</p>
        </div>
        
        <p>i am the state update me to understand that both of the above are not recalculated(rerendered) with the component {state}</p>
        <button className='border-2 border-red-400 p-2' onClick={()=>{setState(state+1)}}>update state</button>
    </div>
  )
}

export default UseMemo