import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const signUpNavigate = () => {
    navigate("/signup");
  };

  const signInNavigate = () => {
    navigate("/signin");
  };

  return (
    <div className="relative isolate flex-grow px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-xl py-16 ">
        <div className="mb-8 sm:justify-center">
          <div className="rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-black">
            wanted-pre-onboarding-frontend
          </div>
        </div>
        <div className="text-center ">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            회원가입 후 로그인을 하여
            <br />
            TodoList를 사용하실 수 있습니다.
          </h1>
          <div className="mt-8">
            <button
              className="mx-4 h-[120px] w-[120px] bg-black text-white hover:bg-zinc-700 sm:h-[160px] sm:w-[160px]"
              onClick={signInNavigate}
            >
              로그인
            </button>
            <button
              className="mx-4 h-[120px] w-[120px] bg-black text-white hover:bg-zinc-700 sm:h-[160px] sm:w-[160px]"
              onClick={signUpNavigate}
            >
              회원가입
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6"></div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </div>
  );
}

export default MainPage;
