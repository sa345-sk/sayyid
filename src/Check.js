import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogDetails from "./BlogDetails";
import { docRef } from './config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Check = () => {
    const [blog, setBlog] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const co = doc(docRef, 'blogs', id)

    useEffect(() => {
            const getSingle = async () => {
                try {
                    const doc = await getDoc(co)
                    setBlog(doc.data(), doc.id)
                    setError(false)
                    setLoading(false)
                } catch (error) {
                    setError(`ERROR HAS OCCURED ${error.message}`);
                    setLoading(false)
                    return error;
                }
            }
           getSingle()
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