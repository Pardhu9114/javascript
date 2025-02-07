
// import React from "react";
// import './App.css';
// import Welcome from "./Welcome";
// const Welcome = () => <h1 className="message">Hello, World!</h1>;
// function App() {
//   return (
//     <div className="App">
//       <Welcome/>
//     </div>
//   );
// }
// const App = () => {
//   return (
//     <div style={{ textAlign: "center",color:"blue" }}>
//       <Welcome name="Pardhu" greeting="Hello"/>
//       <Welcome name="Venaki" greeting="Hello"/>
//     </div>
//   );
// }
// export default App;




import React from 'react';

import Greeting from './Greetings';

function App(){
  const isLoggedIn = true;
  return(
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn}/>
    </div>
  )
}
export default App;