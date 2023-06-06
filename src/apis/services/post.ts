import { axiosInstance } from "../axios";

interface TodoProps {
  todo: string;
}

interface TodoResponseProps extends TodoProps {
  id: number;
  isCompleted: boolean;
  userId: number;
}

interface EditTodoRequestProps {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export const createTodo = async (post: TodoProps) => {
  const { data } = await axiosInstance().post<TodoResponseProps>(
    "/todos",
    post
  );
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
