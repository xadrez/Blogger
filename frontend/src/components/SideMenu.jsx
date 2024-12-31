import PostMenuAction from "./PostMenuAction"
import Search from "./Search"
import { Link } from "react-router-dom"

const SideMenu = () => {
  return (
    <div className='px-4 h-max sticky top-8 flex flex-col'>
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mb-4 mt-8 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" value='newest' className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 rounded-sm checked:bg-blue-800" />
        Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" value='popular' className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 rounded-sm checked:bg-blue-800" />
        Most popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" value='trending' className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 rounded-sm checked:bg-blue-800" />
        Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="sort" value='oldest' className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 rounded-sm checked:bg-blue-800" />
        Oldest
        </label>
        
      </div>
      <h1 className="mb-4 mt-8 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className='underline' to='/posts?cat=travel'>Travel</Link>
        <Link className='underline' to='/posts?cat=daredevil'>Dare-Devil</Link>
        <Link className='underline' to='/posts?cat=luxury'>Luxury</Link>
        <Link className='underline' to='/posts?cat=cars'>Cars</Link>
      </div>
    </div>
  )
}

export default SideMenu