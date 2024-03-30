export function Card(props){
    
    const list = props.list;
    
    return <div>
        {
            list.map((e)=>{
                return (<div>
                    <h2>{e.name}</h2>
                    <p>{e.description}</p>
                    <ul>
                        {e.interests.map((interest)=>{
                            return <li>{interest}</li>
                        })}
                    </ul>
                    <a href={e.linkedin}>LinkedIn</a>
                    <a href={e.twitter}>Twitter</a>
                    <button onClick={function(){
                    fetch("http://localhost:3000/delete",{
                        method:"Put",
                        body: JSON.stringify({
                            id: e._id
                        }),
                        headers: {
                            "Content-type":"application/json"
                        }
                    })
                    .then(async function(res){
                        const json = await res.json();
                        alert(json.msg);
                    })
                }}>Delete Card</button>
                </div>)
            })
        }
    </div>
}