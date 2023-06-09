import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";

function TodoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        TodoList
      </h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default TodoPage;
