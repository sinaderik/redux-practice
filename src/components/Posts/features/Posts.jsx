import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
import "./posts.css"

export default function Posts() {
  // in this way if shape of the state changes we should change this line of code in every component that its used
  // const posts = useSelector(state => state.posts)

  // But it in this way if shape of the state changes we can easily make change in the related slice
  const posts = useSelector(selectAllPosts)

  const renderPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>

  )
}
