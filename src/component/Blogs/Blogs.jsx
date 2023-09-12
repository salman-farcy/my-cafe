import { useEffect, useState } from "react";



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
          <div>
               
          </div>
     );
};

export default Blogs;