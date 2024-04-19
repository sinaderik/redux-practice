import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h2>Redux blog</h2>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='post'>Posts</Link></li>
                </ul>
            </nav>
        </header>
    )
}
