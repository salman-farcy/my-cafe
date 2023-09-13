import { useEffect, useState } from "react";
import Blog1 from "../Blog/Blog1";
import PropTypes from 'prop-types';



const Blogs = ({handleAddToBookmark, handelReadingTimeCount}) => {

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
               <h1 className="text-4xl py-5">Blogs: {blogs.length}</h1>
               {
                   blogs.map(blog => <Blog1 
                         key={blog.id} 
                         blog={blog}
                         handleAddToBookmark={handleAddToBookmark}
                         handelReadingTimeCount={handelReadingTimeCount}
                    ></Blog1>) 
               }
          </div>
     );
};


Blogs.propTypes = {
     handleAddToBookmark: PropTypes.func.isRequired,
     handelReadingTimeCount: PropTypes.func.isRequired
}


export default Blogs;