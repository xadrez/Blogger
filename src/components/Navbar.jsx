import { useState } from "react";
import Image from "./Image";

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        <div className="flex items-center gap-1 text-2xl font-bold">
        {/*loading="lazy"lqip={{ active: true, quality: 20 }}*/}
            <Image src="bull.svg" alt="Logo" w={42} h={42}/>
            <span>Traders blog</span>
        </div>
    {/*MOBILE MENU */}
    <div className="md:hidden text-4xl">
        <div className="cursor-pointer" onClick={()=>setOpen((prev) => !prev)}>{open ? "X" : ""}
        </div>
    
        <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]" }`}>
            {/*MOBILE LINKS */}
            <a href="/">Home</a>
            <a href="/">Trending</a>
            <a href="/">Latest News</a>
            <a href="/">About</a>
            <a href="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login👇</button>
            </a>
        </div>
    </div>
    {/*DESKTOP MENU */}
    <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Latest News</a>
        <a href="/">About</a>
        <a href="/">
        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login👇</button>
        </a>
    </div>
    </div>
  )
}

export default Navbar


