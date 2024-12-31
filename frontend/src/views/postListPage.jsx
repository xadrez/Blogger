import { useState } from "react"
import PostsList from "../components/PostsList"
import SideMenu from "../components/SideMenu"

const PostListPage = () => {
    const [ open, setOPen] = useState(false);
  return (
    <div className=''>
        <h1 className="mb-8 text-2xl">Development Blog</h1>
        <button onClick={()=> setOPen((prev) => !prev)} className="md:hidden bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4">
            { open ? "Close": "Filter or Search"}
        </button>
        <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="">
            <PostsList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
            <SideMenu />
        </div>
        </div>
    </div>
  )
}

export default PostListPage