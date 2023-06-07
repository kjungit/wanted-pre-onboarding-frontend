export interface SignUpInput {
  email: string;
  password: string;
}

export interface FormErrors {
  emailError: string;
  passwordError: string;
}

export interface validateInputProps {
  name: string;
  value: string;
  signUpInput: SignUpInput;
  formErrors: FormErrors;
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface signHandlerProps {
  event: React.FormEvent;
  signUpInput: SignUpInput;
  formErrors: FormErrors;
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
}

export interface Token {
  access_token: string;
}

export interface AuthContextType {
  isLogined: boolean;
  setIsLogined: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface AuthProviderProps {
  children: React.ReactNode;
}
