import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="container mx-auto px-4">
        <Header></Header>

        <div className=" md:flex gap-5">
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>
        </div>
    </div> 

    </>
  )
}

export default App
