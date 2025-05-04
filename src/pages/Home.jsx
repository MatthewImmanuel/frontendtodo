import React from 'react';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-4"> Professional Todo App</h1>
      </header>
      <TodoList />
    </div>
  );
}