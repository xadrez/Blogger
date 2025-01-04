import Image from "./Image"
import { Link} from "react-router-dom"
import { format } from 'timeago.js'


const PostlistItem = ({post}) => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        { post.img && <div className="md:hidden xl:block xl:w-1/3">
            <Image src={`${post.img}`} w='735' className='rounded-2xl object-cover'/>
        </div>}
        {/** details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to={`/${post.slug}`} className="text-4xl font-semibold">
            {post.title}
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by {post.user.username}</span>
                <Link to='/test' className="text-blue-800">Tutmosis</Link>
                <span>on</span>
                <Link to='/test' className="text-blue-800">{post.cat}</Link>
                <span>{format(post.createdAt)}</span>
            </div>
            <p>{post.content}</p>
            <Link to={`/${post.slug}`} className="underline text-blue-800 text-sm">Read More</Link>
        </div>
    </div>
  )
}

export default PostlistItem