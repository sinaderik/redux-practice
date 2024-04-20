import React from 'react'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import PostAuthor from './PostAuthor'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import { Link, useParams } from 'react-router-dom'

export default function SinglePostPage() {
    const { postId } = useParams()

    const post = useSelector(state => selectPostById(state, Number(postId)))
    if (!post) {
        return (
            <section>
                <h3>Post is not found...!</h3>
            </section>
        )
    }

    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/post/edit/${post.id}`}>Edit post</Link>
            <div className='post-detail'>
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date} />
            </div>
            <ReactionButtons post={post} />
        </article>
    )
}
