
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {

     return (
          <div className="md:w-1/3">
               <h2 className="text-4xl py-5">Boodmarks </h2>
               <div className="text-center bg-blue-100 p-5 border-2 border-blue-600 rounded-md mb-3">
                    <p className='text-xl font-semibold text-blue-600'>Spent time on read :{readingTime}min</p>
               </div>
               <div className="bg-slate-200 p-5 rounded-md ">
                    
                    <h3 className='text-xl'>Bookmarked Blogs : <span className='text-green-400'>{bookmarks.length}</span> </h3>
                    {
                         bookmarks.map(bookmark => <Bookmark key={bookmarks.id} bookmark={bookmark}></Bookmark>)
                    }
               </div>
          </div>
     );
};



Bookmarks.propTypes ={
     bookmarks: PropTypes.array.isRequired,
     readingTime: PropTypes.number
}


export default Bookmarks;