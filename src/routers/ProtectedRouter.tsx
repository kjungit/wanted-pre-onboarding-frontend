import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getAccessTokenLocalStorage } from "../utils/localStorage";

function ProtectedRouter() {
  const isToken = getAccessTokenLocalStorage("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (["/todo"].includes(window.location.pathname) && isToken === null) {
      alert("로그인 후 해당 페이지에 접근할 수 있습니다. 😅");
      navigate("/signin");
      return;
    }

    if (
      ["/signup", "/signin"].includes(window.location.pathname) &&
      isToken !== null
    ) {
      alert("현재 로그인이 되어있습니다. 😊");
      navigate("/todo");
      return;
    }
  }, [isToken, navigate]);

  return <Outlet />;
}

export default ProtectedRouter;
