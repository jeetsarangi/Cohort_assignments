import { useState } from "react"

export function CreateCard(){

    const [name,setname] = useState("");
    const [desc,setdesc] = useState("");
    const [interest,setinterest] = useState(["something1","something2"]);
    const [linkedin,setld] = useState("");
    const [twitter, settw] = useState("");
    
    return <div>
     
        <input onChange={function(e){
            setname(e.target.value);
        }} placeholder="name"></input>
        <input onChange={function(e){
            setdesc(e.target.value);
        }} placeholder="Description"></input>
        <button onClick={()=>{
            setinterest([...interest,""]);
        }}>Add another Interest</button>
        <input onChange={(function(e){
            const newinterest = [...interest];
            newinterest[newinterest.length-1] = e.target.value;
            setinterest(newinterest)
        })} placeholder="interests"></input>
        <input onChange={function(e){
            setld(e.target.value);
        }} placeholder="Linkedin"></input>
        <input onChange={function(e){
            settw(e.target.value);
        }} placeholder="Twitter"></input>

        <button
        onClick={function(){
            fetch("http://localhost:3000/add",{
                method:"Post",
                body: JSON.stringify({
                    name: name,
                    description: desc,
                    interest:interest,
                    linkedin:linkedin,
                    twitter:twitter
                }),
                headers: {
                    "Content-type":"application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert(json.msg);
            })
        }}>Add a Card</button>
            
            
        


    </div>
}