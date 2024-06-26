import React from 'react'
import Counter from './features/counter/Counter'
import Posts from '../src/components/Posts/features/Posts'
import AddPostForm from './components/Posts/features/AddPostForm'
import { Route, Routes } from 'react-router-dom'
import Layout from './LayoutComponents/Layout'
import SinglePostPage from './components/Posts/features/SinglePostPage'
import EditPostForm from './components/Posts/features/EditPostForm'
import UserList from './components/Users/UserList'
import UserPage from './components/Users/UserPage'



export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Posts />} />

        <Route path='/post'>
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
          <Route path='edit/:postId' element={<EditPostForm />} />
        </Route>

        <Route path='/user'>
          <Route index element={<UserList />} />
          <Route path=':userId' element={<UserPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
