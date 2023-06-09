import { useEffect, useRef, useState } from "react";
import { deleteTodo, updateTodo } from "../apis/services/post";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const buttonS =
  "flex-none rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500";

interface TodoCardProps {
  item: {
    id: number;
    todo: string;
    isCompleted: boolean;
  };
  setTodoListResponse: () => void;
}

function TodoCard({
  item: { id, todo, isCompleted },
  setTodoListResponse,
}: TodoCardProps) {
  const [editState, setEditState] = useState(false);
  const [completed, setCompleted] = useState(isCompleted);
  const [editInputTodo, setEditInputTodo] = useState(todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editState && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editState]);

  const todoInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputTodo(event.target.value);
  };

  const editButtonHandler = () => {
    setEditState(!editState);
  };

  const canceledHandler = () => {
    setEditState(!editState);
  };

  const completedHandler = () => {
    updateTodo({ id, todo: editInputTodo, isCompleted: !completed }).then(
      (data) => {
        toast.success("수정이 완료되었습니다.", {
          theme: "dark",
          autoClose: 3000,
        });
        setCompleted(data.isCompleted);
        setTodoListResponse();
      }
    );
  };

  const modifyHandler = () => {
    updateTodo({ id, todo: editInputTodo, isCompleted: completed }).then(
      (data) => {
        toast.success("수정이 완료되었습니다.", {
          theme: "dark",
          autoClose: 3000,
        });
        setEditState(!editState);
        setTodoListResponse();
      }
    );
  };

  const deleteTodoHandler = () => {
    deleteTodo(id).then(() => {
      toast.success("삭제되었습니다.", {
        theme: "dark",
        autoClose: 3000,
      });
      setTodoListResponse();
    });
  };

  return (
    <li className="flex max-w-xl flex-col items-center justify-between rounded-2xl border-2 p-4">
      <div className="group relative min-w-full">
        <div className="flex items-center justify-between ">
          <label className="flex">
            <input
              type="checkbox"
              className="w-[20px]"
              checked={completed}
              onChange={completedHandler}
            />

            <h3 className="pl-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              Todo
            </h3>
          </label>
          {editState ? (
            <div className="flex w-[100px] justify-between">
              <button className={buttonS} onClick={canceledHandler}>
                취소
              </button>
              <button className={buttonS} onClick={modifyHandler}>
                확인
              </button>
            </div>
          ) : (
            <div className="flex w-[100px] justify-between">
              <button
                className={buttonS}
                onClick={editButtonHandler}
                data-testid="modify-button"
              >
                수정
              </button>
              <button
                className={buttonS}
                data-testid="delete-button"
                onClick={deleteTodoHandler}
              >
                삭제
              </button>
            </div>
          )}
        </div>

        {editState ? (
          <input
            ref={inputRef}
            type="text"
            className="mt-3 w-full rounded-md bg-gray-200 p-2 text-black"
            placeholder={todo}
            onChange={todoInputHandler}
          />
        ) : (
          <p className="text-md mt-5 text-left leading-6 text-gray-600">
            {todo}
          </p>
        )}
      </div>
    </li>
  );
}

export default TodoCard;
