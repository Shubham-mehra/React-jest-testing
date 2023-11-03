import React, { useState } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"
import TodoList from '../TodoList/TodoList'

function AddInput({
    setTodos, todos
}) {

    const [todo, setTodo] = useState("")
    const [focused, setFocused] = useState("")


    const handleFocus = () => {
        setFocused(true)
    }
    const handleBlur = () => {
        setFocused(false)
    }

    const addTodo = () => {
        console.log("This console is for Testing Purpose !")
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }

    return (
        <div className="input-container">
            <input
                className="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task here..."
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
          {focused ? <p data-testid="message">Input is focused.</p> : null}
            <button
                className="add-btn"
                data-testid='btn-Add'
                onClick={addTodo}
            >
                Add
            </button>
        </div>
    )
}

export default AddInput
