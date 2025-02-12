const childB=({count, increment})=>{
    console.log("ChildB rendered")
    return(
        <div>
            <h1>Count:{count}</h1>

            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default childB;