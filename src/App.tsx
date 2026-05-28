import React from 'react'
import Navbar from './components/Navbar'
import Todo from './components/Todolist'
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Todo />
    </div>
  )
}

export default App
