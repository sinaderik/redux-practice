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
            <p className='postCredit'>
                <Link to={`post/${post.id}`}>View Post</Link>
                <TimeAgo timeStamp={post.date} />
            </p>
            <PostAuthor userId={post.userId} />
            <ReactionButtons post={post} />
        </article>
    )
}
