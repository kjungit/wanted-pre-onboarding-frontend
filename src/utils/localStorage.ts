export const getAccessTokenLocalStorage = (name: string): string | null => {
  const accessToken = localStorage.getItem(name);
  return accessToken;
};

export const setAccessTokenLocalStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const removeAccessTokenLocalStorage = () => {
  localStorage.removeItem("accessToken");
};
