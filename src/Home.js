
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const { data: blogs, loading, error} = useFetch();
    return ( 
    <div className="home">
      { error && <div>{ error }</div> }
      { loading && <div>LOADING.....</div> }
      {blogs && <BlogList blogs={blogs}/>}
    </div> 
    );
}
 
export default Home;