import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setdescription] = useState("");
    
    return <div>
        <input style={{
            padding: 10,
            margin:10
        }} type = "text" placeholder="title" onChange={function(e){
            setTitle(e.target.value);
        }}></input> <br/>
        <input style={{
            padding: 10,
            margin:10
        }}  type = "text" placeholder="description" onChange={function(e){
            setdescription(e.target.value);
        }}></input> <br />

        <button style={{
            padding: 10,
            margin:10
        }} onClick={function(){
            fetch("http://localhost:3000/todo",{
                method:"Post",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type":"application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert(json.msg);
            })
        }}>Add a todo</button>
    </div>
}