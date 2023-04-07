import React,{memo} from 'react'

const ChildA = ({random,count}) => {
    
    random();
  return (
    <div>ChildA {count} </div>
  )
}

export default memo(ChildA)