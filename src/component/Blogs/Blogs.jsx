import { useEffect, useState } from "react";
import Blog1 from "../Blog/Blog1";




const Blogs = () => {

     // state creat...
     const [blogs, setBlogs] = useState([])

     // data load 
     useEffect(() => {
          fetch('bloge.json')
          .then(res => res.json())
          .then(data => setBlogs(data))
     }, [])

     return (
          <div className="md:w-2/3">
               <h1 className="text-4xl py-6">Blogs: {blogs.length}</h1>
               {
                   blogs.map(blog => <Blog1 
                         key={blog.id} 
                         blog={blog}
                    ></Blog1>) 
               }
          </div>
     );
};

export default Blogs;