import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessTokenLocalStorage } from "../utils/localStorage";

function ProtectedRouter() {
  const isCookie = getAccessTokenLocalStorage("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (isCookie === null) {
      alert("로그인 후 해당 페이지에 접근할 수 있습니다. 😅");
      navigate("/signin");
    } else if (["/signup", "/signin"].includes(window.location.pathname)) {
      alert("현재 로그인이 되어있습니다. 😊");
      navigate("/todo");
    }
  }, [isCookie, navigate]);

  return <div>ProtectedRouter</div>;
}

export default ProtectedRouter;
