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
        return <ul><li key={i}>{e}</li></ul>
     })}
    </div>
  )
}

export default Todolist
