import React from "react";

// function Greet()
// {
//    return  <h1>Hello chota don are you sleeping</h1>
   
// }
const Greet = (props) => {
    console.log(props)
    return <h1>Hello {props.name} </h1>
}
    
 
export default Greet;