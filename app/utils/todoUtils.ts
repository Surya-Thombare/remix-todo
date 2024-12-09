import { Todo } from '~/types/todo';

export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const createTodo = (text: string): Todo => ({
  id: generateId(),
  text,
  completed: false,
});