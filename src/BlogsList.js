import { Link } from "react-router-dom/cjs/react-router-dom.min";
const BlogLists = (props) => {
    const blogs = props.blog
    const title = props.title
    
    return (
       <div className="blog-lists">
        <h2>{ title }</h2>
         {blogs.map((blog) =>(
            <div className="blog-preview" key={blog.id} >
                <Link to ={ `/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </Link>
                
                
            </div>
        ))}
       </div> 
    );
}
 
export default BlogLists;