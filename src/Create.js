import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    // State for the title input
    const [title, setTitle] = useState('');
    const [body, setBody] = useState(' ');
    const [author,setAuthor] = useState('Manoj')
    const [isPending,setIsPending] = useState(false)
    const history = useHistory();


    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title , body ,author};
        setIsPending(true);


        fetch('http://localhost:8000/blogs' , {
            method: 'POST',
            headers: { "Content-Type" : "applicaton/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false)
            history.push('/')

        })
    }
    // Return JSX defining the structure of the component
    return ( 
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                {/* Input field for Blog title */}
                <label>Blog title:</label>
                <input 
                    type="text"
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* Dropdown for selecting Blog Author */}
                <label>Blog Author:</label>
                <select
                    author = { author }
                    onChange ={(e)=>setAuthor(e.target.value)}
                    >
                    <option value="Manoj">Manoj</option>
                    <option value="Raju">Raju</option>
                </select>
                {/* Textarea for Blog Body */}
                <label>Blog Body:</label>
                <textarea 
                    required
                    value = {body}
                    onChange ={ (e)=>setBody(e.target.value)}
                    >
                </textarea>
                {/* Button to submit the form */}
                {!isPending&&<button>Add Blog</button>}
                {isPending&&<button disabled>Adding Blog .....</button>}
                <p>{ body }</p>
                <p>{ title }</p>
            </form>
        </div>   
    );
}
 
export default Create;
