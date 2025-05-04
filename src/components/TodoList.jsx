import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'; // Note: This would require installing framer-motion

const Icon = ({ path, size = 20, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/todos`);
      setTodos(res.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks. Please try again.');
      console.error('Error fetching todos:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!task.trim()) return;
    
    try {
      setIsLoading(true);
      await axios.post(`${import.meta.env.VITE_API_URL}/addTodo`, { task });
      setTask('');
      fetchTodos();
    } catch (err) {
      setError('Failed to add task. Please try again.');
      console.error('Error adding todo:', err);
      setIsLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`${import.meta.env.VITE_API_URL}/deleteTodo/${id}`);
      fetchTodos();
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error('Error deleting todo:', err);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-container bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-indigo-100 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">Your Tasks</h2>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-center">
          {error}
        </div>
      )}
      
      <div className="flex mb-8">
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          className="todo-input flex-grow px-5 py-4 text-lg rounded-l-xl focus:outline-none" 
          disabled={isLoading}
        />
        <button 
          onClick={addTodo} 
          className="add-button bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-4 rounded-r-xl text-white text-lg font-medium transition-all duration-300 shadow-lg"
          disabled={isLoading}
        >
          <Icon path="M12 5v14M5 12h14" color="#fff" size={24} />
        </button>
      </div>
      
      <div className="todo-list">
        {isLoading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : todos.length === 0 ? (
          <div className="empty-state py-12 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-indigo-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-xl text-gray-500">No tasks yet! Add your first task above.</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {todos.map((todo, index) => (
              <li 
                key={todo._id} 
                className="flex justify-between items-center bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4 flex-grow">
                  <div className="flex-shrink-0 bg-indigo-100 rounded-full p-2 text-indigo-600">
                    <Icon path="M20 6L9 17 4 12" color="currentColor" size={20} />
                  </div>
                  <span className="text-gray-800 text-lg">{todo.task}</span>
                </div>
                <button 
                  onClick={() => deleteTodo(todo._id)} 
                  className="delete-button flex-shrink-0 ml-4 p-2.5 bg-red-50 hover:bg-red-100 rounded-full text-red-500 transition-all duration-300"
                >
                  <Icon path="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" size={20} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}