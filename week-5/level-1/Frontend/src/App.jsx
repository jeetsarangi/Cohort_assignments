import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateCard } from '../Components/CreateCard'
import { Card } from '../Components/Card'
function App() {
  

  const [cardlist,setcardlist] = useState([]);

  fetch("http://localhost:3000/cards").then(async function(res){
    const newlist  = await res.json();
   
    setcardlist(newlist.cards);
  })

  const a = [{
    name: "fsdfsd",
    description: "fsdfad",
    interests: ["fsdfd","fsdfsf"] ,
    linkedin: "dsafdsf",
    twitter: "fdsfasf"
  },
  {
    name: "fsdfsd",
    description: "fsdfad",
    interests: ["fsdfd","fsdfsf"] ,
    linkedin: "dsafdsf",
    twitter: "fdsfasf"
  }]
  return (
    <div>
      <CreateCard></CreateCard>
      <Card list={cardlist}></Card>
    </div>
  ) 
   
}

export default App
