import { Token } from "../type/auth";

export const getAccessTokenLocalStorage = (name: string): string | null => {
  const accessToken = localStorage.getItem(name);
  return accessToken;
};

export const setAccessTokenLocalStorage = (accessToken: Token) => {
  const { access_token } = accessToken;
  localStorage.setItem("accessToken", access_token);
};

export const removeAccessTokenLocalStorage = (accessToken: string) => {
  localStorage.removeItem(accessToken);
};
