import React from 'react'
import logo from '../assets/Logo.png'
import todoIcon from '../assets/todo.png'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/95 shadow-xl shadow-slate-950/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Todo logo" className="h-11 w-11 rounded-full border border-slate-700 object-cover" />
          <div>
            <p className="text-lg font-semibold text-white">Todo App</p>
            <p className="text-sm text-slate-400">React + Tailwind CSS</p>
          </div>
        </a>
        <nav>
          <ul className="flex items-center gap-3 text-sm text-slate-200">
            <li>
              <a href="#add" className="rounded-full bg-purple-600 px-4 py-2 font-semibold text-white transition hover:bg-purple-700">
                Add task
              </a>
            </li>
            <li className="hidden items-center rounded-full bg-slate-800 px-4 py-2 text-slate-400 md:flex">
              <img src={todoIcon} alt="Todo icon" className="h-5 w-5 invert" />
              <span className="ml-2">Stay productive</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
