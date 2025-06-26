import React,{useState} from 'react'

function HookCounterThree() {
    const [items, setItems] = useState([])

      const addItem=() =>{
        setItems([...items,{
            id: items.length,
            value:Math.floor(Math.random()*10)+1
        }])

    }
  return (
  
    <div>
     <button onClick={addItem}>Add a number </button>
      <ul>
        { items.map(item=>(<li key={item.id}>{item.value}{item.value}</li>

            ))
          }
        </ul>
        </div>
  )
}

export default HookCounterThree

// useState hook lets you add state to functional components
// in classes the state is always an object 
// with the usestate hook the state doesnt have to be an objectthe use state hook returns an array with 2 elements 

// the first element is the current value of the the state 
// and second element is a state seeter function or method
// new state value depends on the previous state value 
// you can pass a function to the setter function
//use effect is called after every single render
// when dealing with the objects or array always make sure to spread your state variable and thren call the setter function
//use state hook lets you add state to functional component 