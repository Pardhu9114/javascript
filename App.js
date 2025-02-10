
// // import React from "react";
// // import './App.css';
// // import Welcome from "./Welcome";
// // const Welcome = () => <h1 className="message">Hello, World!</h1>;
// // function App() {
// //   return (
// //     <div className="App">
// //       <Welcome/>
// //     </div>
// //   );
// // }
// // const App = () => {
// //   return (
// //     <div style={{ textAlign: "center",color:"blue" }}>
// //       <Welcome name="Pardhu" greeting="Hello"/>
// //       <Welcome name="Venaki" greeting="Hello"/>
// //     </div>
// //   );
// // }
// // export default App;




// // import React from 'react';

// // import Greeting from './Greetings';

// // function App(){
// //   const isLoggedIn = true;
// //   return(
// //     <div className="App">
// //       <Greeting isLoggedIn={isLoggedIn}/>
// //     </div>
// //   )
// // }
// // export default App;

// // import React from "react";

// // const FruitList =()=>{
// //   const fruits = ["apple", "banana", "cherry"];
// //   return (
// //     <>
// //     <h1>Fruit List</h1>
// //     <ol>
// //       {fruits.map((fruit, index) => (
// //         <li key={index}>{fruit}</li>
// //       ))}
// //     </ol>
// //     </>
// //   );
// // }

// // export default FruitList;

import React from 'react';

//counter component

const Counter=()=>{
  const [count,setCount]=React.useState(0);
  //current state count
  //use state() to intialize
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter;