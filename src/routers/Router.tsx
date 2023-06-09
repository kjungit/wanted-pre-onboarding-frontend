import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import ProtectedRouter from "./ProtectedRouter";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import TodoPage from "../pages/TodoPage";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route element={<ProtectedRouter />}>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/signin" element={<SignInPage />}></Route>
            <Route path="/todo" element={<TodoPage />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routers;
