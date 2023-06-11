import { useContext } from "react";
import { removeAccessTokenLocalStorage } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/useAuthContext";

function Header() {
  const { isLogined, setIsLogined } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeAccessTokenLocalStorage("accessToken");
    setIsLogined(!isLogined);
    navigate("/signin");
  };

  const mainLogoHandler = () => {
    navigate("/");
  };

  return (
    <nav className="bg-black">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 ">
          <h1
            onClick={mainLogoHandler}
            className="text-sm font-bold text-white cursor-pointer sm:text-xl"
          >
            wanted-pre-onboarding-frontend
          </h1>
          {isLogined ? (
            <div>
              <button
                onClick={logoutHandler}
                className="items-center justify-center p-2 font-bold text-gray-200 rounded-md nline-flex hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <div className="flex text-sm sm:text-[16px] ">
              <button
                onClick={() => {
                  navigate("/signin");
                }}
                className="items-center justify-center p-2 text-gray-200 rounded-md nline-flex hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                로그인
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="items-center justify-center p-2 text-gray-200 rounded-md nline-flex hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
