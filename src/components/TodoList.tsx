import { useContext, useEffect } from "react";
import TodoCard from "./TodoCard";
import { TodoContext } from "../hooks/useTodoContext";

function TodoList() {
  const { todoList, setTodoListResponse } = useContext(TodoContext);

  useEffect(() => {
    setTodoListResponse();
  }, [setTodoListResponse]);

  return (
    <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pb-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {todoList &&
        todoList.map((item) => (
          <TodoCard
            key={item.id}
            item={item}
            setTodoListResponse={setTodoListResponse}
          />
        ))}
    </ul>
  );
}

export default TodoList;
