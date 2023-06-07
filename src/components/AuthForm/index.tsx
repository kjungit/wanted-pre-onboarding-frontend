import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateInput } from "../../utils/sign";
import { signUp, signIn } from "../../apis/services/auth";
import { AuthContext } from "../../hooks/useAuthContext";

function AuthForm({ isSignUp }: { isSignUp: boolean }) {
  const { isLogined, setIsLogined } = useContext(AuthContext);

  const [authInput, setAuthInput] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAuthInput({ ...authInput, [name]: value });
    validateInput({
      name,
      value,
      signUpInput: { ...authInput, [name]: value },
      formErrors,
      setFormErrors,
      setIsDisabled,
    });
  };

  const authHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const authFunction = isSignUp ? signUp : signIn;

    authFunction(authInput)
      .then(() => {
        if (!isSignUp) {
          setIsLogined(!isLogined);
        }
        const message = isSignUp
          ? "회원가입이 완료되었습니다."
          : "로그인이 완료되었습니다.";
        alert(message);
        navigate(isSignUp ? "/signin" : "/todo");
      })
      .catch(() => {
        alert("다시 시도해주세요.");
      });
  };

  const { emailError, passwordError } = formErrors;

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        className="space-y-6"
        action="#"
        method="POST"
        onSubmit={authHandler}
      >
        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-bold leading-6 text-gray-900">
              Email
            </label>
          </div>

          <div className="mt-1">
            <input
              name="email"
              type="email"
              data-testid="email-input"
              onChange={inputChangeHandler}
              className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div className="mt-2 flex h-2 items-start text-xs text-red-700">
              {emailError ? emailError : ""}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-bold leading-6 text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-1">
            <input
              name="password"
              type="password"
              data-testid="password-input"
              onChange={inputChangeHandler}
              className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div className="mt-2 flex h-2 items-start text-xs text-red-700">
              {passwordError ? passwordError : ""}
              {authInput.password.length < 8 &&
                authInput.password.length > 0 && (
                  <div>비밀번호는 8자 이상이어야 합니다.</div>
                )}
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isDisabled}
            data-testid={isSignUp ? "signup-button" : "signin-button"}
            className={`mt-[50px] flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
              isDisabled
                ? "bg-gray-300 text-gray-600"
                : "bg-indigo-600 text-white hover:bg-indigo-500"
            }`}
          >
            {isSignUp ? "회원가입" : "로그인"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
