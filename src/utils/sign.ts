import { signHandlerProps, validateInputProps } from "../type/auth";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

// 이메일 유효성 검사 함수
export const isValidEmail = (email: string) => {
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(email);
};

// input 데이터 유효성 검사
export const validateInput = ({
  name,
  value,
  signUpInput,
  formErrors,
  setFormErrors,
  setIsDisabled,
}: validateInputProps): void => {
  const { email, password } = signUpInput;
  const newFormErrors = { ...formErrors };
  let isDisabled = false;

  if (!isValidEmail(email)) {
    newFormErrors.emailError = "유효한 이메일 형식이 아닙니다.";
    isDisabled = true;
  }

  if (password.length < 8) {
    newFormErrors.passwordError = "비밀번호는 8자 이상이어야 합니다.";
    isDisabled = true;
  }

  if (name === "email") {
    newFormErrors.emailError =
      value.trim() === "" ? "이메일을 입력해주세요." : "";
    if (value.trim() === "") {
      isDisabled = true;
    }
  }

  if (name === "password") {
    newFormErrors.passwordError =
      value.trim() === "" ? "비밀번호를 입력해주세요." : "";
    if (value.trim() === "") {
      isDisabled = true;
    }
  }

  setFormErrors(newFormErrors);
  setIsDisabled(isDisabled);
};

// submit시 유효성 검사
export const signHandler = ({
  event,
  signUpInput,
  formErrors,
  setFormErrors,
}: signHandlerProps): void => {
  event.preventDefault();

  const { email, password } = signUpInput;
  const newFormErrors = { ...formErrors };

  if (!isValidEmail(email)) {
    newFormErrors.emailError = "유효한 이메일 형식이 아닙니다.";
  }

  if (password.length < 8) {
    newFormErrors.passwordError = "비밀번호는 8자 이상이어야 합니다.";
  }

  if (email.trim() === "") {
    newFormErrors.emailError = "이메일을 입력해주세요.";
  }

  if (password.trim() === "") {
    newFormErrors.passwordError = "비밀번호를 입력해주세요.";
  }
  const isEmptyErrors = Object.values(formErrors).every(
    (error) => error === ""
  );

  if (!isEmptyErrors) {
    setFormErrors(newFormErrors);
    toast.error("입력한 정보를 다시 확인해주세요. 😅", {
      theme: "dark",
      autoClose: 3000,
    });
  } else {
    setFormErrors({
      emailError: "",
      passwordError: "",
    });
  }
};
