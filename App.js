// import { useState } from "react";

// import ChildA from "./childA";
// import ChildB from "./childB";

// const Parent = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(c => c + 1);
//     };

//     const decrement = () => {
//         setCount(c => c - 1);
//     };

//     return (
//         <div>
//             <ChildA />
//             <ChildB count={count} increment={increment} decrement={decrement} />
//         </div>
//     );
// };

// export default Parent;

// function App() {
//     const data = "Hello I Am Pardhu";
//     return (
//       <div>
//         <User1 data={data} />
//         <User2 data={data} />
//         <User3 data={data} />
//         <User4 data={data} />
//       </div>
//     );
//   }
  
//   function User1({ data }) {
//     return <h2>User 1: {data}</h2>;
//   }
  
//   function User2({ data }) {
//     return <h2>User 2: {data}</h2>;
//   }
  
//   function User3({ data }) {
//     return <h2>User 3: {data}</h2>;
//   }
  
//   function User4({ data }) {
//     return <h2>User 4: {data}</h2>;
//   }
  
//   export default App;

// import React,{createContext, useContext}from 'react';
// const DataContext = createContext();

// function App(){
//   const data='Hello I am Pardhu My email is : vsaipardhu@gmail.com'
//   return(
//     <DataContext.Provider value={data}>
//         <User1></User1>
//     </DataContext.Provider>
//   )
// }
// // user1 compomnent
// function User1({data}){
//   return<User2 />
// }
// function User2({data}){
//   return<User3/>
// }
// function User3({data}){
//   return<User4 />
// }
// function User4(){
//   const data=useContext(DataContext)
//   return<div>{data}</div>
// }
// export default App;

// import React from "react";

// function App() {
//   const data = {
//     name: "Pardhu",
//     email: "vsaipardhu@gmail.com"
//   };

//   return <User1 data={data} />;
// }

// function User1({ data}) {
//   return <User2 data={data} />;
// }

// function User2({ data }) {
//   return <User3 data={data} />;
// }

// function User3({ data }) {
//   return <Profile data={data} />;
// }

// function Profile({ data }) {
//   return (
//     <div>
      
//       <h2>Name: {data.name}</h2>
//       <h2>Email: {data.email}</h2>
//     </div>
//   );
// }

// export default App;

import React, { createContext, useContext } from "react";


const UserContext = createContext();

function App() {
  const user = {
    name: "Pardhu ",
    email: "vsaipardhu@gmail.com"
  };

  return (
    <UserContext.Provider value={user}>
      <User1 />
    </UserContext.Provider>
  );
}

function User1() {
  return <User2 />;
}

function User2() {
  return <User3 />;
}

function User3() {
  return <Profile />;
}


function Profile() {
  const user = useContext(UserContext);
  
  return (
    <div>
     <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  );
}

export default App;

