import Image from "./Image"
import { Link } from "react-router-dom"

const FeaturedPosts = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
        {/**Left */}
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        {/**image */}
            <Image 
                src='featured1.jpeg' alt='featured1' 
                className='rounded-3xl object-cover' 
                w='895'
            />
        {/**details */}
        <div className="flex items-center gap-4">
            <h1 className="font-semibold lg:text-lg">01.</h1>
            <Link to='/Singlepage' className="text-blue-800 lg:text-lg">Relevent</Link>
            <span>2 days ago</span>
        </div>
        {/**title */}
            <Link to='' className="text-xl lg:text-3xl font-semibold lg:font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
        </div>
        {/**Right */}
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
            <div className="lg:h-1/3 flex justify-between gap-4">
                <div className="w-1/3 aspect-video">
                    <Image 
                        className='rounded-3xl object-cover w-full h-full' 
                        src='featured2.jpeg' 
                        w='298'
                       
                    />
                </div>
                <div className="w-2/3">
                {/**details */}
                <div className="flex items-center gap-4 text-sm lg.text-base mb-4">
                    <h1 className="font-semibold">02.</h1>
                    <Link to='/Singlepage'  className="text-blue-800">Lorem</Link>
                    <span className="text-gray-500 text-sm">2 days ago</span>
                </div>
                {/**title */}
                    <Link className="text-blue-800 text-underline text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Link>
                </div>
            </div>
            <div className="lg:h-1/3 flex justify-between gap-4">
                <div className=" w-1/3 aspect-video">
                    <Image 
                        className='rounded-3xl object-coverw-full
                        h-full' 
                        src='featured3.jpeg'
                        w='298'  
                    />
                </div>
                <div className="w-2/3">
                {/**details */}
                <div className="flex items-center gap-4 text-sm lg.text-base mb-4">
                    <h1 className="font-semibold">03.</h1>
                    <Link to='/Singlepage'  className="text-blue-800">Cancún</Link>
                    <span className="text-gray-500 text-sm">2 days ago</span>
                </div>
                {/**title */}
                    <Link className="text-blue-800 text-underline text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Link>
                </div>
            </div>
            <div className="lg:h-1/3 flex justify-between gap-4">
                <div className="w-1/3 aspect-video">
                    <Image 
                        className='rounded-3xl object-cover w-full
                        h-full' 
                        src='featured4.jpeg' 
                        w='298'/>
                        
                </div>
                <div className="w-2/3">
                {/**details */}
                <div className="flex items-center gap-4 text-sm lg.text-base mb-4">
                    <h1 className="font-semibold">04.</h1>
                    <Link to='/Singlepage'  className="text-blue-800">Bridgtown</Link>
                    <span className="text-gray-500 text-sm">2 days ago</span>
                </div>
                {/**title */}
                    <Link className="text-blue-800 text-underline text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Link>
                </div>
                </div>
        </div>
    </div>
  )
}

export default FeaturedPosts