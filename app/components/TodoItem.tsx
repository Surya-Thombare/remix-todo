import { useState } from 'react';
import { Todo } from '~/types/todo';
import { clsx } from 'clsx';
import EditableText from './EditableText';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex items-center gap-2 p-2 border-b group">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-4 h-4"
      />
      <div className={clsx('flex-1', todo.completed && 'line-through text-gray-500')}>
        <EditableText
          text={todo.text}
          isEditing={isEditing}
          onSave={(newText) => onEdit(todo.id, newText)}
          onEditComplete={() => setIsEditing(false)}
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-2 py-1 text-blue-600 hover:bg-blue-100 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-2 py-1 text-red-600 hover:bg-red-100 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}