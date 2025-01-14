import { Link } from "react-router-dom"
import MainCategories from "../components/MainCategories"
import FeaturedPosts from "../components/FeaturedPosts"
import PostsList from "../components/PostsList"

const Frontpage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUM */}
      <div className="flex gap-4">
        <Link to='/' className=''>Home</Link>
        <span>|</span>
        <Link to='/posts' ><span className='text-blue-800'>Blogs and Articles</span></Link>
      </div>
      {/* INTRODDUCTION */}
      <div className='flex items-center justify-between'>
        {/* Titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Thousand of traders arround the world would like to learn from certified traders.
          </h1>
          <p className="mt-8 text-mdd md:text-xl">You've been on a journey and you have factual results to back it up, we would like to here from you as matter fact the World would love to here your story. Goods and bads your light bulbe moment, everything you beleive might empower this army of aspiring trader out here.</p>
        </div>
        {/* Animated button */}
        <Link to='write' className="hidden md:block relative">
          <svg viewBox='0 0 200 200' width='200' height='200' 
            //className='text-lg tracking-widest animate-spin animatedButton'
            className="text-lg tracking-widest"
            >
            <path 
              id='circlePath' 
              fill='none'
              d='M100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0'
            
            />
                <text>
                  <textPath href="#circlePath" startOffset='0%'>
                    Share your experience.
                  </textPath>
                  <textPath href="#circlePath" startOffset='55%'>
                    And your strategy.
                  </textPath>
                </text>          
              </svg>
              <button className='absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='50'
                  height='50'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                >
                  <line x1='6' y1='18' x2='18' y2='6' />
                  <polyline points='9 6 18 6 18 15'/>
                </svg>
              </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATUREDPOSTS */}
      <FeaturedPosts />
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostsList/>
      </div>

    </div>//End of page
    
  )
}

export default Frontpage