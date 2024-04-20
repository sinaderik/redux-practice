import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts, getPostError, getPostStatus } from './postsSlice'
import PostsExerpt from './PostsExerpt'
import "./posts.css"


export default function Posts() {
  // in this way if shape of the state changes we should change this line of code in every component that its used
  // const posts = useSelector(state => state.posts)

  // But it in this way if shape of the state changes we can easily make change in the related slice
  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostStatus)
  const postsError = useSelector(getPostError)
  
  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>
  } else if (postsStatus === 'succeeded') {
    // sort the post by the time that are created
    const orderedPosts =  posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map(post => <PostsExerpt key={post.id} post={post} />)
  } else if (postsStatus === 'error') {
    content = <p>{postsError}</p>
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>

  )
}
