
import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/bs';

const Blog1 = ({blog, handleAddToBookmark, handelReadingTimeCount}) => {
     const {title, cover, authorim, readingtime, author, postdate, hashtags} = blog
     return (
          <div className='border-b-2 mb-6'>
               <img className='rounded-md w-full' src={cover} alt={`Cover picture of the title ${title}`} />
               <div className="flex justify-between p-5 items-center">
                    <div className="flex gap-3 justify-between items-center">
                         <img className='w-12 rounded-full' src={authorim} alt="" />
                         <div className="">
                              <h4>{author}</h4>
                              <p>{postdate}</p>
                         </div>
                    </div>
                    <div className="flex gap-3">
                         <p>{readingtime} min read </p>
                         {/* 01 bookmark add btn */}
                         <button 
                         onClick={() => handleAddToBookmark(blog)}> 
                         <BsBookmark size={30}></BsBookmark></button>
                    </div>
               </div>
               <h2 className='text-xl pb-4 font-semibold'>{title}</h2>
               <div className="">
                    {
                         hashtags.map((hash, index) => <span className='mr-5' key={index}><a  href="">#{hash}</a></span>)
                    }
               </div>
               <div className="pb-6 pt-4">
                    {/* 02 readingTime add btn */}
                    <button 
                    onClick={() => handelReadingTimeCount(readingtime)} 
                    className=' text-indigo-600 font-medium underline underline-offset-4' href=""
                    >Mark as read</button>
               </div>
          </div>
     );
};

Blog1.propTypes = {
     blog: PropTypes.object.isRequired,
     handleAddToBookmark: PropTypes.func.isRequired,
     handelReadingTimeCount: PropTypes.func.isRequired
}


export default Blog1;