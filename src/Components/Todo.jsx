import { useState } from 'react'
import React from 'react'
import Store from './Redux/Redux'

const Todo = () => {
    const[state,setState]=useState('')
    const Senddatatostote=()=>{
        Store.dispatch({
           type:"todo",
           payload:state
         
        })
    }
  return (
    <div>
      <h1>MY TO DO</h1>
      <input type="text"  placeholder='Enter Some Text' onChange={(e)=>{setState(e.target.value)}}/>
      <button onClick={Senddatatostote}>Submit</button>
    </div>
  )
}

export default Todo
