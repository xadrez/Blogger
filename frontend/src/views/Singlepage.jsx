import Image from '../components/Image'
import { Link } from 'react-router-dom'
import PostMenuAction from '../components/PostMenuAction'
import Search from '../components/Search'
import Comments from '../components/Comments'

const Singlepage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/** details */}
      <div className="gap-8 flex">
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link to='/test' className="text-blue-800">Mr. Zoro</Link>
            <span>on</span>
            <Link to='/test' className="text-blue-800">Indexes</Link>
            <span>2 days ago</span>
          </div>
          <p className='text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic ratione, illo debitis alias, labore accusamus natus asperiores libero, nostrum quas sapiente nesciunt expedita quasi quis! Asperiores aperiam commodi saepe.</p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src='postImg.jpeg' w='600' className='rounded-2xl'/>
        </div>
      </div>
      {/** content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
          <div className='lg:text-lg flex flex-col gap-6 text-justify'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae repudiandae quas reprehenderit doloremque dolores autem nobis, sequi quos et, fugiat dolore eaque, aliquid unde ad? Delectus sint repellendus exercitationem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae repudiandae quas reprehenderit doloremque dolores autem nobis, sequi quos et, fugiat dolore eaque, aliquid unde ad? Delectus sint repellendus exercitationem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae repudiandae quas reprehenderit doloremque dolores autem nobis, sequi quos et, fugiat dolore eaque, aliquid unde ad? Delectus sint repellendus exercitationem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae repudiandae quas reprehenderit doloremque dolores autem nobis, sequi quos et, fugiat dolore eaque, aliquid unde ad? Delectus sint repellendus exercitationem?
            </p>
          </div>
          
          {/* menu */}
          <div className='px-4 h-max sticky top-8'>
            <h1 className='mb-4 text-sm font-medium'>Author</h1>
            <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              <Image 
                src='default-image.jpg' 
                w='48' h='48' 
                className='rounded-full w-12 h-12 object-cover'
              />
              <Link className='text-blue-800'>Ambusuyu Tua</Link>
            </div>
              <p className='text-sm text-gray-500'>
              Lorem ipsum dolor sit amet.
              </p>
              <div className='flex gap-2'>
                <Link>
                  <Image src='facebook.svg'/>
                </Link>
                <Link>
                  <Image src='instagram.svg'/>
                </Link>
              </div>
              </div>
            <PostMenuAction />
            <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
            <div className='flex flex-col gap-2 text-sm'>
            <Link className='undeline'>All</Link>
              <Link to='/test' className='underline'>Web Design</Link>
              <Link to='/test' className='underline'>Dropshipping</Link>
              <Link to='/test' className='underline'>Realestate</Link>
            </div>
            <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
            <Search />
          </div>
      </div>
      <Comments />
    </div>
  
  )
}

export default Singlepage