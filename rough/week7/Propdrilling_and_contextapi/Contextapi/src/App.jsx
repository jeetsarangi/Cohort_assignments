import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context';

function App() {
  const [count,setcount] = useState(0);
 
  //Wrap anyone you want to use the teleported value inside a context provider.
  return (
    <>
     <CountContext.Provider value={{count,setcount}}>
       <Count />
     </CountContext.Provider>
    </>
  )
}

function Count(){
  return <div>
    <CountRender/>
    <Buttons/>
  </div>
}

function CountRender(){
  
  const {count} = useContext((CountContext))
  return <div>
    {count}
  </div>
}


function Buttons(){

  const {count,setcount} = useContext((CountContext))
  return <div>
    <button onClick={()=>setcount(count+1)}>Increment</button>
    <button onClick={()=>setcount(count-1)}>Decrement</button>
  </div>
}
export default App
