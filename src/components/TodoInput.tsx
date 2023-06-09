import React, { useContext, useState } from "react";
import { createTodo } from "../apis/services/post";
import { TodoContext } from "../hooks/useTodoContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const { setTodoListResponse } = useContext(TodoContext);

  const todoInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const onClickHandler = () => {
    if (todo === "") {
      toast.error("입력값이 없습니다.", {
        theme: "dark",
        autoClose: 3000,
      });
      return;
    } else {
      createTodo(todo)
        .then((data) => {
          toast.success("Todo 등록이 완료되었습니다. 😀", {
            theme: "dark",
            autoClose: 3000,
          });

          setTodo("");
          setTodoListResponse();
        })
        .catch((error) => {
          toast.error("다시 시도해주세요! 😢", {
            theme: "dark",
            autoClose: 3000,
          });
        });
    }
  };

  return (
    <form className="m-auto mt-6 flex max-w-md items-center gap-x-4">
      <input
        id="email-address"
        name="email"
        type="email"
        data-testid="new-todo-input"
        required
        className="min-w-0 flex-auto rounded-md border-2 border-gray-500 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        placeholder="Todo를 작성해주세요. 😀"
        onChange={todoInputHandler}
        value={todo}
      />
      <button
        type="submit"
        data-testid="new-todo-add-button"
        className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
        onClick={onClickHandler}
      >
        Add
      </button>
      <ToastContainer />
    </form>
  );
}

export default TodoInput;
