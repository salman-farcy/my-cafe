
import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
     const {title} = bookmark
     return (
          <div className=''>
               <div className="bg-white p-3 rounded-md mt-3">
                    <h3 className='text-lg '>{title}</h3>
               </div>
          </div>
     );
};



// prot types add...
Bookmark.propTypes ={
     bookmark: PropTypes.object.isRequired
}

export default Bookmark;