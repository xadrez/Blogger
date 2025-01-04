import Image from "./Image"
import { format } from 'timeago.js'

const Comment = ({comment}) => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className="flex items-center gap-4">
            <Image src='default-image.jpg' className='w-10 h-10 rounded-full object-cover' w='40'/>
            <span className="font-medium">{comment.user.username}</span>
            <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
        </div>
        <div className="mt-4">
            <p>{comment.desc}</p>
        </div>
    </div>
  )
}

export default Comment