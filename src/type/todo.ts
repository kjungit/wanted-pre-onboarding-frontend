import { ReactNode } from "react";

export interface TodoContextType {
  todoList: TodoResponseProps[];
  setTodoListResponse: () => void;
}

export interface TodoContextValue extends TodoContextType {
  setTodoList: React.Dispatch<React.SetStateAction<TodoResponseProps[]>>;
}

export interface TodoProviderProps {
  children: ReactNode;
}

export interface TodoProps {
  todo: string;
}

export interface TodoResponseProps extends TodoProps {
  id: number;
  isCompleted: boolean;
  userId: number;
}

export interface EditTodoRequestProps {
  id: number;
  todo?: string;
  isCompleted?: boolean;
}
