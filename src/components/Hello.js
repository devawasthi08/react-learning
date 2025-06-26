import React from "react";

const Hello = () =>{
    // return(
    //      <div>
    //         <h1>
    //             Heloo Deva
    //         </h1>
            
    //      </div>// this is the jsx version of hello component
//)
      return React.createElement('div',null,<h1>Heloo Deva</h1>)
}
export default Hello;
