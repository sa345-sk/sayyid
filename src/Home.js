//import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs');
    return ( 
    <div className="home">
      { error && <div>{ error }</div> }
      { loading && <div>LOADING.....</div> }
      {blogs && <BlogList blogs={blogs} title='All Blogs!'/>}
    </div> 
    );
}
 
export default Home;