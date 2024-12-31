import { Link } from "react-router-dom"

const MainCategories = () => {
  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
        {/* Links  */}
        <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link to='' className='bg-blue-800 text-white rounded-full px-4 py-2'>Forex</Link> 
            <Link to='' className='hover:bg-blue-50 rounded-full px-4 py-2'>Indexes</Link> 
            <Link to='' className='hover:bg-blue-50 rounded-full px-4 py-2'>Stocks</Link> 
            <Link to='' className='hover:bg-blue-50 rounded-full px-4 py-2'>Crypto</Link>    
        </div>
        <span className="text-lg font-medium">|</span>
        {/* Search  */}
        <div className="gb-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='20'
            height='20'
            fill='none'
            stroke='gray'
        >
            <circle cx='10.5' cy='10.5' r='7.5'/>
            <line x1='16.5' y1='16.5' x2='22' y2='22'/> 
        </svg>  
        <input type="text" placeholder="search a post" className="bg-transparent"/> 
        </div>
    </div>
  )
}

export default MainCategories