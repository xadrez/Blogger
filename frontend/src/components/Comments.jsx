import { useAuth } from "@clerk/clerk-react"
import Comment from "./Comment"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import axios from 'axios'

const fetchComments = async (postId) => {

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`)
  return res.data
}
const Comments = ({postId}) => {
  const { getToken } = useAuth()

  const {isPending, error,data } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId)
  })

  //Query client to refresh thhe client
  const queryClient = useQueryClient()

  const mutation = useMutation({

    mutationFn: async (newComment) => {
        const token = await getToken()
        return axios.post(`${import.meta.env.VITE_API_URL}/comments/${postId}`, newComment, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    },
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey:['comments', postId]}) 
    },
    onError: (error) => {
      toast.error(error.response.data)
    }
})

  if(isPending) return 'Loading...'
  if(error) return 'Oops, something went wrong... '+error.message
  if(!data) return 'Comment not found'

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const data = {
      desc: formData.get('desc'),
    }
    mutation.mutate(data)
  }

  return (
    <div className='flex flex-col gap-8 lg:w-3/5 mb-12'>
        <h1 className="text-gray-500 underline">Comments</h1>
        <form onSubmit={handleSubmit} className="flex items-center justify-between gap-8 w-full">
            <textarea name="desc" type="text" placeholder="Write a comment..." className="w-full p-4 rounded-xl" />
            <button className="px-4 py-3 text-white bg-blue-800 rounded-xl font-medium">Send</button>
        </form>
        { data.map((comment) =>(
          <Comment key={comment._id} comment={comment}/>
        ))}
  
    </div>
  )
}

export default Comments