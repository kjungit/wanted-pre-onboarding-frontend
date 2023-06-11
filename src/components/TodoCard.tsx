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
        if (data.isCompleted) {
          toast.success("✅ 완료 처리 되었습니다.", {
            theme: "dark",
            autoClose: 3000,
          });
        } else {
          toast.success("❌ 취소 처리 되었습니다.", {
            theme: "dark",
            autoClose: 3000,
          });
        }
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
    <li className="flex flex-col items-center justify-between p-4 border-2 max-w rounded-2xl">
      <div className="relative min-w-full group">
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
              <button
                className={buttonS}
                onClick={canceledHandler}
                data-testid="cancel-button"
              >
                취소
              </button>
              <button
                className={buttonS}
                onClick={modifyHandler}
                data-testid="submit-button"
              >
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
            data-testid="modify-input"
            className="w-full p-2 mt-3 text-black bg-gray-200 rounded-md"
            placeholder={todo}
            onChange={todoInputHandler}
          />
        ) : (
          <p className="mt-5 leading-6 text-left text-gray-600 text-md">
            {todo}
          </p>
        )}
      </div>
    </li>
  );
}

export default TodoCard;
