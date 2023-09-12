import { useEffect, useState } from "react";
import Blog from "../Blog/blog";



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
          <div className="md:w-2/3 bg-indigo-700">
               <Blog></Blog>
               
          </div>
     );
};

export default Blogs;