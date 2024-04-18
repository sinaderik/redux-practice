import React from 'react'
import Counter from './features/counter/Counter'
import Posts from '../src/components/Posts/features/Posts'
import AddPostForm from './components/Posts/features/AddPostForm'



export default function App() {
  return (
    <div >
      {/* <Counter /> */}
      <AddPostForm />
      <Posts />
    </div>
  )
}
