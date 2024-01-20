import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
function add() {
  setCounter(counter + 1);
}
  return (
    <div style={{textAlign:"center", marginRight:"auto",marginLeft:"auto",backgroundColor:"lightblue",width:"300px",marginTop:"300px",padding:"20px",borderRadius:"10px",border:"1px solid black",margin:"100px"}}>
     {counter}<br></br>
     <button onClick={add} style={{backgroundColor:"lightgreen",borderRadius:"10px"}}>Add</button>
    </div>
  );
}

export default App;
