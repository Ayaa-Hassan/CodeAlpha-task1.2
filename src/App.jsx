import { useState } from "react";
import { PiListHeart } from "react-icons/pi";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos,  { id: Date.now(), text: input, completed: false }]);
      setInput("");
      }
    
}


  return <>
  
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-r from-lime-300 to-yellow-200">
      <div className=" bg-white shadow-lg rounded-3xl p-16">
        <h1 className=" text-3xl font-bold text-center text-sky-300  flex items-center mb-6"> TODO  List App <PiListHeart size={40} className=" text-pink-300 ms-1" /></h1>
        <div className="mb-4 flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text" placeholder="Add a new todo " className=" flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-200" />
          <button
            onClick={addTodo}
            className=" bg-red-300 text-white px-4 py-2 rounded-r-lg hover:bg-red-400 "> Add</button>
        </div>
        <ul className=" space-y-2 ">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center  p-3 rounded-lg bg-slate-100 border border-gray-200">
              <input type="checkbox" 
                checked={todo.completed}
                onChange={() => setTodos(todos.map((item) => (
                  item.id === todo.id ? {
                  ...item,
                  completed: !item.completed
                } : item)))} 
                className=" mr-2 h-5 w-5 text-emerald-950"
              />
              <span className={` flex-grow ${todo.completed ? ' line-through text-gray-500' : 'text-gray-800'}`}>{todo.text}</span>
              <button
                onClick={() => setTodos(todos.filter((item) => item.id !== todo.id))}
                className=" ml-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
              >Delete</button>
            
            </li>
            ))}

        </ul>
      </div>
  </div>
  
  </>
}