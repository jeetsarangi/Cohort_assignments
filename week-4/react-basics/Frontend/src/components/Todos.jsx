export function Todos({todos}){
    return <div>
        
        {todos.map((todo)=>{
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={function(){
                    fetch("http://localhost:3000/completed",{
                        method:"Put",
                        body: JSON.stringify({
                            id: todo._id
                        }),
                        headers: {
                            "Content-type":"application/json"
                        }
                    })
                    .then(async function(res){
                        const json = await res.json();
                        alert(json.msg);
                    })
                }}>{todo.completed == true ? "Completed":"Mark as Complete"}</button>
            </div>
        })}
   
    
    </div>
    
}