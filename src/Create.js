import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('');
const [loading, setLoading] = useState(false)
const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault();

setLoading(true)

  const blog = {title, body, author};
     fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(blog)   
    }).then(() => {
        console.log('added');
        setLoading(false);
        alert("Saved go back to the home page using the link above to see your blog");
        navigate('/');
    })
}

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required  value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>About new blog:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Written by:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Abdulmuhsin">Abdulmuhsin</option>
                    <option value="Na'eem">Na'eem</option>
                    <option value="Aliyu">Aliyu</option>
                    <option value="Brad">Brad</option>
                    <option value="Mashkur">Mashkur</option>
                </select>
                {!loading && <button>Add blog</button>}
                {loading && <button>Adding blog...</button>}
            </form>
        </div>

        
     );
}
 
export default Create;