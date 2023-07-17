import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { addDoc } from "firebase/firestore";
import useFetch  from './useFetch';
const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('');
const [loading, setLoading] = useState(false)
const navigate = useNavigate()
    const {  blogsCollection, getData } = useFetch();
const handleSubmit = async (e) => {
  e.preventDefault();
setLoading(true)
try {
    await addDoc(blogsCollection, { title: title, body: body, author: author })
    navigate('/')
    getData();
} catch (err) {
   console.log(err);   
}

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
                <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value) }/>
                {!loading && <button>Add blog</button>}
                {loading && <button>Adding blog...</button>}
            </form>
        </div>

     );
}
 
export default Create;