import { useEffect, useState } from "react";

export function CreateBlog(){

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

    return <div>
        <input id="title" style={{padding : 10, width : 1400,height : 25, textAlign: 'center'}} type="text" placeholder="Title" onChange={
            function(e){
                const value = e.target.value;
                setTitle(e.target.value);
            }
        }></input> <br></br>
        <input id="description" style={{padding : 10, width : 1400, height : 200, textAlign: 'center'}} type="text" placeholder="Description" onChange={
            function(e){
                const value = e.target.value;
                setDescription(e.target.value);
            }
        }></input> < br></br>

        <div style={{ display : "flex", justifyContent : "center"}}>
        <button style={{padding : 10, width : 250, textAlign : "center"}} onClick={async function(){
            fetch("http://localhost:8080/blog",{
                method : "POST",
                body : JSON.stringify({
                    title: title,
                    description : description
                }),
                headers : {
                    "content-Type" : "application/json"
                }
            })
          
            
                .then(async function(res){
                    const json = await res.json();
                    alert("Blog Added");
                })
        }}>Publish Blog </button></div>

    </div>
}