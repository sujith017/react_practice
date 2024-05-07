import { useState } from "react";
import TodoPage from './TodoPage.jsx'
function App(){
  const [a,setA] = useState(0);
  const [b,setB] = useState(0);
  const [c,setC] = useState(a+b)
  const calc = () =>
    {
      setC(a+b);
      console.log(a+b);
    }
  function handleAchange(event)
  {
    setA(Number(event.target.value));
  }
  function handleAchange2(e)
  {
    setB(Number(e.target.value));
  }
  return (
    <div>
      <input value = {a} name = "Enter A" 
    onChange={handleAchange}/>  
    <div>
    <input value= {b} name = "Enter B" 
    onChange = {handleAchange2}/>
    </div>
    <div>
    <button onClick={calc}> Calc</button>
    <h1>{c}</h1>
    <TodoPage/>
    </div>
    </div>
    
  )
}

export default App