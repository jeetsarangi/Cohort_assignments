import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { CountContext } from './context';
import { countAtom, evenSelector } from './store/atoms/count'
import { useRecoilValue,useSetRecoilState,useRecoilState, RecoilRoot } from 'recoil'

function App() {
  
 
  
  return (
    <>
     
       <Count />
    
    </>
  )
}

function Count(){
  console.log("RE")
  return <div>
    <RecoilRoot>
    <CountRender/>
    <EvenRenderer/>
    <Buttons/>
    </RecoilRoot>
  </div>
}

function CountRender(){
  
  const count = useRecoilValue(countAtom);

  return <div>
    {count}
  </div>
}


function Buttons(){

  const setcount = useSetRecoilState(countAtom)
  
  /* we are using setcount(c=>c+1) to make the buttons more performant 
  like no more rerenders for buttons also only the countRenderee rerenders
  */
  return <div>
    <button onClick={()=>setcount(count=>count+1)}>Increment</button>
    <button onClick={()=>setcount(count=>count-1)}>Decrement</button>
    
    
  </div>
}

function EvenRenderer(){
  const iseven = useRecoilValue(evenSelector);

  return <div>
    {iseven ? 'It is even':null}
  </div>
}
export default App
