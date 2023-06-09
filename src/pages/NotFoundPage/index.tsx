import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  const buttonClickHandler = () => {
    navigate("/");
  };
  return (
    <div className="flex h-[400px] flex-col items-center justify-center">
      <div className="text-3xl sm:text-7xl">NotFound</div>
      <button
        className="mt-3 bg-black p-4 text-white"
        onClick={buttonClickHandler}
      >
        메인 페이지로 가기
      </button>
    </div>
  );
}

export default NotFoundPage;
