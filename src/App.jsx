import React from 'react'
import UseReducer from './UseReducer'
import UseMemo from './UseMemo'
import UseCallBack from './UseCallBack'

const App = () => {
  return (
    <div className='w-100 mx-auto'>
     <UseReducer/>
     <UseMemo/> 
     <UseCallBack/>
     
    </div>
  )
}

export default App