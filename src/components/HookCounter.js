import React,{useState} from 'react'

function HookCounter () {

  const [count,setCount] = useState(0)

  return (
    <div><button onClick={() =>setCount(count + 1)}>count {count}</button></div>
  )
}

export default HookCounter;

//rules of hook 
//only call hooks at the top level
// dont call inside loops , condition or nested functions
// only call hooks from React Functions
//call them from within React Functional component and not just any regular Js Function 