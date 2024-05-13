import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCount, increaseCount } from '../components/Posts/features/postsSlice'

export default function Header() {
    const dispatch = useDispatch()
    const count = useSelector(getCount)

    return (
        <header>
            <h2>Redux blog</h2>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='post'>Posts</Link></li>
                    <li><Link to='user'>Users</Link></li>
                </ul>
                <button onClick={() => dispatch(increaseCount())}>
                    {count}
                </button>
            </nav>
        </header>
    )
}
