import { useState, useEffect } from "react";

const useFetch = (url) => {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            /*fetch(url)
                .then(res => {
                    if (!res.ok) throw Error('Faild to reach your data')
                    return res.json()
                }).then(data => {
                    setData(data);
                    setLoading(false);
                })
                .catch(err => {
                    setLoading(false);
                    setError(err.message);
                })*/
//Instead of the above Asynchronous javascript
            async function getData() {
                try {
                    let r = await fetch(url, {signal: abortCont.signal });
                    if (!r.ok) throw Error('Faild to reach your data')
                    let data = await r.json();
                    setData(data);
                    setLoading(false); 
                    setError(null);
                } catch (err){
                    if (err.name === 'AbortError') {
                        console.log('Aborted')
                    } else {
                        setLoading(false);
                        setError(err.message);
                    }
                }
            }
            getData();
        }, 1000);

     return () => abortCont.abort();

    }, [url]);

    return {data, loading, error}
}
 
export default useFetch;