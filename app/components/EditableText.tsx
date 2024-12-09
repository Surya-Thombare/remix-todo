import { useState, useEffect, useRef } from 'react';

interface EditableTextProps {
  text: string;
  onSave: (newText: string) => void;
  isEditing: boolean;
  onEditComplete: () => void;
}

export default function EditableText({ text, onSave, isEditing, onEditComplete }: EditableTextProps) {
  const [editedText, setEditedText] = useState(text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = editedText.trim();
    if (trimmedText && trimmedText !== text) {
      onSave(trimmedText);
    }
    onEditComplete();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setEditedText(text);
      onEditComplete();
    }
  };

  if (!isEditing) {
    return <span className="flex-1">{text}</span>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex-1">
      <input
        ref={inputRef}
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleSubmit}
        className="w-full px-2 py-1 border rounded"
      />
    </form>
  );
}