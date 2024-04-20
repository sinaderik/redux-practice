import React from 'react'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { Link } from 'react-router-dom'


export default function PostsExerpt({ post }) {
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p>
                <Link to={`post/${post.id}`}>View Post</Link>
            </p>
            <div className='post-detail'>
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date} />
            </div>
            <ReactionButtons post={post} />
        </article>
    )
}
