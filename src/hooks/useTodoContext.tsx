import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { getTodos } from "../apis/services/post";
import { getAccessTokenLocalStorage } from "../utils/localStorage";
import {
  TodoContextType,
  TodoContextValue,
  TodoProviderProps,
  TodoResponseProps,
} from "../type/todo";

const defaultValue: TodoContextType = {
  todoList: [],
  setTodoListResponse: () => {},
};

export const TodoContext = createContext<TodoContextType>(defaultValue);

export const useTodoContext = (): TodoContextType => useContext(TodoContext);

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todoList, setTodoList] = useState<TodoResponseProps[]>([]);

  const setTodoListResponse = useMemo(() => {
    return async () => {
      const token = getAccessTokenLocalStorage("accessToken");
      if (token) {
        const todoList = await getTodos();
        setTodoList(todoList);
      }
    };
  }, []);

  useEffect(() => {
    setTodoListResponse();
  }, [setTodoListResponse]);

  const todoContextValue: TodoContextValue = useMemo(() => {
    return {
      todoList,
      setTodoList,
      setTodoListResponse,
    };
  }, [todoList, setTodoList, setTodoListResponse]);

  return (
    <TodoContext.Provider value={todoContextValue}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
