import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Todo = () => {
    const [todoText, setTodoText] = useState('')
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const storedTodos = localStorage.getItem('Todos')
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('Todos', JSON.stringify(todos))
    }, [todos])

    const handleChange = (e) => {
        setTodoText(e.target.value)
    }

    const handleAdd = () => {
        const trimmedText = todoText.trim()
        if (!trimmedText) return

        const newTodos = [
            ...todos,
            { id: uuidv4(), text: trimmedText, iscompleted: false },
        ]

        setTodos(newTodos)
        setTodoText('')
    }

    const handleEdit = (id) => {
        const todoToEdit = todos.find((item) => item.id === id)
        if (!todoToEdit) return

        setTodoText(todoToEdit.text)
        setTodos(todos.filter((item) => item.id !== id))
    }

    const handleDelete = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    const handleToggle = (id) => {
        setTodos(
            todos.map((item) =>
                item.id === id ? { ...item, iscompleted: !item.iscompleted } : item,
            ),
        )
    }

    return (
        <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
            <section className="mx-auto max-w-4xl space-y-8">
                <div className="rounded-5 border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
                    <div id="add" className="space-y-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.32em] text-purple-300">Todo manager</p>
                            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Add your tasks</h1>
                            <p className="mt-2 max-w-2xl text-sm text-slate-400">
                                Build a clean todo list with React and Tailwind. Save, edit, and complete tasks instantly.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-slate-950/80 p-5 shadow-inner shadow-slate-950/10">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    handleAdd()
                                }}
                                className="flex flex-col gap-4 sm:flex-row"
                            >
                                <input
                                    value={todoText}
                                    onChange={handleChange}
                                    className="min-w-0 flex-1 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                                    type="text"
                                    placeholder="What do you want to do next?"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center rounded-2xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                                >
                                    Add Todo
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="rounded-10border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <h2 className="text-2xl font-semibold text-white">Your Todos</h2>
                        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                            {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
                        </span>
                    </div>

                    {todos.length === 0 ? (
                        <div className="mt-6 rounded-3xl border border-dashed border-slate-700 bg-slate-950/80 p-8 text-center text-slate-500">
                            No todos to display. Add a task above.
                        </div>
                    ) : (
                        <div className="mt-6 space-y-4">
                            {todos.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 transition hover:border-purple-500"
                                >
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <label className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                checked={item.iscompleted}
                                                onChange={() => handleToggle(item.id)}
                                                className="h-5 w-5 rounded border-slate-700 bg-slate-900 text-purple-600 focus:ring-purple-500"
                                            />
                                            <span
                                                className={`text-base font-medium transition ${
                                                    item.iscompleted ? 'text-slate-400 line-through' : 'text-slate-100'
                                                }`}
                                            >
                                                {item.text}
                                            </span>
                                        </label>

                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                type="button"
                                                onClick={() => handleEdit(item.id)}
                                                className="rounded-2xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-100 transition hover:border-purple-500 hover:text-white"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDelete(item.id)}
                                                className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Todo
