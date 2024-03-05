
import BlogLists from "./BlogsList";
import useFecth from "./usefecth";
const Home = () => {
    const {data:blogs, isFetching, error} = useFecth('http://localhost:8000/blogs')
        

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            {isFetching && <div>Loading.....</div>}
            { blogs && <BlogLists blog={blogs} title = "All the Blogs" />}
            {/*  Reusable code .using the this 
             we can filter author blog   <BlogLists blog={blogs.filter((blogs)=>blogs.author==='srinivas reddy')} title = "srinivas reddy blogs" /> */}

            
        </div>
     );
}
 
export default Home ;