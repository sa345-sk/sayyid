import { useState, useEffect } from "react";
import { docRef } from "./config/firebase";
import { getDocs, collection } from 'firebase/firestore';
const useFetch = () => {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);
    let blogsCollection = collection(docRef, 'blogs'); 
    const abortCont = new AbortController();
  
    async function getData() {
        try {
            const data = await getDocs(blogsCollection, { signal: abortCont.signal });
            const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setData(filteredData)
            setLoading(false)
            setError(null);
        } catch (err) {
            setError(`Error Has Occured: ${err.message}`);
            setLoading(false);
            setData(false)
            return err;
        }
    }
    useEffect(() => {
            getData();
     return () => abortCont.abort();

    }, []);

    return {data, loading, error, blogsCollection, getData}
}
 
export default useFetch;
