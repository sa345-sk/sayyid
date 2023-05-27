import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const navigate = useNavigate();
    console.log(navigate);
    const { id } = useParams();
    const { data: blog, loading, error } = useFetch('http://localhost:8000/blogs/' + id);
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        });
    }
    return ( <div className="blog-list">
        {loading && <div>Loading</div>}
        {error && <div>{ error }</div>}
        {blog && (
            <article>
                <h1>{blog.title}</h1>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        )}
    </div>  );
}
 
export default BlogDetails;