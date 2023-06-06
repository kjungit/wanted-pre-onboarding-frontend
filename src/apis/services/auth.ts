import { setAccessTokenLocalStorage } from "../../utils/localStorage";
import { axiosInstance } from "../axios";

interface UserSignProps {
  email: string;
  password: string;
}

export const signUp = async (user: UserSignProps): Promise<void> => {
  const { data } = await axiosInstance().post("/auth/signup", user);
  return data;
};

export const signIn = async (
  user: UserSignProps
): Promise<{ accessToken: string }> => {
  const { data } = await axiosInstance().post("/auth/signin", user);
  setAccessTokenLocalStorage(data);
  return data;
};
