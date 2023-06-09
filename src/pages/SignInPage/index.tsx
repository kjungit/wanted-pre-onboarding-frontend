import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";

function SignInPage() {
  const navigate = useNavigate();

  const signUpNavigate = () => {
    navigate("/signup");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          SignIn
        </h2>
        <AuthForm isSignUp={false} />

        <div>
          <button
            onClick={signUpNavigate}
            className="mt-4 flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            회원가입 페이지로 가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
