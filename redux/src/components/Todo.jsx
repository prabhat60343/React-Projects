import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo, markDone } from '../features/todo/todoSlice';

function Todo() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim() !== '') {
      dispatch(updateTodo({ id, newText: editText }));
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <>
      <div className="text-xl font-semibold mb-4 text-white">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="max-w-2xl w-full mx-auto mt-10 bg-zinc-900 p-6 rounded-lgw-full flex justify-between items-center  px-4 py-2 rounded"
          >
            {/* Left side: checkbox + text or input */}
            <div className="flex items-center gap-3 ">
              <div className='rounded-md outline-none flex bg-white text-black '>MarkDone
              <input 
                type="checkbox"
                
                checked={todo.completed}
                onChange={() => dispatch(markDone(todo.id))}
                className="accent-green-500"
              />
              </div>

              {editId === todo.id ? (
                <input
                  className="text-white bg-black p-1 rounded"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <span
                  className={`text-white ${todo.completed ? 'line-through bg-black' : ''
                    }`}
                >
                  {todo.text}
                </span>
              )}
            </div>

            {/* Right side: buttons */}
            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-black px-3 py-1 rounded hover:bg-red-600"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
