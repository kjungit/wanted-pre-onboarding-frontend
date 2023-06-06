import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import ProtectedRouter from "./ProtectedRouter";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRouter />}>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/signin" element={<SignInPage />}></Route>
            <Route path="/todo" element={<MainPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default Routers;
