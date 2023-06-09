import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
