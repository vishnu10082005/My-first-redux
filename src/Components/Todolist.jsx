import React from 'react'
import { useSelector } from 'react-redux'
import Store from './Redux/Redux';

const Todolist = () => {
   let Data= useSelector((Store)=>{
return Store.todo
    })
  return (
    <div>
     { Data.map((e,i)=>{
        return <li key={i}>{e}</li>
     })}
    </div>
  )
}

export default Todolist
