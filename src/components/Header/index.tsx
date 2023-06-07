import { useContext } from "react";
import { removeAccessTokenLocalStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/useAuthContext";

function Header() {
  const { isLogined, setIsLogined } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeAccessTokenLocalStorage("accessToken");
    setIsLogined(!isLogined);
    navigate("/signin");
  };

  return (
    <nav className="bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-end ">
          {isLogined ? (
            <div>
              <button
                onClick={logoutHandler}
                className="nline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  navigate("/signin");
                }}
                className="nline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                로그인
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="nline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                회원가입
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
