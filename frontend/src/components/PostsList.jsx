import PostlistItem from "./PostlistItem"
import { useQuery, infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query"
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

const fetchPosts = async (pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`,{
    param: { page: pageParam, limit: 2},
  })
  return res.data
}

const PostsList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: (pageParam = 1)=>fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1: undefined,
  })

  
  if (status === 'loading') return 'Loading...'
  if (status === 'error') return 'An error has occured: '+ error.message
  const allPosts = data?.pages?.flatMap((page) => page.posts) || []

  console.log(data)
  return (

  <InfiniteScroll
    className='flex flex-col gap-12 mb-8'
    dataLength={allPosts.length}
    next={fetchNextPage}
    hasMore={!!hasNextPage}
    loader={<h4>Loading more posts...</h4>}
    endMessage={
      <p>
        <b>All posts loaded!</b>
      </p>
    }
  >
      { allPosts.map((post) => (
        <PostlistItem key={post._id} post={post}/>
      ))}
</InfiniteScroll>
  
  )
}

export default PostsList