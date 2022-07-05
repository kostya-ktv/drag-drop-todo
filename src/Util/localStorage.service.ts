import { NoteType, TaskType } from "../Store/types";

export const fetchFromLocalStorage = () => {
  const data = localStorage.getItem('todo');
  if (!data) return [];
  return JSON.parse(data);
};

export const addToLocalStorage = (item: TaskType | NoteType): void => {
  const data = localStorage.getItem('todo');
  if (!data) {
    localStorage.setItem('todo', JSON.stringify([item]));
  } else {
    localStorage.setItem('todo', JSON.stringify([...JSON.parse(data), item]));
  }
};
