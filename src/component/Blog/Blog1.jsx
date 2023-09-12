
import PropTypes from 'prop-types';

const Blog1 = ({blog}) => {
     return (
          <div>
               <h1 className="text-4xl">Blogs: {blog.length}</h1>
          </div>
     );
};

Blog1.propTypes = {
     blog: PropTypes.object.isRequired,
}


export default Blog1;