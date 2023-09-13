import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'



function App() {
  // 01 bookmark show state ...
  const [bookmarks, setBookmark] = useState([]);

  // 02 readingTime show state ...
  const [readingTime, setReadingTime] = useState(0)

  // 01 bookmark handeler
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmark(newBookmarks)
  }

  // 02 readingTime handeler
  const handelReadingTimeCount = (id, time) => {
    // console.log('marking as read', time);
    const newreadingTime = readingTime + time
    setReadingTime(newreadingTime)

    // console.log('remove bookmark', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmark(remainingBookmarks)
  }



  return (
    <>

      <div className="container mx-auto px-4">
        <Header></Header>

        <div className=" md:flex gap-5">

          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            handelReadingTimeCount={handelReadingTimeCount}
          ></Blogs>

          <Bookmarks
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>

    </>
  )
}

export default App
