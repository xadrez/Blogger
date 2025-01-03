import Image from "./Image"
import { Link} from "react-router-dom"

const PostlistItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src='postImg.jpeg' w='735' className='rounded-2xl object-cover'/>
        </div>
        {/** details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to='/test' className="text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by Mark Hummer</span>
                <Link to='/test' className="text-blue-800">Tutmosis</Link>
                <span>on</span>
                <Link to='/test' className="text-blue-800">Forex</Link>
                <span>2 days ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatem maiores consequuntur quaerat ratione vel eius nemo temporibus placeat commodi sunt quisquam atque similique, explicabo quas optio itaque! Temporibus, vero!</p>
            <Link to='/test' className="underline text-blue-800 text-sm">Read More</Link>
        </div>
    </div>
  )
}

export default PostlistItem