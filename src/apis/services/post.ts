import { EditTodoRequestProps, TodoResponseProps } from "../../type/todo";
import { axiosInstance } from "../axios";

export const createTodo = async (todo: string) => {
  const { data } = await axiosInstance(true).post<TodoResponseProps>("/todos", {
    todo,
  });
  return data;
};

export const getTodos = async () => {
  const { data } = await axiosInstance().get<TodoResponseProps[]>("/todos");
  return data;
};

export const updateTodo = async (editTodo: EditTodoRequestProps) => {
  const { id, todo, isCompleted } = editTodo;
  const { data } = await axiosInstance().put<TodoResponseProps>(
    `/todos/${id}`,
    {
      todo,
      isCompleted,
    }
  );
  return data;
};

export const deleteTodo = async (id: number) => {
  const { data } = await axiosInstance().delete(`/todos/${id}`);
  return data;
};
