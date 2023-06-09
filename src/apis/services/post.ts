import { axiosInstance } from "../axios";

interface TodoProps {
  todo: string;
}

export interface TodoResponseProps extends TodoProps {
  id: number;
  isCompleted: boolean;
  userId: number;
}

interface EditTodoRequestProps {
  id: number;
  todo?: string;
  isCompleted?: boolean;
}

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
  console.log(editTodo);
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
