import PostlistItem from "./PostlistItem"
import { useQuery } from "@tanstack/react-query"
import axios from 'axios'

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`)
  return res.data
}

const PostsList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: ()=> fetchPosts(),
  })
  if (isPending) return 'Loading...'
  if (error) return 'An error has occured: '+ error.message

  console.log(data)
  return (
    <div className='flex flex-col gap-12 mb-8'>
        <PostlistItem />
        <PostlistItem />
        <PostlistItem />
        <PostlistItem />
        <PostlistItem />
     
    </div>
  
  )
}

export default PostsList