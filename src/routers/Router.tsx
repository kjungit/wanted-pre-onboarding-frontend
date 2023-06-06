import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Layout";
import ProtectedRouter from "./ProtectedRouter";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route element={<ProtectedRouter />}>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/signin" element={<SignInPage />}></Route>
          <Route path="/todo" element={<MainPage />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
