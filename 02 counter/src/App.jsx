import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

let  [counter,setCounter] = useState(15)
  // behind the scene counter varibale hai and setCounter function hai 
  // 
//let counter  = 15

const addValue = () => {
console.log('clciked',counter);
  
  if(counter<20){
  //counter = counter +1
  setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  
  
  // prevconter ,counter jo usestate main last update hai uski prevcounnter
    /*setCounter(prevCounter => prevCounter + 1)
     setCounter(prevCounter => prevCounter + 1 )
     setCounter(prevCounter => prevCounter + 1)
     setCounter(prevCounter => prevCounter + 1)
    */
  }
  else{
    console.log("Maximum is reached")
  }
 
}

const removeValue = () => {
  if(counter>0){
  setCounter(counter -1);
  }
  else{
    console.log("Minimum is reached")
  }
}
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br/>
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App;



//  useState hooks ui propagate kerta hai means change kerta hai and change ka mtlb 
//  change ka mtlb dom ko updtae kerta hai  