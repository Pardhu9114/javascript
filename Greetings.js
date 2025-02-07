function Greetings({isLoggedIn}){
  if(isLoggedIn){
      return <h1>Welcome Back</h1>
  }else{
      return <h1>Please login</h1>
  }
}
export default Greetings;