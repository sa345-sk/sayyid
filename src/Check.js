import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogDetails from "./BlogDetails";
import { docRef } from './config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Check = () => {
    //const navigate = useNavigate();
    const [blog, setBlog] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    //const { loading, error } = useFetch();
    //console.log(blog)
    const co = doc(docRef, 'blogs', id)
    //console.log(co)
    useEffect(() => {
        getDoc(co)
            .then((doc) => {
                setBlog(doc.data(), doc.id)
                setError(false)
                setLoading(false)
            }).catch((err) => {
                console.log(err)
                //setError(err)
               /* if (err) {
                    alert('failed')
                    //setError('Request failed!');
                }**/
                return err;
            })
    }, [co])

    return (
        <div className="check">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && <BlogDetails blog={blog} id={id}/>}
        </div>
    );
}
 
export default Check;