import React from 'react'
import Counter from './features/counter/Counter'
import Posts from '../src/components/Posts/features/Posts'
import AddPostForm from './components/Posts/features/AddPostForm'
import { Route, Routes } from 'react-router-dom'
import Layout from './LayoutComponents/Layout'
import SinglePostPage from './components/Posts/features/SinglePostPage'



export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path='/post'>
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
