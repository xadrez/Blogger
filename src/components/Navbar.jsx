import { useState } from "react"
import Image from "./Image"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
          <Link to="/" className="flex items-center gap-1 text-2xl font-bold">
            <Image src="bull.svg" alt="Logo" w={42} h={42}/>
            <span>Traders blog</span>
          </Link>
          
      {/*MOBILE MENU */}
      <div className="md:hidden text-4xl">
          <div className="cursor-pointer" onClick={()=>setOpen((prev) => !prev)}>{open ? "X" : ""}</div>
          <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]" }`}>
              {/*MOBILE LINKS */}
              <Link to="/">Home</Link>
              <Link to="/singlepage">Trending</Link>
              <Link to="/login">Latest News</Link>
              <Link to="/login">About</Link>
              <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login👇</button>
              </Link>
          </div>
      </div>
      {/*DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Latest News</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login👇</button>
          </Link>
      </div>
    </div>
  )
}

export default Navbar


