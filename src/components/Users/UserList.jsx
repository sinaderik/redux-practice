import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../Users/features/userSlice'
import { Link } from 'react-router-dom'

export default function UserList() {

    const users = useSelector(selectAllUsers)
    const renderUser = () => {
       return users.map((user, index) => (
            <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
        ))
    }

    return (
        <section>
            <h2>Users</h2>
            <ul>
                {renderUser()}
            </ul>
        </section>
    )
}
