import { docRef } from './config/firebase';
import {deleteDoc, doc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
const BlogDetails = ({ blog, id}) => {
    const navigate = useNavigate()
    const deleteBlog = async (id) => {
        const bd = doc(docRef, 'blogs', id)
        try {
            await deleteDoc(bd)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return ( <div className="blog-list">
        {blog && <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <h3>{blog.id}</h3>
            <div>{blog.body}</div>
            <button onClick={() => deleteBlog(id)}>Delete</button>
        </article>}
    </div> );
}
 
export default BlogDetails;