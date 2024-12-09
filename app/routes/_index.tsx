import { useState } from 'react';
import type { MetaFunction } from '@remix-run/node';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { Todo } from '../types/todo';
import { createTodo } from '../utils/todoUtils';
import React from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Todo App" },
    { name: "description", content: "A simple todo application built with Remix" },
  ];
};

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos((prev) => [...prev, createTodo(text)]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Todo App</h1>
        <h1 className="text-3xl font-bold text-center mb-8">A simple todo application built with Remix</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <TodoForm onAdd={handleAddTodo} />
          <TodoList
            todos={todos}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
          />
        </div>
      </div>
    </div>
  );
}